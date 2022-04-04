using Microsoft.OpenApi.Models;
using p_designer.Common;
using p_designer.Entities;
using p_designer.services;
using p_designer.Services;

var builder = WebApplication.CreateBuilder();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.CustomSchemaIds(type => Guid.NewGuid().ToString());
    c.EnableAnnotations();
});

builder.Services.AddDbContext<PDesignerContext>();
builder.Services.AddTransient<DictionaryService>();
builder.Services.AddTransient<PatternService>();
builder.Services.AddTransient<LibraryService>();
builder.Services.AddTransient<CriteriaService>();
builder.Services.AddTransient<ProjectService>();
builder.Services.AddTransient<LibraryService>();

MapsterProfile.Register();

var app = builder.Build();


app.UseCors(c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllers();

app.Run();
