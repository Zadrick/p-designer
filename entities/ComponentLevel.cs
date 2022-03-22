using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class ComponentLevel
    {
        public ComponentLevel()
        {
            Components = new HashSet<Component>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Component> Components { get; set; }
    }
}