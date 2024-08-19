using AutoMapper;

namespace ComponentOnlineShop.Models
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductDTO>();
            CreateMap<Product, ProductOrderDTO>();
        }
    }
}
