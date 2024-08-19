using System.ComponentModel.DataAnnotations;

namespace ComponentOnlineShop.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters")]
        [StringLength(100, ErrorMessage = "Name cannot be longer than 100 characters")]
        public string Name { get; set; }
        [Required]
        [Range(0, double.MaxValue, ErrorMessage = "Price must be positive")]
        public decimal Price { get; set; }
        [Required]
        [StringLength(300, ErrorMessage = "Description cannot be longer than 300 characters")]
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
