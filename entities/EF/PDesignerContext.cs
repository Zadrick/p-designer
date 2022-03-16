using Microsoft.EntityFrameworkCore;

namespace p_designer.entities
{
    public class PDesignerContext : DbContext
    {
        public DbSet<Aspect> Aspects { get; set; }
        public DbSet<Characteristic> Characteristics { get; set; }
        public DbSet<Component> Components { get; set; }
        public DbSet<Library> Libraries { get; set; }
        public DbSet<MeasureUnit> MeasureUnits { get; set; }
        public DbSet<Pattern> Patterns { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Property> Properties { get; set; }
        public DbSet<ValidationStatus> ValidationStatuses { get; set; }
        public DbSet<LifecycleStatus> LifecycleStatuses { get; set; }
        public DbSet<AspectLevel> AspectLevels { get; set; }
        public DbSet<ComponentLevel> ComponentLevels { get; set; }
        
        public PDesignerContext()
        {
            Database.EnsureCreated();
        }

        public PDesignerContext(DbContextOptions<PDesignerContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionStrnig = "Server=(local);Database=PDesigner;Trusted_Connection=True;User id = sa;Password=1";
            optionsBuilder.UseSqlServer(connectionStrnig);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LifecycleStatus>().HasData(new HashSet<LifecycleStatus>
            {
                new LifecycleStatus() { Id = 1, Name = "Draft" },
                new LifecycleStatus() { Id = 2, Name = "Ready to use" },
                new LifecycleStatus() { Id = 3, Name = "Deleted" }
            });

            modelBuilder.Entity<AspectLevel>().HasData(new HashSet<AspectLevel>()
            {
                new AspectLevel() { Id = 1, Name = "Business Layer" },
                new AspectLevel() { Id = 2, Name = "Functional Layer" },
                new AspectLevel() { Id = 3, Name = "Information Layer" },
                new AspectLevel() { Id = 4, Name = "Communication Layer" },
                new AspectLevel() { Id = 5, Name = "Integration Layer" },
                new AspectLevel() { Id = 6, Name = "Physical Layer" }
            });

            modelBuilder.Entity<ComponentLevel>().HasData(new HashSet<ComponentLevel>()
            {
                new ComponentLevel() { Id = 1, Name = "Workpiece, Product" },
                new ComponentLevel() { Id = 2, Name = "Tool, Filed Device" },
                new ComponentLevel() { Id = 3, Name = "Technological Equipment" },
                new ComponentLevel() { Id = 4, Name = "Technological Cell" },
                new ComponentLevel() { Id = 5, Name = "Production Cell" },
                new ComponentLevel() { Id = 6, Name = "Production System" }
            });
        }
    }


}
