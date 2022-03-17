namespace p_designer.Models
{
    public class PatternModel
    {
        public class Read
        {
            public class Long
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public int LifecycleStatusId { get; set; }
                public double ProjectValueMin { get; set; }
                public double ProjectValueMax { get; set; }
                public double ProjectValueTarget { get; set; }
            }

            public class Short
            {
                public int Id { get; set; }
                public string Name { get; set; }
            }
        }

        public class Create
        {
            public string Name { get; set; }
            public int LifecycleStatusId { get; set; }
            public double ProjectValueMin { get; set; }
            public double ProjectValueMax { get; set; }
            public double ProjectValueTarget { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int LifecycleStatusId { get; set; }
            public double ProjectValueMin { get; set; }
            public double ProjectValueMax { get; set; }
            public double ProjectValueTarget { get; set; }
        }
    }
}
