using ComponentOnlineShop.Interfaces;
using ComponentOnlineShop.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ComponentOnlineShop.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;
        public ProductRepository(AppDbContext context)
        {
            this._context = context;
        }
        public void Add(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
        }

        public void Delete(Product product)
        {
            _context.Products.Remove(product);
            _context.SaveChanges();
        }

        public IQueryable<Product> GetAll()
        {
            return _context.Products.AsQueryable().Include(x => x.Category);
        }

        public Product GetById(int id)
        {
            return _context.Products.FirstOrDefault(p => p.Id == id);
        }

        public void Update(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;

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
