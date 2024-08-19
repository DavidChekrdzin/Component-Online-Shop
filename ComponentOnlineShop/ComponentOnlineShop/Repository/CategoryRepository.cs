using ComponentOnlineShop.Interfaces;
using ComponentOnlineShop.Models;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ComponentOnlineShop.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly AppDbContext _context;
        public CategoryRepository(AppDbContext context)
        {
            this._context = context;
        }
        public void Add(Category category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();
        }

        public void Delete(Category category)
        {
            _context.Categories.Remove(category);
            _context.SaveChanges();
        }

        public IQueryable<Category> GetAll()
        {
            return _context.Categories.AsQueryable().Include(x => x.CategoryProducts);
        }

        public Category GetById(int id)
        {
            return _context.Categories.FirstOrDefault(p => p.Id == id);
        }

        public void Update(Category category)
        {
            _context.Entry(category).State = EntityState.Modified;

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
