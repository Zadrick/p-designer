namespace p_designer.Models
{
    public class ComponentModel
    {
        public class Read
        {
            public class Long
            {
                public string Name { get; set; }
                public int CategoryId { get; set; }
                public int? ComponentTypeId { get; set; }
                public int LibraryId { get; set; }
            }

            public class Short
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public int? ComponentTypeId { get; set; }
                public int LifecycleStatusId { get; set; }
            }
        }

        public class Create
        {
            public string Name { get; set; }
            public int CategoryId { get; set; }
            public int? ComponentTypeId { get; set; }
            public int LibraryId { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int CategoryId { get; set; }
            public int? ComponentTypeId { get; set; }
            public int LibraryId { get; set; }
        }
    }
}
