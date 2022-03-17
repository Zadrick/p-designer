namespace p_designer.common.extensions
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> GetPage<T>(this IQueryable<T> query, int page, int pageSize)
        {
            if (pageSize > 200)
                throw new Exception("Page size must be lower than 200");

            return query.Skip((page - 1) * pageSize).Take(pageSize);
        }
    }
}
