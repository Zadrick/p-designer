using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Component
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

    }  
}
