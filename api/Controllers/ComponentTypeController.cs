using Microsoft.AspNetCore.Mvc;
using p_designer.Models;
using p_designer.Services;
using Swashbuckle.AspNetCore.Annotations;
using System.ComponentModel.DataAnnotations;

namespace p_designer.Controllers
{
    public class ComponentTypeController : BaseController
    {
        private ComponentTypeService componentTypeService { get; set; }

        public ComponentTypeController(ComponentTypeService componentTypeService)
        {
            this.componentTypeService = componentTypeService;
        }

        [HttpGet]
        [Route("componentType")]
        [SwaggerOperation("Получить тип компонента")]
        public async Task<ComponentTypeModel.Read.Long> ReadAsync([Required] int id)
        {
            return await componentTypeService.ReadAsync(id);
        }

        [HttpGet]
        [Route("componentTypes")]
        [SwaggerOperation("Получить все типы компонентов, содержащиеся в библиотеке")]
        public async Task<MetaDataModel<ComponentTypeModel.Read.Short>> GetPageAsync
            ([Required] int libraryId, [Required] int page, [Required] int pageSize)
        {
            return await componentTypeService.GetPageAsync(libraryId, page, pageSize);
        }

        [HttpPost]
        [Route("componentType")]
        [SwaggerOperation("Создать тип компонента")]
        public async Task<int> CreateAsync(ComponentTypeModel.Create model)
        {
            return await componentTypeService.CreateAsync(model);
        }

        [HttpPut]
        [Route("componentType")]
        [SwaggerOperation("Изменить тип компонента")]
        public async Task UpdateAsync(ComponentTypeModel.Update model)
        {
            await componentTypeService.UpdateAsync(model);
        }

        [HttpDelete]
        [Route("componentType")]
        [SwaggerOperation("Удалить тип компонента")]
        public async Task DeleteAsync([Required]int id)
        {
            await componentTypeService.DeleteAsync(id);
        }
    }
}
