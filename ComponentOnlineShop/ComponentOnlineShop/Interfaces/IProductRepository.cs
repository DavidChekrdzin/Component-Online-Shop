using ComponentOnlineShop.Models;
using System.Linq;

namespace ComponentOnlineShop.Interfaces
{
    public interface IProductRepository
    {
        IQueryable<Product> GetAll();
        Product GetById(int id);
        void Add(Product product);
        void Update(Product product);
        void Delete(Product product);
    }
}
