﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    [Table("Photos")]
    public class Photo : BaseEntity
    {
        [Required]
        public string ImageUrl { get; set; }
        public bool isPrimary { get; set; }
        public int PropertyId { get; set; }
        public Property Property { get; set; }
    }
}