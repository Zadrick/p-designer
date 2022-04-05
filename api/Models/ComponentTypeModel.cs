namespace p_designer.Models
{
    public class ComponentTypeModel
    {
        public class Read
        {
            public class Short
            {
                public int Id { get; set; }
                public string Name { get; set; }
            }

            public class Long
            {
                public int Id { get; set; }
                public int LibraryId { get; set; }
                public string Name { get; set; }
            }
        }

        public class Create
        {
            public int LibraryId { get; set; }
            public string Name { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public int LibraryId { get; set; }
            public string Name { get; set; }
        }
    }
}
