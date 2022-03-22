using Microsoft.AspNetCore.Mvc;
using p_designer.models;
using p_designer.services;
using Swashbuckle.AspNetCore.Annotations;
using System.ComponentModel.DataAnnotations;

namespace p_designer.controllers
{
    public class PatternController : BaseController
    {
        private PatternService patternService { get; set; }

        public PatternController(PatternService patternService)
        {
            this.patternService = patternService;
        }

        [HttpGet]
        [Route("patterns")]
        [SwaggerOperation(Summary = "Получить страницу паттернов")]
        public async Task<MetaDataModel<PatternModel.Read.Short>> ReadPatternsPage([Required] int page, [Required] int pageSize)
        {
            return await patternService.ReadPageAsync(page, pageSize);
        }

        [HttpGet]
        [Route("pattern")]
        [SwaggerOperation(Summary = "Получить паттерн")]
        public async Task<PatternModel.Read.Long> ReadPattern([Required] int id)
        {
            return await patternService.ReadAsync(id);
        }

        [HttpPost]
        [Route("pattern")]
        [SwaggerOperation(Summary = "Создать паттерн")]
        public async Task<int> CreatePattern(PatternModel.Create pattern)
        {
            return await patternService.CreateAsync(pattern);
        }

        [HttpPut]
        [Route("pattern")]
        [SwaggerOperation(Summary = "Изменить паттерн")]
        public async Task UpdatePattern(PatternModel.Update pattern)
        {
            await patternService.UpdateAsync(pattern);
        }

        [HttpDelete]
        [Route("pattern/remove")]
        [SwaggerOperation(Summary = "Изменить статус паттерна на deleted")]
        public async Task RemoveAsync([Required] int id)
        {
            await patternService.RemoveAsync(id);
        }

        [HttpDelete]
        [Route("pattern/delete")]
        [SwaggerOperation(Summary = "Удалить паттерн из базы данных")]
        public async Task DeleteAsync([Required] int id)
        {
            await patternService.DeleteAsync(id);
        }
    }
}
