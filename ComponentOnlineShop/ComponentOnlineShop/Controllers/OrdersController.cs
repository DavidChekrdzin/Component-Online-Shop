using AutoMapper;
using ComponentOnlineShop.Interfaces;
using ComponentOnlineShop.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ComponentOnlineShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IOrderRepository _orderRepository;
        public OrdersController(IProductRepository productRepository, ICategoryRepository categoryRepository, IOrderRepository orderRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _categoryRepository = categoryRepository;
            _orderRepository = orderRepository;
            _mapper = mapper;
        }
        [HttpGet]
        [Authorize]
        public IActionResult GetOrders()
        {
            return Ok(_orderRepository.GetAll().AsQueryable().Include(x => x.ProductOrderDTOList).ToList());
        }
        [HttpGet("{id}")]
        [Authorize]
        public IActionResult GetOrder(int id)
        {
            var order = _orderRepository.GetById(id);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }
        [HttpPost]
        public IActionResult PostOrder(Order order)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _orderRepository.Add(order);
            }
            catch
            {
                return BadRequest();
            }
            
            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult PutOrder(int id, Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.Id)
            {
                return BadRequest();
            }

            try
            {
                _orderRepository.Update(order);
            }
            catch
            {
                return BadRequest();
            }

            return Ok(order);
        }
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult DeleteOrder(int id)
        {
            var order = _orderRepository.GetById(id);
            if (order == null)
            {
                return NotFound();
            }

            _orderRepository.Delete(order);
            return NoContent();
        }
        
    }
}
