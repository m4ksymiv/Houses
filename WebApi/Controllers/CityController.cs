using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {

        private readonly IUnitOfWork uow;

        public CityController(IUnitOfWork uow)
        {
            this.uow = uow;
        }

       
        //Get api/city
        [HttpGet]
        public async Task<IActionResult> GetStrings()
        {
            var cities = await uow.CityRepository.GetCitiesAsync();
            return Ok(cities);
        }


        //Post api/city/post -- Post the data in JSON format
        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city)
        {
            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }


        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }
    }
}
