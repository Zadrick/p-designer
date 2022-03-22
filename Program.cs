using Microsoft.OpenApi.Models;
using p_designer.entities;
using p_designer.services;
using Swashbuckle.AspNetCore.SwaggerUI;


var builder = WebApplication.CreateBuilder();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PDesignerContext>();
builder.Services.AddTransient<DictionaryService>();
builder.Services.AddTransient<PatternService>();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "p-designer", Version = "v1" });
    c.CustomSchemaIds(type => type.ToString());
    c.EnableAnnotations();
});

var app = builder.Build();


// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(x =>
{
    x.SwaggerEndpoint("/swagger/v1/swagger.json", "p-designer API v1");
    x.DefaultModelExpandDepth(3);
    x.DefaultModelRendering(ModelRendering.Example);
    x.DefaultModelsExpandDepth(-1);
    x.DisplayOperationId();
    x.DisplayRequestDuration();
    x.DocExpansion(docExpansion: DocExpansion.None);
    x.EnableDeepLinking();
    x.EnableFilter();
    x.ShowExtensions();
});

app.UseCors(c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.UseHttpsRedirection();

app.UseRouting();

app.MapControllers();

app.Run();
