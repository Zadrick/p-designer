using Mapster;
using p_designer.entities;
using p_designer.models;

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
    }
}
