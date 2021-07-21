using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data.Context;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Data.Repository
{
    public class PropertyTypeRepository : IPropertyTypeRepository
    {
        private readonly DataContext dc;

        public PropertyTypeRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public async Task<IEnumerable<PropertyType>> GetPtopertyTypeAsync()
        {
            return await dc.PropertyTypes.ToListAsync();
        }
    }
}
