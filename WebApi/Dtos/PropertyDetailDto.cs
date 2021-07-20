using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Dtos
{
    public class PropertyDetailDto : PropertyListDto
    {
        public string CarpetArea { get; set; }
        public string Security { get; set; }
        public string FloorNo { get; set; }
        public string TotalFloor { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string LandMark { get; set; }

        public string AOP { get; set; }
        public string Gated { get; set; }
        public string MainEntrance { get; set; }
        public string Description { get; set; }
    }
}
