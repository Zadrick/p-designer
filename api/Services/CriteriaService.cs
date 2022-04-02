using Mapster;
using Microsoft.EntityFrameworkCore;
using p_designer.common;
using p_designer.Entities;
using p_designer.Models;

namespace p_designer.Services
{
    public class CriteriaService
    {
        private PDesignerContext context;

        public CriteriaService(PDesignerContext context)
        {
            this.context = context;
        }

        public async Task<CriteriaModel.Read.Long> ReadAsync(int id)
        {
            var criteria = (await context.Criterias.FindAsync(id)).Adapt<CriteriaModel.Read.Long>();
            return criteria;
        }

        public async Task<MetaDataModel<CriteriaModel.Read.Short>> GetPageAsync(int patternId, int page, int pageSize)
        {
            var criterias = context.Criterias.AsNoTracking().Where(c => c.PatternId == patternId).ProjectToType<CriteriaModel.Read.Short>();

            var factory = new MetaDataFactory<CriteriaModel.Read.Short>(criterias);
            return await factory.CreateAsync(page, pageSize);
        }

        public async Task<int> CreateAsync(CriteriaModel.Create criteriaModel)
        {
            var criteria = criteriaModel.Adapt<Criteria>();
            
            await context.Criterias.AddAsync(criteria);
            await context.SaveChangesAsync();

            return criteria.Id;
        }

        public async Task UpdateAsync(CriteriaModel.Update criteriaModel)
        {
            var criteria = criteriaModel.Adapt<Criteria>();

            context.Criterias.Update(criteria);
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var criteria = await context.Criterias.FindAsync(id);
            context.Remove(criteria);
            await context.SaveChangesAsync();
        }
    }
}
