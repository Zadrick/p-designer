namespace p_designer.Models
{
    public class CriteriaModel
    {
        public class Read
        {
            public class Long
            {
                public int Id { get; set; }
                public int PatternId { get; set; }
                public string Name { get; set; }
                public double MinValue { get; set; }
                public double MaxValue { get; set; }
                public double TargetValue { get; set; }
                public bool IsMinimization { get; set; }
                public int AttributeId { get; set; }
            }

            public class Short
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public double MinValue { get; set; }
                public double MaxValue { get; set; }
                public double TargetValue { get; set; }
                public bool IsMinimization { get; set; }
            }
        }

        public class Create
        {
            public int PatternId { get; set; }
            public string Name { get; set; }
            public double MinValue { get; set; }
            public double MaxValue { get; set; }
            public double TargetValue { get; set; }
            public bool IsMinimization { get; set; }
            public int AttributeId { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public int PatternId { get; set; }
            public string Name { get; set; }
            public double MinValue { get; set; }
            public double MaxValue { get; set; }
            public double TargetValue { get; set; }
            public bool IsMinimization { get; set; }
            public int AttributeId { get; set; }
        }
    }
}
