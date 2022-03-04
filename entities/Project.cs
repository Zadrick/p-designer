using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Project
    {
        public Project()
        {
            Components = new HashSet<Component>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public double Value { get; set; }
        public double Rating { get; set; }
        public int Cost { get; set; }
        public ICollection<Component> Components { get; set; }
    }
}
