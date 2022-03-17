namespace p_designer.Models
{
    public class PatternModel
    {
        public class Read
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Status { get; set; }
        }

        public class Create
        {
            public string Name { get; set; }
            public string Status { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Status { get; set; }
        }
    }
}
