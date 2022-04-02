rm -r build
mkdir build

cd api
dotnet build "p-designer-api.csproj" -c Release -o build
cp -r . ../build/api

cd ..
cd ui
npm i
npm run build
cd ..
mkdir build/ui
cp -r ui/build build/ui/build
