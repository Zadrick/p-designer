namespace p_designer.Extensions
{
    public static class ObjectExtensions
    {
        public static T MergeWithObject<T>(this T obj1, object obj2)
        {
            Type obj1Type = obj1.GetType();
            Type obj2Type = obj2.GetType();

            foreach (var obj2Property in obj2Type.GetProperties())
            {
                var obj1Propeprty = obj1Type.GetProperty(obj2Property.Name);
                if (obj1Propeprty != null)
                {
                    var propertyValue = obj2Property.GetValue(obj2);
                    try
                    {
                        obj1Propeprty.SetValue(obj1, propertyValue);
                    }
                    catch { }
                }
            }
            return obj1;
        }
    }
}
