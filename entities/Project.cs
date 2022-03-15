using Microsoft.EntityFrameworkCore;
using p_designer.entities;
using p_designer.models;
using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Project
    {
        public Project()
        {
            Components = new HashSet<Component>();
            Libraries = new HashSet<Library>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public double Value { get; set; }
        public double Rating { get; set; }
        public int Cost { get; set; }
        [Required]
        public LifecycleStatusEnum LifecycleStatus { get; set; }
        public ICollection<Component> Components { get; set; }
        public ICollection<Library> Libraries { get; set; }
    }
}
