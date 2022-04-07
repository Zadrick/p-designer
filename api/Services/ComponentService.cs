using Microsoft.EntityFrameworkCore;
using p_designer.Entities;
using p_designer.Models;

namespace p_designer.Services
{
    public class ComponentService
    {
        private PDesignerContext context { get; set; }
        
        public ComponentService(PDesignerContext context)
        {
            this.context = context;
        }
    }
}
