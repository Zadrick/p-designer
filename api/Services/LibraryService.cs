using Mapster;
using Microsoft.EntityFrameworkCore;
using p_designer.common;
using p_designer.Entities;
using p_designer.Models;
using p_designer.Models.Enums;

namespace p_designer.Services
{
    public class LibraryService
    {
        private PDesignerContext context { get; set; }

        public LibraryService(PDesignerContext context)
        {
            this.context = context;
        }

        public async Task<MetaDataModel<LibraryModel.Read.Short>> GetPageAsync(int page, int pageSize)
        {
            var data = context.Libraries
                .Where(l => l.LifecycleStatusId != (int)LifecycleStatusEnum.Deleted)
                .ProjectToType<LibraryModel.Read.Short>();
            var factory = new MetaDataFactory<LibraryModel.Read.Short>(data);
            return await factory.CreateAsync(page, pageSize);
        }

        public async Task<LibraryModel.Read.Long> ReadAsync(int id)
        {
            var library = (await context.Libraries.FindAsync(id)).Adapt<LibraryModel.Read.Long>();
            return library;
        }

        public async Task<int> CreateAsync(LibraryModel.Create libraryModel)
        {
            var library = libraryModel.Adapt<Library>();
            await context.AddAsync(library);
            await context.SaveChangesAsync();
            return library.Id;
        }
        public async Task UpdateAsync(LibraryModel.Update libraryModel)
        {
            var library = libraryModel.Adapt<Library>();
            context.Update(library);
            await context.SaveChangesAsync();
        }

        public async Task RemoveAsync(int id)
        {
            var library = await context.Libraries.FindAsync(id);
            library.LifecycleStatusId = (int)LifecycleStatusEnum.Deleted;
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var library = await context.Libraries.FindAsync(id);
            context.Remove(library);
            await context.SaveChangesAsync();
        }

        public async Task<MetaDataModel<ProjectModel.Read.Short>> GetProjects(int libraryId, int page, int pageSize)
        {
            var projects = context.Projects
                .Include(p => p.Libraries)
                .Where(p => p.Libraries.Select(l => l.Id).Contains(libraryId) && p.LifecycleStatusId != (int)LifecycleStatusEnum.Deleted)
                .ProjectToType<ProjectModel.Read.Short>();

            var factory = new MetaDataFactory<ProjectModel.Read.Short>(projects);
            return await factory.CreateAsync(page, pageSize);
        }

        public async Task<MetaDataModel<ComponentModel.Read.Short>> GetComponentsAsync
            (int libraryId, int page, int pageSize)
        {
            var library = await context.Libraries.Include(l => l.Components)
                .Where(l => l.Id == libraryId).SingleAsync();

            var data = library.Components.Select(c =>
            {
                var model = c.Adapt<ComponentModel.Read.Short>();
                return model;
            }).AsQueryable();

            var facotry = new MetaDataFactory<ComponentModel.Read.Short>(data);
            return await facotry.CreateAsync(page, pageSize);
        }
    }
}
