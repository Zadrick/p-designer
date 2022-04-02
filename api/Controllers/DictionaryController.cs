using Microsoft.AspNetCore.Mvc;
using p_designer.Entities;
using p_designer.Models;
using p_designer.services;
using Swashbuckle.AspNetCore.Annotations;

namespace p_designer.Controllers
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
        [SwaggerOperation(Summary = "Спарвочник статусов")]
        public async Task<IQueryable<DictionaryModel>> GetLifecycleStatuses()
        {
            return await dictionaryService.GetLifecycleStatusesAsync();
        }

        [HttpGet]
        [Route("aspect-levels")]
        [SwaggerOperation(Summary = "Справочник аспектов/категорий")]
        public async Task<IQueryable<DictionaryModel>> GetAspectLevels()
        {
            return await dictionaryService.GetAspectLevelsAsync();
        }

        [HttpGet]
        [Route("attributes")]
        [SwaggerOperation(Summary = "Справочник атрибутов")]
        public async Task<IQueryable<DictionaryModel>> GetAttributes()
        {
            return await dictionaryService.GetAttributesAsync();
        }

        [HttpGet]
        [Route("measure-units")]
        [SwaggerOperation(Summary = "Справочник единиц измерения")]
        public async Task<IQueryable<DictionaryModel>> GetMeasureUnits()
        {
            return await dictionaryService.GetMeasureUnitsAsync();
        }
    }
}
