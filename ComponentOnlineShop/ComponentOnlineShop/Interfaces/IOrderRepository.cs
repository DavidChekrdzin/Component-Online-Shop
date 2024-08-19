using ComponentOnlineShop.Models;
using System.Linq;

namespace ComponentOnlineShop.Interfaces
{
    public interface IOrderRepository
    {
        IQueryable<Order> GetAll();
        Order GetById(int id);
        void Add(Order order);
        void Update(Order order);
        void Delete(Order order);
    }
}
