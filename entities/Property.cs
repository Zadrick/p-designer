using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Property
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public double AbsValue { get; set; }
        public double RelValue { get; set; }
        public MeasureUnit MeasureUnit { get; set; }
    }
}
