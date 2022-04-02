using Microsoft.OpenApi.Models;
using p_designer.Common;
using p_designer.Entities;
using p_designer.services;
using p_designer.Services;
using Swashbuckle.AspNetCore.SwaggerUI;


var builder = WebApplication.CreateBuilder();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PDesignerContext>();
builder.Services.AddTransient<DictionaryService>();
builder.Services.AddTransient<PatternService>();
builder.Services.AddTransient<LibraryService>();
builder.Services.AddTransient<CriteriaService>();
builder.Services.AddTransient<ProjectService>();
builder.Services.AddTransient<LibraryService>();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "p-designer", Version = "v1" });
    c.CustomSchemaIds(type => type.ToString());
    c.EnableAnnotations();
});

MapsterProfile.Register();

var app = builder.Build();


// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(x =>
{
    x.SwaggerEndpoint("/swagger/v1/swagger.json", "p-designer API v1");
});

app.UseCors(c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
