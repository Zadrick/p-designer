using Microsoft.AspNetCore.Mvc;
using p_designer.Entities;
using p_designer.Models;
using p_designer.Services;
using Swashbuckle.AspNetCore.Annotations;
using System.ComponentModel.DataAnnotations;

namespace p_designer.Controllers
{
    public class ComponentController :  BaseController
    {
        private ComponentService componentService { get; set; }

        public ComponentController(ComponentService componentService)
        {
            this.componentService = componentService;
        }

        [HttpGet]
        [Route("component")]
        [SwaggerOperation(Summary = "Получить компонент")]
        public async Task<ComponentModel.Read.Long> ReadAsync([Required]int id)
        {
            return await componentService.ReadAsync(id);
        }

        [HttpPost]
        [Route("component")]
        [SwaggerOperation(Summary = "Создать компонент")]
        public async Task<int> CreateAsync(ComponentModel.Create componentModel)
        {
            return await componentService.CreateAsync(componentModel);
        }

        [HttpPut]
        [Route("component")]
        [SwaggerOperation(Summary = "Изменить компонент")]
        public async Task UpdateAsync(ComponentModel.Update componentModel)
        {
            await componentService.UpdateAsync(componentModel);
        }

        [HttpDelete]
        [Route("component/remove")]
        [SwaggerOperation(Summary = "Изменить статус компонента на deleted")]
        public async Task RemoveAsync([Required]int id)
        {
            await componentService.RemoveAsync(id);
        }

        [HttpDelete]
        [Route("component/delete")]
        [SwaggerOperation(Summary = "Удалить компонент из базы данных")]
        public async Task DeleteAsync([Required]int id)
        {
            await componentService.DeleteAsync(id);
        }
    }
}
