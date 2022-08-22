using PostCodesAPI.Services;

namespace PostCodesAPI;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddScoped<IPostCodeService, PostCodeService>();
        services.AddSingleton(typeof(ILogger), typeof(Logger<Startup>));
        services.AddSwaggerGen();
        services.AddControllers();
        //
        services.AddCors(options => {
                options.AddDefaultPolicy(
                    builder => {
                        builder.WithOrigins(Configuration["CorsConfig:Origin"]).AllowAnyOrigin().SetIsOriginAllowed((host) => true).AllowAnyMethod().AllowAnyHeader();
                    });
            });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        app.UseSwagger().UseSwaggerUI(setup =>
        {
            string swaggerJsonBasePath = string.IsNullOrWhiteSpace(setup.RoutePrefix) ? "." : "..";
            setup.SwaggerEndpoint($"{swaggerJsonBasePath}/swagger/v1/swagger.json", "Version 1.0");
            setup.OAuthAppName("Lambda Api");
            setup.OAuthScopeSeparator(" ");
            setup.OAuthUsePkce();
        });
        app.UseHttpsRedirection();

        app.UseRouting();
        
        app.UseAuthentication();

        app.UseCors();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
            endpoints.MapGet("/", async context =>
            {
                await context.Response.WriteAsync("Welcome to running ASP.NET Core on AWS Lambda");
            });
        });
    }
}