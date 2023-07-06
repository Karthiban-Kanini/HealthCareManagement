using Hospital.Interfaces;
using Hospital.Models;
using Hospital.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Cors;
using Hospital.Services;
using System.Collections.Generic;
using Hospital.Models.DTO;
using Hospital.Services;
using Microsoft.OpenApi.Models;

namespace Hospital
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<UserContext>
               (options => options.UseSqlServer(builder.Configuration.GetConnectionString("myConn")));
            builder.Services.AddScoped<IUser<DoctorUser, UserDTO>, DoctorRepo>();
            builder.Services.AddScoped<IDoctorServices, DoctorService>();
            builder.Services.AddScoped<IUser<PatientUser, UserDTO>, PatientRepo>();
            builder.Services.AddScoped<IPatientServices, PatientService>();
            builder.Services.AddScoped<IAppointmentServices, AppointmentService>();
            builder.Services.AddScoped<IAppointment, AppointmentRepo>();

            builder.Services.AddScoped<IUser<AdminUser, UserDTO>,AdminRepo>();
            builder.Services.AddScoped<IAdminServices, AdminService>();

            builder.Services.AddScoped<ITokenGenerate, TokenServices>();
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["TokenKey"])),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            builder.Services.AddCors(opts =>
            {
                opts.AddPolicy("MyCors", policy =>
                {
                    policy.AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin();
                });
            });

            builder.Services.AddSwaggerGen(c =>
            {
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "JWT Authorization header using the Bearer scheme."
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                 {
                     {
                           new OpenApiSecurityScheme
                             {
                                 Reference = new OpenApiReference
                                 {
                                     Type = ReferenceType.SecurityScheme,
                                     Id = "Bearer"
                                 }
                             },
                             new string[] {}

                     }
        });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            

           
            app.UseAuthentication();
            app.UseCors("MyCors");
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}