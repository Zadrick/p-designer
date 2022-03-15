using System.ComponentModel;

namespace p_designer.models
{
    public enum AspectEnum
    {
        [Description("Business Layer")]
        BusinessLayer = 1,

        [Description("Functional Layer")]
        FunctionalLayer = 2,

        [Description("Information Layer")]
        InformationLayer = 3,

        [Description("Communication Layer")]
        CommunicationLayer = 4,

        [Description("Integration Layer")]
        IntegrationLayer = 5,

        [Description("Physical Layer")]
        PhysicalLayer = 6
    }
}
