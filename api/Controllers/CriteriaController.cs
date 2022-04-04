using Microsoft.AspNetCore.Mvc;
using p_designer.Models;
using p_designer.Services;
using Swashbuckle.AspNetCore.Annotations;
using System.ComponentModel.DataAnnotations;

namespace p_designer.Controllers
{
    public class CriteriaController : BaseController
    {
        private CriteriaService criteriaService { get; set; }
        public CriteriaController(CriteriaService criteriaService)
        {
            this.criteriaService = criteriaService;
        }

        [HttpGet]
        [Route("criteria")]
        [SwaggerOperation(Summary = "Получить характеристику")]
        public async Task<CriteriaModel.Read.Long> ReadAsync(int id)
        {
            return await criteriaService.ReadAsync(id);
        }

        [HttpGet]
        [Route("criterias")]
        [SwaggerOperation(Summary = "Получить список характеристик")]
        public async Task<MetaDataModel<CriteriaModel.Read.Short>> GetPageAsync([Required] int patternId, [Required] int page, [Required] int pageSize)
        {
            return await criteriaService.GetPageAsync(patternId, page, pageSize);
        }

        [HttpPost]
        [Route("criteria")]
        [SwaggerOperation(Summary = "Создать характеристику")]
        public async Task<int> CreateAsync(CriteriaModel.Create criteria)
        {
            return await criteriaService.CreateAsync(criteria);
        }

        [HttpPut]
        [Route("criteria")]
        [SwaggerOperation(Summary = "Изменить характеристику")]
        public async Task UpdateAsync(CriteriaModel.Update criteria)
        {
            await criteriaService.UpdateAsync(criteria);
        }

        [HttpDelete]
        [Route("criteria")]
        [SwaggerOperation(Summary = "Удалить характеристику")]
        public async Task DeleteAsync([Required] int id)
        {
            await criteriaService.DeleteAsync(id);
        }
    }
}
