using System.ComponentModel.DataAnnotations;

namespace p_designer.Entities
{
    public class Aspect
    {
        [Key]
        public int Id { get; set; }
        public int MaxCompNumber { get; set; }
        public int MinCompNumber { get; set; }
        public AspectLevel AspectLevel { get; set; }

    }
}