using Mapster;
using Microsoft.EntityFrameworkCore;
using p_designer.common;
using p_designer.Entities;
using p_designer.Models;
using p_designer.Models.Enums;

namespace p_designer.Services
{
    public class ComponentTypeService
    {
        private PDesignerContext context { get; set; }

        public ComponentTypeService(PDesignerContext context)
        {
            this.context = context;
        }

        public async Task<ComponentTypeModel.Read.Long> ReadAsync(int id)
        {
            var compType = await context.ComponentTypes.FindAsync(id);
            return compType.Adapt<ComponentTypeModel.Read.Long>();
        }

        public async Task<MetaDataModel<ComponentTypeModel.Read.Short>> GetPageAsync(int libraryId, int page, int pageSize)
        {
            var data = context.ComponentTypes.Where(c => c.LibraryId == libraryId)
                .ProjectToType<ComponentTypeModel.Read.Short>();

            var factory = new MetaDataFactory<ComponentTypeModel.Read.Short>(data);
            return await factory.CreateAsync(page, pageSize);
        }
        public async Task<int> CreateAsync(ComponentTypeModel.Create model)
        {
            var compType = model.Adapt<ComponentType>();
            await context.AddAsync(compType);
            await context.SaveChangesAsync();

            return compType.Id;
        }

        public async Task UpdateAsync(ComponentTypeModel.Update model)
        {
            var compType = model.Adapt<ComponentType>();
            context.Update(compType);
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var compType = await context.ComponentTypes
                .Include(c => c.Components)
                .Where(c => c.Id == id)
                .SingleAsync();

            var components = compType.Components
                .Select(c =>
                {
                    c.LifecycleStatusId = (int)LifecycleStatusEnum.Deleted;
                    return c;
                });

            context.UpdateRange(components);
            await context.SaveChangesAsync();
        }
    }
}
