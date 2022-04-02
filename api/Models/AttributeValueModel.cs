namespace p_designer.Models
{
    public class AttributeValueModel
    {
        public class Read
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public double AbsValue { get; set; }
            public double RelValue { get; set; }
            public int MeasureUnitId { get; set; }
        }

        public class Create
        {
            public int AttributeId { get; set; }
            public double AbsValue { get; set; }
            public double RelValue { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public int AttributeId { get; set; }
            public double AbsValue { get; set; }
            public double RelValue { get; set; }
        }
    }
}
