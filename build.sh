rm -r build
mkdir build

cd api
dotnet build "p-designer-api.csproj" -c Release -o build
cd ..
mv api/build build/api

cd ui
npm i
npm run build
cd ..
mv ui/build build/ui
