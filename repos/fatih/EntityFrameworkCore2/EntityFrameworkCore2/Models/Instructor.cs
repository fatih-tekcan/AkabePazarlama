using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore2.Models
{
    public class Instructor
    {//student
        public int Id { get; set; }

        public string Name { get; set; }
        public string City { get; set; }
        public Course Course { get; set; }
    }
}
