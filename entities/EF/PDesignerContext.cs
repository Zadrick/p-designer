using Microsoft.EntityFrameworkCore;
using p_designer.models.enums;

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
        public DbSet<PropertyValue> Properties { get; set; }
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
                new LifecycleStatus() { Id = (int)LifecycleStatusEnum.Draft, Name = "Draft" },
                new LifecycleStatus() { Id = (int)LifecycleStatusEnum.ReadyToUse, Name = "Ready to use" },
                new LifecycleStatus() { Id = (int)LifecycleStatusEnum.Deleted, Name = "Deleted" }
            });

            modelBuilder.Entity<AspectLevel>().HasData(new HashSet<AspectLevel>()
            {
                new AspectLevel() { Id = (int)AspectLevelEnum.BusinessLayer, Name = "Business Layer" },
                new AspectLevel() { Id = (int)AspectLevelEnum.FunctionalLayer, Name = "Functional Layer" },
                new AspectLevel() { Id = (int)AspectLevelEnum.InformationLayer, Name = "Information Layer" },
                new AspectLevel() { Id = (int)AspectLevelEnum.CommunicationLayer, Name = "Communication Layer" },
                new AspectLevel() { Id = (int)AspectLevelEnum.IntegrationLayer, Name = "Integration Layer" },
                new AspectLevel() { Id = (int)AspectLevelEnum.PhysicalLayer, Name = "Physical Layer" }
            });

            modelBuilder.Entity<ComponentLevel>().HasData(new HashSet<ComponentLevel>()
            {
                new ComponentLevel() { Id = (int)ComponentLevelEnum.Workpiece, Name = "Workpiece, Product" },
                new ComponentLevel() { Id = (int)ComponentLevelEnum.Tool, Name = "Tool, Filed Device" },
                new ComponentLevel() { Id = (int)ComponentLevelEnum.TechnologicalEquipment, Name = "Technological Equipment" },
                new ComponentLevel() { Id = (int)ComponentLevelEnum.TechnologicalCell, Name = "Technological Cell" },
                new ComponentLevel() { Id = (int)ComponentLevelEnum.ProductionCell, Name = "Production Cell" },
                new ComponentLevel() { Id = (int)ComponentLevelEnum.ProductionSystem, Name = "Production System" }
            });
        }
    }


}
