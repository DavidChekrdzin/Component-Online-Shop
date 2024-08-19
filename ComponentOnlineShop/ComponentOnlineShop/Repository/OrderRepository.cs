using ComponentOnlineShop.Interfaces;
using ComponentOnlineShop.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ComponentOnlineShop.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext _context;
        public OrderRepository(AppDbContext context)
        {
            this._context = context;
        }
        public void Add(Order order)
        {
            _context.Orders.Add(order);
            _context.SaveChanges();
        }

        public void Delete(Order order)
        {
            _context.Orders.Remove(order);
            _context.SaveChanges();
        }

        public IQueryable<Order> GetAll()
        {
            return _context.Orders.AsQueryable().Include(x => x.ProductOrderDTOList);
        }

        public Order GetById(int id)
        {
            return _context.Orders.FirstOrDefault(p => p.Id == id);
        }

        public void Update(Order order)
        {
            _context.Entry(order).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
        }
    }
}
