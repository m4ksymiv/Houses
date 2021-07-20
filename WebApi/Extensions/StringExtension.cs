﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Extensions
{
    public static class StringExtension
    {
        public static bool isEmpty(this string s)
        {
            return string.IsNullOrEmpty(s.Trim());
        }

    }
}
