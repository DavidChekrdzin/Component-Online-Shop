using AutoMapper;
using ComponentOnlineShop.Interfaces;
using ComponentOnlineShop.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text.Json.Serialization;
using System.Text.Json;
using Microsoft.AspNetCore.Authorization;

namespace ComponentOnlineShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IProductRepository _productRepository;
        public CategoriesController(ICategoryRepository categoryRepository, IMapper mapper, IProductRepository productRepository)
        {
            _categoryRepository = categoryRepository;
            _productRepository = productRepository;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetCategories()
        {
            var categories = _categoryRepository.GetAll().Include(c => c.CategoryProducts).ToList();

            return Ok(categories);
        }
        [HttpGet("{id}")]
        public IActionResult GetCategory(int id)
        {
            var category = _categoryRepository.GetById(id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }
        [HttpPost]
        [Authorize]
        public IActionResult PostCategory(Category category)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _categoryRepository.Add(category);
            }
            catch
            {
                return BadRequest();
            }
            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult PutCategory(int id, Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != category.Id)
            {
                return BadRequest();
            }

            try
            {
                _categoryRepository.Update(category);
            }
            catch
            {
                return BadRequest();
            }

            return Ok(category);
        }
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult DeleteCategory(int id)//in case a product or category is deleted we want to preserve the data in orders
        {
            var category = _categoryRepository.GetById(id);
            if (category == null)
            {
                return NotFound();
            }
            foreach (var product in _productRepository.GetAll().Where(x => x.CategoryId == id).ToList())
            {
                _productRepository.Delete(product);
            }

            _categoryRepository.Delete(category);
            return NoContent();
        }
    }
}
