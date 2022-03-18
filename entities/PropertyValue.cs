using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class PropertyValue
    {
        [Key]
        public int Id { get; set; }
        public double AbsValue { get; set; }
        public double RelValue { get; set; }
        public Property Property { get; set; }
        public Component Components { get; set; }
    }
}
