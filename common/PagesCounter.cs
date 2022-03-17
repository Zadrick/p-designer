namespace p_designer.common
{
    public static class PagesCounter
    {
        public static int GetPagesNumber(int pagesSize, int totalItemsNumber)
        {
            var pages = totalItemsNumber / pagesSize + 1;
            if (totalItemsNumber % pagesSize == 0)
                pages--;
            return pages;
        }
    }
}
