using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Library
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        public ICollection<Component> Components { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}