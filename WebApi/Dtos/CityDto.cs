using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
{
    public class CityDto
    {
        public int Id { get; set; }
        [Required (ErrorMessage ="Name is mandatry field")]
        [RegularExpression(".*[a-zA-Z]+.*",ErrorMessage = "Only numerics are not allowed")]
        [StringLength(50, MinimumLength =2)]
        public string Name { get; set; }
        [Required]
        public String Country { get; set; }
    }
}
