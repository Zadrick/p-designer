using Mapster;
using p_designer.entities;

namespace p_designer.Common
{
    public class MapsterProfile
    {
        public void Register()
        {
            TypeAdapterConfig<int, AspectLevel>
                .NewConfig()
                .Map(dest => dest.Id, src => src);

            TypeAdapterConfig<AspectLevel, int>
                .NewConfig()
                .Map(dest => dest, src => src.Id);
        }
    }
}
