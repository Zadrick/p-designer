using p_designer.entities;
using System.ComponentModel.DataAnnotations;

namespace p_designer.models
{
    public class ProjectModel
    {
        public class Read
        {
            public class Long
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public string PatternName { get; set; }
                public LifecycleStatus LifecycleStatusId { get; set; }
                public double Value { get; set; }
                public double Rating { get; set; }
            }

            public class Short
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public string PatternName { get; set; }
                public double Rating { get; set; }
            }
        }

        public class Create
        {
            public string Name { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }
    }
}
