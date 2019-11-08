using System;
using System.Collections.Generic;

namespace Project4.Models
{
    public partial class Products
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductColor { get; set; }
        public string ProductSize { get; set; }
        public string ProductDescription { get; set; }
        public int ProductQuantity { get; set; }
        public string ProductType { get; set; }
        public string ProductUrl { get; set; }
    }
}
