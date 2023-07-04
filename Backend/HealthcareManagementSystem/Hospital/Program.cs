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

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();

            app.UseCors();
            app.UseAuthentication();
            app.MapControllers();
            app.Run();
        }
    }
}