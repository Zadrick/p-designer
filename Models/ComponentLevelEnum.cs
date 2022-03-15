using System.ComponentModel;

namespace p_designer.models
{
    public enum ComponentLevelEnum
    {
        [Description("Workpiece, Product")]
        Workpiece = 1,

        [Description("Tool, Filed Device")]
        Tool = 2,

        [Description("Technological Equipment")]
        TechnologicalEquipment = 3,

        [Description("Technological Cell")]
        TechnologicalCell = 4,

        [Description("Production Cell")]
        ProductionCell = 5,

        [Description("Production System")]
        ProductionSystem = 6
    }
}
