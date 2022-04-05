using Microsoft.EntityFrameworkCore;
using p_designer.Models.Enums;

namespace p_designer.Entities
{
    public class PDesignerContext : DbContext
    {
        // public DbSet<Aspect> Aspects { get; set; }
        public DbSet<Criteria> Criterias { get; set; }
        public DbSet<Component> Components { get; set; }
        public DbSet<Library> Libraries { get; set; }
        public DbSet<MeasureUnit> MeasureUnits { get; set; }
        public DbSet<Pattern> Patterns { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<AttributeValue> AttributeValues { get; set; }
        public DbSet<Attribute> Attributes { get; set; }
        public DbSet<ValidationStatus> ValidationStatuses { get; set; }
        public DbSet<LifecycleStatus> LifecycleStatuses { get; set; }
        public DbSet<AspectLevel> AspectLevels { get; set; }
        public DbSet<ComponentLevel> ComponentLevels { get; set; }
        public DbSet<ComponentType> ComponentTypes { get; set; }

        public PDesignerContext()
        {
            try
            {
                Database.EnsureCreated();
            }
            catch(Exception) { }
        }

        public PDesignerContext(DbContextOptions<PDesignerContext> options) : base(options)
        {
            try
            {
                Database.EnsureCreated();
            }
            catch (Exception) { }
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

            modelBuilder.Entity<MeasureUnit>().HasData(new HashSet<MeasureUnit>()
            {
                new MeasureUnit() { Id = 1, Name = "kg" },
                new MeasureUnit() { Id = 2, Name = "m/min" },
                new MeasureUnit() { Id = 3, Name = "m2" },
                new MeasureUnit() { Id = 4, Name = "USD" }
            });

            modelBuilder.Entity<Attribute>().HasData(new HashSet<Attribute>()
            {
                new Attribute() { Id = 1, MeasureUnitId = 1, Name = "Weight" },
                new Attribute() { Id = 2, MeasureUnitId = 2, Name = "Speed" },
                new Attribute() { Id = 3, MeasureUnitId = 3, Name = "Occupied square" },
                new Attribute() { Id = 4, MeasureUnitId = 4, Name = "Cost" }
            });

            modelBuilder.Entity<LifecycleStatus>().HasMany(l => l.Patterns)
                .WithOne(p => p.LifecycleStatus).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<LifecycleStatus>().HasMany(l => l.Projects)
                .WithOne(p => p.LifecycleStatus).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<LifecycleStatus>().HasMany(l => l.Components)
                .WithOne(c => c.LifecycleStatus).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<LifecycleStatus>().HasMany(l => l.Libraries)
                .WithOne(l => l.LifecycleStatus).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Pattern>(p =>
            {
                p.Property(p => p.Name).HasMaxLength(128);
                p.Property(p => p.LifecycleStatusId).HasDefaultValue((int)LifecycleStatusEnum.Draft);
            });

            modelBuilder.Entity<Project>(p =>
            {
                p.Property(p => p.Name).HasMaxLength(128);
                p.Property(p => p.LifecycleStatusId).HasDefaultValue((int)LifecycleStatusEnum.Draft);
                p.Property(p => p.Purpose).HasDefaultValue(string.Empty);
            });

            modelBuilder.Entity<Component>(c =>
            {
                c.Property(c => c.Name).HasMaxLength(128);
                c.Property(p => p.LifeCycleStatusId).HasDefaultValue((int)LifecycleStatusEnum.Draft);
            });

            modelBuilder.Entity<Library>(l =>
            {
                l.Property(l => l.Name).HasMaxLength(128);
                l.Property(l => l.LifecycleStatusId).HasDefaultValue((int)LifecycleStatusEnum.Draft);
            });

            modelBuilder.Entity<Criteria>(c =>
            {
                c.Property(c => c.Name).HasMaxLength(128);
            });

            modelBuilder.Entity<ComponentType>(c =>
            {
                c.Property(p => p.Name).HasMaxLength(128);
            });
        }
    }
}