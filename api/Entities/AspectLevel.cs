using System.ComponentModel.DataAnnotations;

namespace p_designer.Entities
{
    public class AspectLevel
    {
        public AspectLevel()
        {
            Components = new HashSet<Component>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Component> Components { get; set; }
        public ICollection<Pattern> Patterns { get; set; }
    }
}