using Microsoft.AspNetCore.Mvc;
using p_designer.entities;
using p_designer.models;
using p_designer.services;
using Swashbuckle.AspNetCore.Annotations;

namespace p_designer.controllers
{
    public class DictionaryController : BaseController
    {
        private DictionaryService dictionaryService { get; set; }
        public DictionaryController(DictionaryService dictionaryService)
        {
            this.dictionaryService = dictionaryService;
        }

        [HttpGet]
        [Route("lifecycle-statuses")]
        [SwaggerOperation(Summary = "Статусы жизненного цикла")]
        public async Task<IQueryable<DictionaryModel>> GetLifecycleStatuses()
        {
            return await dictionaryService.GetLifecycleStatusesAsync();
        }

        [HttpGet]
        [Route("aspect-levels")]
        [SwaggerOperation(Summary = "Уровни аспектов")]
        public async Task<IQueryable<DictionaryModel>> GetAspectLevels()
        {
            return await dictionaryService.GetAspectLevelsAsync();
        }
    }
}
