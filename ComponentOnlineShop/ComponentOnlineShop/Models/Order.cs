using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ComponentOnlineShop.Models
{
    public class Order
    {
        public int Id { get; set; }
        public decimal OrderTotal { get; set; }
        public DateTime Date { get; set; }
        public ICollection<ProductOrderDTO> ProductOrderDTOList { get; set; }
        [Required]
        [StringLength(30, ErrorMessage = "Name cannot be longer than 30 characters.")]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
        [RegularExpression("[a-zA-Z]+", ErrorMessage = "Please use only letters.")]
        public string Name { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Surname cannot be longer than 50 characters.")]
        [MinLength(2, ErrorMessage = "Surname must be at least 2 characters long.")]
        [RegularExpression("[a-zA-Z]+", ErrorMessage = "Please use only letters.")]
        public string Surname { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Address cannot be longer than 50 characters.")]
        [MinLength(2, ErrorMessage = "Address must be at least 2 characters long.")]
        public string Address { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "City cannot be longer than 50 characters.")]
        [MinLength(2, ErrorMessage = "City must be at least 2 characters long.")]
        [RegularExpression("[a-zA-Z]+", ErrorMessage = "Please use only letters.")]
        public string City { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "PhoneNumber cannot be longer than 50 characters.")]
        [MinLength(2, ErrorMessage = "PhoneNumber must be at least 2 characters long.")]
        [RegularExpression("[0-9]+", ErrorMessage = "Please use only numbers.")]
        public string PhoneNumber { get; set; }
        public string DeliveryType { get; set; }
    }
}
