using System.Security.Claims;
using api.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using api.Domain;
using Microsoft.Identity.Web;

namespace api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            AddApiExplorer(builder);
            AddSwaggerGen(builder);
            AddDbContext(builder);
            AddServices(builder);
            AddControllers(builder);
            AddCorsPolicy(builder);
            AddAuthentication(builder);
            AddCurrentUser(builder);

            RunApp(builder);
        }

        private static void AddApiExplorer(WebApplicationBuilder builder)
        {
            builder.Services.AddEndpointsApiExplorer();
        }

        private static void AddSwaggerGen(WebApplicationBuilder builder)
        {
            builder.Services.AddSwaggerGen(opt =>
            {
                opt.SwaggerDoc("v1", new OpenApiInfo { Title = "AlphabetApi", Version = "v1" });
                opt.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Please enter token",
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    Scheme = "bearer"
                });

                opt.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type=ReferenceType.SecurityScheme,
                                Id="Bearer"
                            }
                        },
                        new string[]{}
                    }
                });
            });
        }

        private static void AddDbContext(WebApplicationBuilder builder)
        {
            var connection = string.Empty;
            if (builder.Environment.IsDevelopment())
            {
                builder.Configuration.AddEnvironmentVariables().AddJsonFile("appsettings.Development.json");
                connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
            }
            else
            {
                connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
            }

            builder.Services.AddDbContext<AlphabetDbContext>(options =>
                options.UseSqlServer(connection)
                .EnableSensitiveDataLogging()
                );
        }

        private static void AddServices(WebApplicationBuilder builder)
        {

        }

        private static void AddControllers(WebApplicationBuilder builder)
        {
            builder.Services.AddControllers();
        }

        private static void AddCorsPolicy(WebApplicationBuilder builder)
        {
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                    policy
                    .WithOrigins("http://localhost:5173")
                    .AllowAnyMethod()
                    .AllowAnyHeader());
                options.AddPolicy("AllowSpecific", policy =>
                    policy
                    .WithOrigins("https://joinalphabet.com")
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });
        }

        private static void AddAuthentication(WebApplicationBuilder builder)
        {
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAdB2C"));
        }

        private static void AddCurrentUser(WebApplicationBuilder builder)
        {
            builder.Services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();
            builder.Services.AddTransient(sp =>
            {
                var accessor = sp.GetRequiredService<IHttpContextAccessor>();
                var user = accessor?.HttpContext?.User;
                return user ?? throw new InvalidOperationException("User not found");
            });
        }

        private static void RunApp(WebApplicationBuilder builder)
        {
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseCors("AllowAll");
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            else
            {
                app.UseCors("AllowSpecific");
            }

            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers().RequireAuthorization();

            app.Run();
        }

    }
}