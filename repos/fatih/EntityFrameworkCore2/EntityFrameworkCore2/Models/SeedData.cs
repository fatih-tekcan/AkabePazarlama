using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore2.Models
{
    public static class SeedData
    {
        public static void EnsurePopulated(IApplicationBuilder app)
        {
            ApplicationDbContext context = app.ApplicationServices.GetRequiredService<ApplicationDbContext>();

            context.Database.Migrate();

           //if (!context.Products.Any())
           if(false)
            {
                //context.Products.AddRange(
                //    new Product() { Name = "Product Name 1", Description = "Product Description 1", Price = 15, Category = "Product Category 1" },
                //    new Product() { Name = "Product Name 2", Description = "Product Description 2", Price = 125, Category = "Product Category 2" },
                //    new Product() { Name = "Product Name 3", Description = "Product Description 3", Price = 35, Category = "Product Category 3" },
                //    new Product() { Name = "Product Name 4", Description = "Product Description 4", Price = 45, Category = "Product Category 4" },
                //    new Product() { Name = "Product Name 5", Description = "Product Description 5", Price = 55, Category = "Product Category 5" },
                //    new Product() { Name = "Product Name 6", Description = "Product Description 6", Price = 165, Category = "Product Category 6" }
                //);
                context.Courses.AddRange(
                    new Course() { Name = "Html", Price = 10, Description = "about html", isActive = true},
                    new Course() { Name = "Css", Price = 10, Description = "about Css", isActive = true},
                    new Course() { Name = "Javascipt", Price = 20, Description = "about Javascipt", isActive = false },
                    new Course() { Name = "NodeJs", Price = 10, Description = "about NodeJs", isActive = true},
                    new Course() { Name = "Angular", Price = 30, Description = "about Angular", isActive = false},
                    new Course() { Name = "React", Price = 20, Description = "about React", isActive = false },
                    new Course() { Name = "Mvc", Price = 10, Description = "about Mvc", isActive = false }
                    );
                context.SaveChanges();
            }

        }

        private static Instructor[] Instructors = {
            new Instructor(){  Name="Ahmet", City="İstanbul"},
            new Instructor(){  Name="Mehmet", City="İstanbul"},
            new Instructor(){  Name="Ali", City="İstanbul"},
            new Instructor(){  Name="Hasan", City="Kocaeli"}
        };
    }
}
