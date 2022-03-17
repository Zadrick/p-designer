namespace p_designer.Models
{
    public class MetaDataModel<T>
    {
        public IEnumerable<T> Data { get; set; }
        public Meta Meta { get; set; }
    }

    public class Meta
    {
        public int TotalItemsNumber { get; set; }
        public int PagesNumber { get; set; }
        public int CurrentPage { get; set; }
        public bool HasNextPage { get; set; }
        public bool HasPreviousPage { get; set; }
    }
}
