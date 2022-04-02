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
        public async Task<MetaDataModel<ProjectModel.Read.Short>> GetPageAsync([Required]int page, [Required]int pageSize)
        {
            return await projectService.GetPageAsync(page, pageSize);
        }

        [HttpGet]
        [Route("project")]
        [SwaggerOperation(Summary = "Получть проект")]
        public async Task<ProjectModel.Read.Long> ReadAsync([Required]int id)
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
        public async Task RemoveAsync([Required]int id)
        {
            await projectService.RemoveAsync(id);
        }

        [HttpDelete]
        [Route("project/delete")]
        [SwaggerOperation(Summary = "Удалить проект из базы данных")]
        public async Task DeleteAsync([Required]int id)
        {
            await projectService.DeleteAsync(id);
        }
    }
}
