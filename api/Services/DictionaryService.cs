using Mapster;
using p_designer.Entities;
using p_designer.Models;

namespace p_designer.services
{
    public class DictionaryService
    {
        private PDesignerContext context { get; set; }

        public DictionaryService(PDesignerContext context)
        {
            this.context = context;
        }

        public Task<IQueryable<DictionaryModel>> GetLifecycleStatusesAsync()
        {
            return Task.FromResult(context.LifecycleStatuses.ProjectToType<DictionaryModel>());
        }

        public Task<IQueryable<DictionaryModel>> GetAspectLevelsAsync()
        {
            return Task.FromResult(context.AspectLevels.ProjectToType<DictionaryModel>());
        }

        public Task<IQueryable<DictionaryModel>> GetAttributesAsync()
        {
            return Task.FromResult(context.Attributes.ProjectToType<DictionaryModel>());
        }

        public Task<IQueryable<DictionaryModel>> GetMeasureUnitsAsync()
        {
            return Task.FromResult(context.MeasureUnits.ProjectToType<DictionaryModel>());
        }
    }
}
