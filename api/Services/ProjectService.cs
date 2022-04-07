using Mapster;
using Microsoft.EntityFrameworkCore;
using p_designer.common;
using p_designer.Entities;
using p_designer.Extensions;
using p_designer.Models;
using p_designer.Models.Enums;

namespace p_designer.Services
{
    public class ProjectService
    {
        private PDesignerContext context { get; set; }

        public ProjectService(PDesignerContext context)
        {
            this.context = context;
        }

        public async Task<ProjectModel.Read.Long> ReadAsync(int id)
        {
            var projectModel = (await context.Projects.FindAsync(id)).Adapt<ProjectModel.Read.Long>();
            return projectModel;
        }

        public async Task<MetaDataModel<ProjectModel.Read.Short>> GetPageAsync(int page, int pageSize)
        {
            var projects = context.Projects.Where(p => p.LifecycleStatusId != (int)LifecycleStatusEnum.Deleted)
                .ProjectToType<ProjectModel.Read.Short>();

            var factory = new MetaDataFactory<ProjectModel.Read.Short>(projects);
            return await factory.CreateAsync(page, pageSize);
        }

        public async Task<int> CreateAsync(ProjectModel.Create projectModel)
        {
            var project = projectModel.Adapt<Project>();
            await context.Projects.AddAsync(project);
            await context.SaveChangesAsync();
            return project.Id;
        }

        public async Task UpdateAsync(ProjectModel.Update projectModel)
        {
            var existingProject = await context.Projects.FindAsync(projectModel.Id);
            existingProject.MergeWithObject(projectModel);
            await context.SaveChangesAsync(); 
        }

        public async Task RemoveAsync(int id)
        {
            var project = await context.Projects.FindAsync(id);
            project.LifecycleStatusId = (int)LifecycleStatusEnum.Deleted;
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var project = await context.Projects.FindAsync(id);
            context.Projects.Remove(project);
            await context.SaveChangesAsync();
        }

        public async Task<MetaDataModel<LibraryModel.Read.Short>> GetLibrariesAsync(int projectId, int page, int pageSize)
        {
            var project = await context.Projects.Include(p => p.Libraries)
                .Where(p => p.Id == projectId)
                .SingleAsync();

            var data = project.Libraries.Select(l =>
            {
                var model = l.Adapt<LibraryModel.Read.Short>();
                return model;
            }).AsQueryable();

            var factory = new MetaDataFactory<LibraryModel.Read.Short>(data);
            return await factory.CreateAsync(page, pageSize);
        }

        public async Task ImportAsync(int projectId, int libraryId)
        {
            var project = await context.Projects.Include(p => p.Libraries)
                .Where(p => p.Id == projectId)
                .SingleAsync();

            var lib = await context.Libraries.FindAsync(libraryId);
            project.Libraries.Add(lib);
            await context.SaveChangesAsync();
        }
    }
}
