using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Dtos
{
    public class PropertyDto
    {
        public int SellRent { get; set; }
        public int CityId { get; set; }
        public string Name { get; set; }
        public string BHK { get; set; }
        public string PropertyTypeId { get; set; }
        public string FurnishingTypeId { get; set; }
        public string Price { get; set; }
        public string BuiltArea { get; set; }
        //public string CarpetArea { get; set; }
        //public string Security { get; set; }
        //public string FloorNo { get; set; }
        //public string TotalFloor { get; set; }
        //public string Address { get; set; }
        //public string Address2 { get; set; }
        //public string LandMark { get; set; }
        //public string RTM { get; set; }
        //public string AOP { get; set; }
        //public string Gated { get; set; }
        //public string MainEntrance { get; set; }
        //public string Description { get; set; }
        public DateTime PossessionOn { get; set; }
    }
}
