using System.ComponentModel.DataAnnotations;

namespace p_designer.models
{
    public class PatternModel
    {
        public class Read
        {
            public class Long
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public int LifecycleStatusId { get; set; }
                public double ProjectValueMin { get; set; }
                public double ProjectValueMax { get; set; }
                public double ProjectValueTarget { get; set; }
                public IEnumerable<ProjectModel.Read.Short> Projects { get; set; }
                public IEnumerable<CharacteristicModel.Read.Long> Characteristics { get; set; }
                public IEnumerable<int> Aspects { get; set; }
            }

            public class Short
            {
                public int Id { get; set; }
                public string Name { get; set; }
            }
        }

        public class Create
        {
            public string Name { get; set; }
        }

        public class Update
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int LifecycleStatusId { get; set; }
            public double ProjectValueMin { get; set; }
            public double ProjectValueMax { get; set; }
            public double ProjectValueTarget { get; set; }
            public IEnumerable<ProjectModel.Create> CreatedProjects { get; set; }
            public IEnumerable<int> DeletedProjects { get; set; }
            public IEnumerable<CharacteristicModel.Create> CreatedCharacteristics { get; set; }
            public IEnumerable<CharacteristicModel.Update> UpdatedCharacteristics { get; set; }
            public IEnumerable<int> DeletedCharacteristics { get; set; }
            public IEnumerable<int> Aspects { get; set; }
        }
    }
}
