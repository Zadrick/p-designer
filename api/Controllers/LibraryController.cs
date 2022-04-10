using Microsoft.AspNetCore.Mvc;
using p_designer.Models;
using p_designer.Services;
using Swashbuckle.AspNetCore.Annotations;
using System.ComponentModel.DataAnnotations;

namespace p_designer.Controllers
{
    public class LibraryController : BaseController
    {
        private LibraryService libraryService { get; set; }

        public LibraryController(LibraryService libraryService)
        {
            this.libraryService = libraryService;
        }

        [HttpGet]
        [Route("libraries")]
        [SwaggerOperation(Summary = "Получить список библиотек")]
        public async Task<MetaDataModel<LibraryModel.Read.Short>> GetPageAsync(int page, int pageSize)
        {
            return await libraryService.GetPageAsync(page, pageSize);
        }

        [HttpGet]
        [Route("library")]
        [SwaggerOperation(Summary = "Получить библиотеку компонентов")]
        public async Task<LibraryModel.Read.Long> ReadLibraryAsync([Required] int id)
        {
            return await libraryService.ReadAsync(id);
        }

        [HttpPost]
        [Route("library")]
        [SwaggerOperation(Summary = "Создать библиотеку компонентов")]
        public async Task<int> CreateAsync(LibraryModel.Create libraryModel)
        {
            return await libraryService.CreateAsync(libraryModel);
        }

        [HttpPut]
        [Route("library")]
        [SwaggerOperation(Summary = "Изменить библиотеку компонентов")]
        public async Task UpdateAsync(LibraryModel.Update libraryModel)
        {
            await libraryService.UpdateAsync(libraryModel);
        }

        [HttpDelete]
        [Route("library/remove")]
        [SwaggerOperation(Summary = "Изменить статус библиотеки на deleted")]
        public async Task RemoveAsync([Required] int id)
        {
            await libraryService.RemoveAsync(id);
        }

        [HttpDelete]
        [Route("library/delete")]
        [SwaggerOperation(Summary = "Удалить библиотеку из базы данных")]
        public async Task DeleteAsync([Required] int id)
        {
            await libraryService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("library/projects")]
        [SwaggerOperation(Summary = "Получить проекты, в которые импортирована библиотека")]
        public async Task<MetaDataModel<ProjectModel.Read.Short>> GetProjectsAsync([Required]int libraryId, [Required] int page, [Required] int pageSize)
        {
            return await libraryService.GetProjects(libraryId, page, pageSize);
        }

/*        [HttpGet]
        [Route("library/components")]
        [SwaggerOperation(Summary = "Получить компоненты, включенные в библиотеку")]
        public async Task<MetaDataModel<ComponentModel.Read.Short>> GetComponentsAsync([Required]int libraryId, [Required]int page, [Required]int pageSize)
        {
            return await libraryService.GetComponentsAsync(libraryId, page, pageSize);
        }*/
    }
}
