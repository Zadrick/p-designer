using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.Entities
{
    public class Attribute
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(MeasureUnit))]
        public int? MeasureUnitId { get; set; }
        [Required]
        public string Name { get; set; }
        public MeasureUnit MeasureUnit { get; set; }
        public ICollection<Attribute> Attributes { get; set; }
    }
}