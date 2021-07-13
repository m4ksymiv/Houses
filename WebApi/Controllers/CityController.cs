using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        [HttpGet("")]
        public IEnumerable<string> GetStrings()
        {
            return new string[] { "atlanta", "new york", "chicago", "boston" };
        }
    }
}
