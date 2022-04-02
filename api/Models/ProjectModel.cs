using p_designer.Entities;
using System.ComponentModel.DataAnnotations;

namespace p_designer.Models
{
    public class ProjectModel
    {
        public class Read
        {
            public class Long
            {
                public int Id { get; set; }
                public int PatternId { get; set; }
                public string Name { get; set; }
                public int LifecycleStatusId { get; set; }
                public double Value { get; set; }
                public double Rating { get; set; }
                public string Purpose { get; set; }
            }

            public class Short
            {
                public int Id { get; set; }
                public int PatternId { get; set; }
                public string Name { get; set; }
                public double Rating { get; set; }
            }
        }

        public class Create
        {
            public int PatternId { get; set; }
            public string Name { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public int PatternId { get; set; }
            public string Name { get; set; }
            public int LifecycleStatusId { get; set; }
            public string Purpose { get; set; }
        }
    }
}
