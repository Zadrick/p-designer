using Mapster;
using Microsoft.EntityFrameworkCore;
using p_designer.common;
using p_designer.common.extensions;
using p_designer.Entities;
using p_designer.Extensions;
using p_designer.Models;
using p_designer.Models.Enums;

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
            var pattern = (await context.Patterns.AsNoTracking()
                .Include(p => p.Characteristics)
                .Include(p => p.AspectLevels)
                .SingleAsync(p => p.Id == id));


            if (pattern.LifecycleStatusId == (int)LifecycleStatusEnum.Deleted)
                throw new Exception("Pattern is deleted.");

            var patternModel = pattern.Adapt<PatternModel.Read.Long>();

            patternModel.Aspects = pattern.AspectLevels.Select(a => a.Id);

            return patternModel;
        }

        public async Task<MetaDataModel<PatternModel.Read.Short>> ReadPageAsync(int page, int pageSize)
        {
            var data = context.Patterns.AsNoTracking()
                .Where(p => p.LifecycleStatusId != (int)LifecycleStatusEnum.Deleted)
                .ProjectToType<PatternModel.Read.Short>();
            var factory = new MetaDataFactory<PatternModel.Read.Short>(data);
            return await factory.CreateAsync(page, pageSize);
        }

        public async Task<int> CreateAsync(PatternModel.Create patternModel)
        {
            var pattern = patternModel.Adapt<Pattern>();
            await context.AddAsync(pattern);
            await context.SaveChangesAsync();
            return pattern.Id;
        }

        public async Task UpdateAsync(PatternModel.Update patternModel)
        {
            using (var transaction = await context.Database.BeginTransactionAsync())
            {
                try
                {
                    var existingPattern = await context.Patterns
                        .Include(p => p.AspectLevels)
                        .Where(p => p.Id == patternModel.Id).SingleAsync();

                    existingPattern.MergeWithObject(patternModel);
                    existingPattern.AspectLevels.Clear();
                    context.Patterns.Update(existingPattern);
                    await context.SaveChangesAsync();

                    existingPattern.AspectLevels = context.AspectLevels.Where(a => patternModel.Aspects.Contains(a.Id)).ToHashSet();
                    await context.SaveChangesAsync();

                    transaction.Commit();
                }
                catch(Exception)
                {
                    transaction.Rollback();
                    throw;
                }
            }
        }

        public async Task RemoveAsync(int id)
        {
            var pattern = await context.Patterns.FindAsync(id);
            pattern.LifecycleStatusId = (int)LifecycleStatusEnum.Deleted;

            var projects = context.Projects.AsNoTracking()
                .Where(p => p.PatternId == pattern.Id)
                .AsEnumerable()
                .Select(p =>
                {
                    p.LifecycleStatusId = (int)LifecycleStatusEnum.Deleted;
                    return p;
                });

            context.UpdateRange(projects);
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var pattern = await context.Patterns.FindAsync(id);
            context.Remove(pattern);
            await context.SaveChangesAsync();
        }

        public async Task<MetaDataModel<ProjectModel.Read.Short>> GetProjectsAsync(int patternId, int page, int pageSie)
        {
            var projects = context.Projects
                .AsNoTracking()
                .Where(p => p.PatternId == patternId && p.LifecycleStatusId != (int)LifecycleStatusEnum.Deleted)
                .ProjectToType<ProjectModel.Read.Short>();

            var factory = new MetaDataFactory<ProjectModel.Read.Short>(projects);
            return await factory.CreateAsync(page, pageSie);
        }
    }
}
