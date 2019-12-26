using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore2.Models
{
    public class Course
    {//grade
        public int Id { get; set; }

        public string Name { get; set; }
        public string SubName { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public bool isActive { get; set; }

        //navigation property
        //lazy loading
        //left join
        //public int? InstructorId { get; set; }

        //public Instructor Instructor { get; set; }
        public IList<Instructor> Instructors { get; set; }
    }
}
