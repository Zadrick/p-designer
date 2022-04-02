namespace p_designer.Models
{
    public class ComponentModel
    {
        public class Read
        {
            public class Short
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public int CategoryId { get; set; }
            }
        }

        public class Create
        {
            public string Name { get; set; }
            public int CategoryId { get; set; }
            public IEnumerable<AttributeValueModel.Create> Properties { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int CategoryId { get; set; }
            public IEnumerable<AttributeValueModel.Create> CreatedProperties { get; set; }
            public IEnumerable<AttributeValueModel.Update> UpdatedProperties { get; set; }
            public IEnumerable<int> DeletedComponents { get; set; }
        }
    }
}
