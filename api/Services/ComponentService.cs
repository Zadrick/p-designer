using Mapster;
using Microsoft.EntityFrameworkCore;
using p_designer.common;
using p_designer.Entities;
using p_designer.Models;
using p_designer.Models.Enums;

namespace p_designer.Services
{
    public class ComponentService
    {
        private PDesignerContext context { get; set; }
        
        public ComponentService(PDesignerContext context)
        {
            this.context = context;
        }

        public async Task<ComponentModel.Read.Long> ReadAsync(int id)
        {
            var component = await context.Components.FindAsync(id);
            return component.Adapt<ComponentModel.Read.Long>();
        }

        public async Task<MetaDataModel<ComponentModel.Read.Short>> GetPageFromProjectAsync
            (int projectId, int page, int pageSize)
        {
            var project = await context.Projects.Include(c => c.Components)
                .Where(p => p.Id == projectId)
                .SingleAsync();

            var data = project.Components.Select(c =>
            {
                var model = c.Adapt<ComponentModel.Read.Short>();
                return model;
            }).AsQueryable();

            var factory = new MetaDataFactory<ComponentModel.Read.Short>(data);
            return await factory.CreateAsync(page, pageSize);
        }

        public async Task<int> CreateAsync(ComponentModel.Create model)
        {
            var compType = await context.ComponentTypes.FindAsync(model.ComponentTypeId);

            if (compType.LibraryId != model.LibraryId)
                throw new Exception($"Library does not contain componentType = {model.ComponentTypeId}");

            var component = model.Adapt<Component>();
            await context.AddAsync(component);
            await context.SaveChangesAsync();
            return component.Id;
        }

        public async Task UpdateAsync(ComponentModel.Update model)
        {
            var compType = await context.ComponentTypes.FindAsync(model.ComponentTypeId);

            if (compType.LibraryId != model.LibraryId)
                throw new Exception($"Library does not contain componentType = {model.ComponentTypeId}");

            var component = model.Adapt<Component>();
            context.Update(component);
            await context.SaveChangesAsync();
        }

        public async Task RemoveAsync(int id)
        {
            var component = await context.Components.FindAsync(id);
            component.LifecycleStatusId = (int)LifecycleStatusEnum.Deleted;
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var component = await context.Components.FindAsync(id);
            context.Remove(component);
            await context.SaveChangesAsync();
        }
    }
}
