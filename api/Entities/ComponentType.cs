using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.Entities
{
    public class ComponentType
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(Library))]
        public int LibraryId { get; set; }
        public string Name { get; set; }
        public Library Library { get; set; }
        public ICollection<Component> Components { get; set; }
    }
}
