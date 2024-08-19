namespace ComponentOnlineShop.Models
{
    public class ProductOrderDTO
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public int Quantity { get; set; }
        public decimal PriceSum { get; set; }
        public string CategoryName { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}