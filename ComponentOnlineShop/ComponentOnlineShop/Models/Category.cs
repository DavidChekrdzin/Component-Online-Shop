using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ComponentOnlineShop.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required]
        [MinLength(2)]
        [StringLength(50, ErrorMessage = "Name should be between 2 and 50 characters", MinimumLength = 2)]
        public string Name { get; set; }
        public ICollection<Product> CategoryProducts { get; set; }
    }
}
