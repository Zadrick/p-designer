using Mapster;
using Microsoft.EntityFrameworkCore;
using p_designer.entities;
using p_designer.Models;

namespace p_designer.services
{
    public class PatternService
    {
        private PDesignerContext context { get; set; }
        public PatternService(PDesignerContext context)
        {
            this.context = context;
        }

        public async Task<PatternModel.Read> ReadAsync(int id)
        {
            return await context.Patterns
                .ProjectToType<PatternModel.Read>()
                .SingleAsync(p => p.Id == id);
        }

        public async Task CreateAsync(PatternModel.Create patternModel)
        {
            var pattern = patternModel.Adapt<Pattern>();
            await context.AddAsync(pattern);
            await context.SaveChangesAsync();
        }

        public async Task UpdateAsync(PatternModel.Update patternModel)
        {
            var pattern = patternModel.Adapt<PatternModel.Update>();
            context.Update(pattern);
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var pattern = await context.Patterns.FindAsync(id);
            context.Remove(pattern);
            await context.SaveChangesAsync();
        }
    }
}
