using Microsoft.EntityFrameworkCore;
using p_designer.common;
using p_designer.common.extensions;
using p_designer.models;

namespace p_designer.common
{
    public class MetaDataFactory<T>
    {
        private IQueryable<T> data { get; set; }
        public MetaDataFactory(IQueryable<T> data)
        {
            this.data = data;
        }

        public async Task<MetaDataModel<T>> CreateAsync(int page, int pageSize)
        {
            var meta = new Meta();
            var pagedData = data.GetPage(page, pageSize);

            meta.TotalItemsNumber = await data.CountAsync();
            meta.PagesNumber = PagesCounter.GetPagesNumber(pageSize, meta.TotalItemsNumber);
            meta.CurrentPage = page;
            meta.HasNextPage = meta.CurrentPage < meta.PagesNumber;
            meta.HasPreviousPage = meta.CurrentPage > 1;

            return new MetaDataModel<T>()
            {
                Data = pagedData,
                Meta = meta
            };
        }
    }
}
