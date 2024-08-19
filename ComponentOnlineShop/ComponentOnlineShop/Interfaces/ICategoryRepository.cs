using ComponentOnlineShop.Models;
using System.Linq;

namespace ComponentOnlineShop.Interfaces
{
    public interface ICategoryRepository
    {
        IQueryable<Category> GetAll();
        Category GetById(int id);
        void Add(Category category);
        void Update(Category category);
        void Delete(Category category);

    }
}
