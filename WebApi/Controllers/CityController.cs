using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data.Context;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {

        private readonly DataContext dc;
        public CityController(DataContext dc)
        {
            this.dc = dc;
        }

       

        [HttpGet("")]
        public IActionResult GetStrings()
        {
            var cities = dc.Cities.ToList();
            return Ok(cities);
        }
    }
}
