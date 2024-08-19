using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace ComponentOnlineShop.Models
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductOrderDTO> ProductOrderDTOs { get; set; }
        public DbSet<Order> Orders { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category() { Id = 1, Name = "RAM" },
                new Category() { Id = 2, Name = "HDD" },
                new Category() { Id = 3, Name = "SSD" },
                new Category() { Id = 4, Name = "Graphics Card" },
                new Category() { Id = 5, Name = "Processor" },
                new Category() { Id = 6, Name = "Power Supply" }
            ); ;
            modelBuilder.Entity<Product>().HasData(
                new Product() { Id = 1, Name = "ADATA Premier 32GB DDR4 3200MHZ CL22", Price = 13499M, Description = "EAN:\r\n4711085933485\r\nKapacitet:\r\n32GB\r\nTip:\r\nDDR4\r\nMaksimalna frekvencija:\r\n3200Mhz\r\nLatencija:\r\nCL22", CategoryId = 1 },
                new Product() { Id = 2, Name = "PATRIOT Signature 8GB DDR3 SODIMM 1600MHz CL11", Price = 3499M, Description = "EAN:\r\n0815530013273\r\nKapacitet:\r\n8GB\r\nTip:\r\nSO-DIMM DDR3\r\nMaksimalna frekvencija:\r\n1600Mhz\r\nLatencija:\r\nCL11", CategoryId = 1 },
                new Product() { Id = 3, Name = "WESTERN DIGITAL Red Plus 4TB SATA III 3.5'' WD40EFPX HDD", Price = 14999M, Description = "EAN:\r\n7624032338431\r\nPrimena:\r\nNAS/Server\r\nTip:\r\nInterni\r\nFormat:\r\n3.5\"\r\nKonekcija:\r\nSATA II\r\nKapacitet:\r\n4TB HDD\r\nBroj obrtaja:\r\n5400 RPM\r\nTehnologija upisa podataka:\r\nCMR (Conventional Magnetic Recording)", CategoryId = 2 },
                new Product() { Id = 4, Name = "WESTERN DIGITAL Red Plus 12TB SATA III 3.5'' WD120EFBX HDD", Price = 41999M, Description = "EAN:\r\n718037886190\r\nTip:\r\nInterni\r\nFormat:\r\n3.5\"\r\nKonekcija:\r\nSATA III\r\nKapacitet:\r\n12TB HDD\r\nBroj obrtaja:\r\n7200 RPM\r\nTehnologija upisa podataka:\r\nCMR (Conventional Magnetic Recording)\r\nBuffer:\r\n256 MB", CategoryId = 2 },
                new Product() { Id = 5, Name = "CRUCIAL P3 Plus 1TB PCIe M.2 2280 CT1000P3PSSD8 - SSD", Price = 12999M, Description = "EAN:\r\n649528918833\r\nKapacitet:\r\n1TB\r\nFormat:\r\nM.2 2280\r\nInterfejs:\r\nPCIe 4.0\r\nBrzina čitanja:\r\ndo 5000 MB/s\r\nGaming:\r\nDa", CategoryId = 3 },
                new Product() { Id = 6, Name = "CRUCIAL P3 Plus 500GB PCIe M.2 2280 CT500P3PSSD8 - SSD", Price = 9999M, Description = "EAN:\r\n649528918826\r\nKapacitet:\r\n500GB\r\nFormat:\r\nM.2 2280\r\nInterfejs:\r\nPCIe 4.0\r\nBrzina čitanja:\r\ndo 4700 MB/s\r\nGaming:\r\nDa", CategoryId = 3 },
                new Product() { Id = 7, Name = "INNO3D RTX 3060 Twin X2 12GB N30602-12D6-119032AH Grafička karta", Price = 45999M, Description = "EAN:\r\n4895223102091\r\nGPU:\r\nNvidia GeForce RTX 3060\r\nKoličina memorije:\r\n12GB\r\nTip memorije:\r\nGDDR6\r\nMagistrala memorije:\r\n192bit", CategoryId = 4 },
                new Product() { Id = 8, Name = "GIGABYTE RTX 4060 Ti Aero OC 8G GV-N406TAERO OC-8GD Grafička karta", Price = 69999M, Description = "EAN:\r\n4719331313449\r\nGPU:\r\nNvidia GeForce RTX 4060 Ti\r\nKoličina memorije:\r\n8GB\r\nTip memorije:\r\nGDDR6\r\nMagistrala memorije:\r\n128bit", CategoryId = 4 },
                new Product() { Id = 9, Name = "AMD Ryzen 7 8700F 4.10GHz (5.00GHz) Procesor", Price = 41999M, Description = "EAN:\r\n730143316699\r\nGaming:\r\nDa\r\nPodnožje:\r\nAMD® AM5\r\nTip procesora:\r\nAMD® Ryzen 7\r\nBroj jezgara:\r\n8\r\nThreads:\r\n16\r\nTehnologija izrade:\r\n4 nm\r\nTDP:\r\n65W", CategoryId = 5 },
                new Product() { Id = 10, Name = "AMD Ryzen 9 7950X3D 4.2GHz (5.7GHz) Procesor", Price = 89999M, Description = "EAN:\r\n730143314893\r\nGaming:\r\nDa\r\nPodnožje:\r\nAMD® AM5\r\nTip procesora:\r\nAMD® Ryzen 9\r\nBroj jezgara:\r\n16\r\nThreads:\r\n32\r\nTehnologija izrade:\r\n5 nm\r\nTDP:\r\n120W", CategoryId = 5 },
                new Product() { Id = 11, Name = "AEROCOOL VX PLUS 500 Napajanje", Price = 3799M, Description = "EAN:\r\n4718009159310\r\nIzlazna snaga:\r\n500W\r\nTip:\r\nStandardno\r\nOblik (Form factor):\r\nATX (PS2)", CategoryId = 6 },
                new Product() { Id = 12, Name = "INTER-TECH napajanje SL-500 PLUS - 88882140", Price = 4499M, Description = "EAN:\r\n4260133129108\r\nIzlazna snaga:\r\n500W\r\nTip:\r\nStandardno\r\nOblik (Form factor):\r\nATX (PS2)", CategoryId = 6 }
            );

            modelBuilder.Entity<ProductOrderDTO>().HasData(
                new ProductOrderDTO { Id = 1, Quantity = 2, CategoryName = "RAM", ProductName = "PATRIOT Signature 8GB DDR3 SODIMM 1600MHz CL11", ProductPrice = 3499M , PriceSum  = 6998M, OrderId = 1 },
                new ProductOrderDTO { Id = 2, Quantity = 1, CategoryName = "Graphics Card", ProductName = "INNO3D RTX 3060 Twin X2 12GB N30602-12D6-119032AH Grafička karta", ProductPrice = 45999M , PriceSum  = 45999M, OrderId = 1 },
                new ProductOrderDTO { Id = 3, Quantity = 1, CategoryName = "Processor", ProductName = "AMD Ryzen 7 8700F 4.10GHz (5.00GHz) Procesor", ProductPrice = 41999M , PriceSum  = 41999M, OrderId = 2 },
                new ProductOrderDTO { Id = 4, Quantity = 1, CategoryName = "HDD", ProductName = "WESTERN DIGITAL Red Plus 4TB SATA III 3.5'' WD40EFPX HDD", ProductPrice = 14999M , PriceSum  = 14999M, OrderId = 3 }
            );
            
            modelBuilder.Entity<Order>().HasData(
                new Order() { Id = 1, OrderTotal = 52.997M, Date = new System.DateTime(2022, 10, 17), Name = "Marija", Surname = "Marijanovic", Address = "Ulica 123", City = "Beograd", PhoneNumber = "024456789", DeliveryType = "Bexpress" },
                new Order() { Id = 2, OrderTotal = 41.999M, Date = new System.DateTime(2023, 9, 10),  Name = "Bogdan", Surname = "Bogdanovic", Address = "Bulevar 25", City = "Novi Sad", PhoneNumber = "063654321", DeliveryType = "AKS" },
                new Order() { Id = 3, OrderTotal = 14.999M, Date = new System.DateTime(2024, 3, 18),  Name = "Marija", Surname = "Marijanovic", Address = "Ulica 123", City = "Beograd", PhoneNumber = "063456789", DeliveryType = "D Express" }
            );
            

            base.OnModelCreating(modelBuilder);
        }

    }
}
