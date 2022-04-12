using Microsoft.AspNetCore.Mvc;
using p_designer.Models;
using p_designer.Services;
using Swashbuckle.AspNetCore.Annotations;
using System.ComponentModel.DataAnnotations;

namespace p_designer.Controllers
{
    public class ProjectController : BaseController
    {
        private ProjectService projectService { get; set; }

        public ProjectController(ProjectService projectService)
        {
            this.projectService = projectService;
        }

        [HttpGet]
        [Route("projects")]
        [SwaggerOperation(Summary = "Получить список проектов")]
        public async Task<MetaDataModel<ProjectModel.Read.Short>> GetPageAsync([Required] int page, [Required] int pageSize)
        {
            return await projectService.GetPageAsync(page, pageSize);
        }

        [HttpGet]
        [Route("project")]
        [SwaggerOperation(Summary = "Получть проект")]
        public async Task<ProjectModel.Read.Long> ReadAsync([Required] int id)
        {
            return await projectService.ReadAsync(id);
        }

        [HttpPost]
        [Route("project")]
        [SwaggerOperation(Summary = "Создать проект")]
        public async Task<int> CreateAsync(ProjectModel.Create projectModel)
        {
            return await projectService.CreateAsync(projectModel);
        }

        [HttpPut]
        [Route("project")]
        [SwaggerOperation(Summary = "Изменить проект")]
        public async Task UpdateAsync(ProjectModel.Update projectModel)
        {
            await projectService.UpdateAsync(projectModel);
        }

        [HttpDelete]
        [Route("project/remove")]
        [SwaggerOperation(Summary = "Измнеить статус проекта на deleted")]
        public async Task RemoveAsync([Required] int id)
        {
            await projectService.RemoveAsync(id);
        }

        [HttpDelete]
        [Route("project/delete")]
        [SwaggerOperation(Summary = "Удалить проект из базы данных")]
        public async Task DeleteAsync([Required] int id)
        {
            await projectService.DeleteAsync(id);
        }
        
        [HttpGet]
        [Route("project/components")]
        [SwaggerOperation(Summary = "Получить все копмпоненты, добавленные в проект")]
        public async Task<MetaDataModel<ComponentModel.Read.Short>> GetComponents
            ([Required]int projectId, [Required]int page, [Required]int pageSize)
        {
            return await projectService.GetComponentsAsync(projectId, page, pageSize);
        }

        [HttpPost]
        [Route("project/component")]
        [SwaggerOperation(Summary = "Включить компонент в проект")]
        public async Task AddComponent([Required]int projectId, [Required]int componentId)
        {
            await projectService.AddComponentAsync(projectId, componentId);
        }

        [HttpDelete]
        [Route("project/component")]
        [SwaggerOperation(Summary = "Удалить компонент из проекта")]
        public async Task RemoveComponent([Required]int projectId, [Required]int componentId)
        {
            await projectService.RemoveComponentAsync(projectId, componentId);
        }

/*        [HttpGet]
        [Route("project/libraries")]
        [SwaggerOperation(Summary = "Получить библиотеки, включенные в проект")]
        public async Task<MetaDataModel<LibraryModel.Read.Short>> GetLibrariesAsync
            ([Required]int projectId, [Required]int page, [Required]int pageSize)
        {
            return await projectService.GetLibrariesAsync(projectId, page, pageSize);
        }*/

/*        [HttpPost]
        [Route("project/library")]
        [SwaggerOperation(Summary = "Импортировть библиотеку в проект")]
        public async Task ImportLibraryAsync([Required]int projectId, [Required]int libraryId)
        {

        }

        [HttpDelete]
        [Route("project/library")]
        [SwaggerOperation(Summary = "Убрать библиотеку из проекта")]
        public async Task RemoveLibraryFromProjectAsync([Required] int projectId, [Required] int libraryId)
        {

        }*/

    }
}
