using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.Entities
{
    public class AttributeValue
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(Attribute))]
        public int AttributeId { get; set; }
        public double AbsValue { get; set; }
        public double RelValue { get; set; }
        public Attribute Attribute { get; set; }
        public Component Components { get; set; }
    }
}