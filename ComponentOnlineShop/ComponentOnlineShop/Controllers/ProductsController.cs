using AutoMapper;
using AutoMapper.QueryableExtensions;
using ComponentOnlineShop.Interfaces;
using ComponentOnlineShop.Models;
using ComponentOnlineShop.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace ComponentOnlineShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        public ProductsController(IProductRepository productRepository, IMapper mapper, ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
            _productRepository = productRepository;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_productRepository.GetAll().ProjectTo<ProductDTO>(_mapper.ConfigurationProvider).OrderBy(x => x.Name).ToList());
        }
        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = _productRepository.GetById(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }
        [HttpPost]
        [Authorize]
        public IActionResult PostProduct(Product product)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _productRepository.Add(product);
            }
            catch
            {
                return BadRequest();
            }
            
            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }

            try
            {
                _productRepository.Update(product);
            }
            catch
            {
                return BadRequest();
            }

            return Ok(product);
        }
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult DeleteProduct(int id)//in case a product or category is deleted we want to preserve the data in orders
        {
            var product = _productRepository.GetById(id);
            if (product == null)
            {
                return NotFound();
            }

            _productRepository.Delete(product);
            return NoContent();
        }
    }
}
