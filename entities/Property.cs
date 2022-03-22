using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Property
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public MeasureUnit MeasureUnit { get; set; }
    }
}
