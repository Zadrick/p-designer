using System.ComponentModel;

namespace p_designer.models
{
    public enum LifecycleStatusEnum
    {
        [Description("Draft")]
        Draft = 1,

        [Description("Ready to use")]
        ReadyToUse = 2,

        [Description("Deleted")]
        Deleted = 3
    }
}
