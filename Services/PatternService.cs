using Mapster;
using Microsoft.EntityFrameworkCore;
using p_designer.common;
using p_designer.common.extensions;
using p_designer.entities;
using p_designer.Models;
using p_designer.Models.enums;

namespace p_designer.services
{
    public class PatternService
    {
        private PDesignerContext context { get; set; }
        public PatternService(PDesignerContext context)
        {
            this.context = context;
        }

        public async Task<PatternModel.Read.Long> ReadAsync(int id)
        {
            return await context.Patterns
                .ProjectToType<PatternModel.Read.Long>()
                .SingleAsync(p => p.Id == id);
        }

        public async Task<MetaDataModel<PatternModel.Read.Short>> ReadPageAsync(int page, int pageSize)
        {
            var data = context.Patterns.Where(p => p.LifecycleStatusId != (int)LifecycleStatusEnum.Deleted)
                .ProjectToType<PatternModel.Read.Short>();
            var factory = new MetaDataFactory<PatternModel.Read.Short>(data);
            return await factory.CreateAsync(page, pageSize);
        }

        public async Task CreateAsync(PatternModel.Create patternModel)
        {
            var pattern = patternModel.Adapt<Pattern>();
            await context.AddAsync(pattern);
            await context.SaveChangesAsync();
        }

        public async Task UpdateAsync(PatternModel.Update patternModel)
        {
            var updatedPattern = patternModel.Adapt<Pattern>();

            var createdProjects = patternModel
                .CreatedProjects.Select(p =>
                {
                    var project = p.Adapt<Project>();
                    project.PatternId = patternModel.Id;
                    return project;
                });

            var deletedProjects = context.Projects.AsNoTracking()
                .Where(p => patternModel.DeletedProjects.Contains(p.Id));

            var createdCharacteristics = patternModel
                .CreatedCharacteristics.Select(c =>
                {
                    var charact = c.Adapt<Characteristic>();
                    charact.PatternId = patternModel.Id;
                    return charact;
                });

            var updatedCharacteristics = patternModel
                .UpdatedCharacteristics.Select(c =>
                {
                    var charact = c.Adapt<Characteristic>();
                    charact.PatternId = patternModel.Id;
                    return charact;         
                });

            var deletedCharacteristics = context.Characteristics.AsNoTracking()
                .Where(c => patternModel.DeletedCharacteristics.Contains(c.Id));

            context.UpdateRange(updatedCharacteristics);
            context.RemoveRange(deletedProjects);
            await context.AddRangeAsync(createdProjects);

            context.RemoveRange(deletedCharacteristics);
            await context.AddRangeAsync(createdCharacteristics);
            

            context.Update(updatedPattern);

            await context.SaveChangesAsync();
        }

        public async Task RemoveAsync(int id)
        {
            var pattern = await context.Patterns.FindAsync(id);
            pattern.LifecycleStatusId = (int)LifecycleStatusEnum.Deleted;
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
