﻿// <auto-generated />
using System;
using ComponentOnlineShop.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ComponentOnlineShop.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240724114807_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ComponentOnlineShop.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("ComponentOnlineShop.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "RAM"
                        },
                        new
                        {
                            Id = 2,
                            Name = "HDD"
                        },
                        new
                        {
                            Id = 3,
                            Name = "SSD"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Graphics Card"
                        },
                        new
                        {
                            Id = 5,
                            Name = "Processor"
                        },
                        new
                        {
                            Id = 6,
                            Name = "Power Supply"
                        });
                });

            modelBuilder.Entity("ComponentOnlineShop.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("DeliveryType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<decimal>("OrderTotal")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Orders");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "Ulica 123",
                            City = "Beograd",
                            Date = new DateTime(2022, 10, 17, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DeliveryType = "Bexpress",
                            Name = "Marija",
                            OrderTotal = 52.997m,
                            PhoneNumber = "024456789",
                            Surname = "Marijanovic"
                        },
                        new
                        {
                            Id = 2,
                            Address = "Bulevar 25",
                            City = "Novi Sad",
                            Date = new DateTime(2023, 9, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DeliveryType = "AKS",
                            Name = "Bogdan",
                            OrderTotal = 41.999m,
                            PhoneNumber = "063654321",
                            Surname = "Bogdanovic"
                        },
                        new
                        {
                            Id = 3,
                            Address = "Ulica 123",
                            City = "Beograd",
                            Date = new DateTime(2024, 3, 18, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DeliveryType = "D Express",
                            Name = "Marija",
                            OrderTotal = 14.999m,
                            PhoneNumber = "063456789",
                            Surname = "Marijanovic"
                        });
                });

            modelBuilder.Entity("ComponentOnlineShop.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryId = 1,
                            Description = "EAN:\r\n4711085933485\r\nKapacitet:\r\n32GB\r\nTip:\r\nDDR4\r\nMaksimalna frekvencija:\r\n3200Mhz\r\nLatencija:\r\nCL22",
                            Name = "ADATA Premier 32GB DDR4 3200MHZ CL22",
                            Price = 13499m
                        },
                        new
                        {
                            Id = 2,
                            CategoryId = 1,
                            Description = "EAN:\r\n0815530013273\r\nKapacitet:\r\n8GB\r\nTip:\r\nSO-DIMM DDR3\r\nMaksimalna frekvencija:\r\n1600Mhz\r\nLatencija:\r\nCL11",
                            Name = "PATRIOT Signature 8GB DDR3 SODIMM 1600MHz CL11",
                            Price = 3499m
                        },
                        new
                        {
                            Id = 3,
                            CategoryId = 2,
                            Description = "EAN:\r\n7624032338431\r\nPrimena:\r\nNAS/Server\r\nTip:\r\nInterni\r\nFormat:\r\n3.5\"\r\nKonekcija:\r\nSATA II\r\nKapacitet:\r\n4TB HDD\r\nBroj obrtaja:\r\n5400 RPM\r\nTehnologija upisa podataka:\r\nCMR (Conventional Magnetic Recording)",
                            Name = "WESTERN DIGITAL Red Plus 4TB SATA III 3.5'' WD40EFPX HDD",
                            Price = 14999m
                        },
                        new
                        {
                            Id = 4,
                            CategoryId = 2,
                            Description = "EAN:\r\n718037886190\r\nTip:\r\nInterni\r\nFormat:\r\n3.5\"\r\nKonekcija:\r\nSATA III\r\nKapacitet:\r\n12TB HDD\r\nBroj obrtaja:\r\n7200 RPM\r\nTehnologija upisa podataka:\r\nCMR (Conventional Magnetic Recording)\r\nBuffer:\r\n256 MB",
                            Name = "WESTERN DIGITAL Red Plus 12TB SATA III 3.5'' WD120EFBX HDD",
                            Price = 41999m
                        },
                        new
                        {
                            Id = 5,
                            CategoryId = 3,
                            Description = "EAN:\r\n649528918833\r\nKapacitet:\r\n1TB\r\nFormat:\r\nM.2 2280\r\nInterfejs:\r\nPCIe 4.0\r\nBrzina čitanja:\r\ndo 5000 MB/s\r\nGaming:\r\nDa",
                            Name = "CRUCIAL P3 Plus 1TB PCIe M.2 2280 CT1000P3PSSD8 - SSD",
                            Price = 12999m
                        },
                        new
                        {
                            Id = 6,
                            CategoryId = 3,
                            Description = "EAN:\r\n649528918826\r\nKapacitet:\r\n500GB\r\nFormat:\r\nM.2 2280\r\nInterfejs:\r\nPCIe 4.0\r\nBrzina čitanja:\r\ndo 4700 MB/s\r\nGaming:\r\nDa",
                            Name = "CRUCIAL P3 Plus 500GB PCIe M.2 2280 CT500P3PSSD8 - SSD",
                            Price = 9999m
                        },
                        new
                        {
                            Id = 7,
                            CategoryId = 4,
                            Description = "EAN:\r\n4895223102091\r\nGPU:\r\nNvidia GeForce RTX 3060\r\nKoličina memorije:\r\n12GB\r\nTip memorije:\r\nGDDR6\r\nMagistrala memorije:\r\n192bit",
                            Name = "INNO3D RTX 3060 Twin X2 12GB N30602-12D6-119032AH Grafička karta",
                            Price = 45999m
                        },
                        new
                        {
                            Id = 8,
                            CategoryId = 4,
                            Description = "EAN:\r\n4719331313449\r\nGPU:\r\nNvidia GeForce RTX 4060 Ti\r\nKoličina memorije:\r\n8GB\r\nTip memorije:\r\nGDDR6\r\nMagistrala memorije:\r\n128bit",
                            Name = "GIGABYTE RTX 4060 Ti Aero OC 8G GV-N406TAERO OC-8GD Grafička karta",
                            Price = 69999m
                        },
                        new
                        {
                            Id = 9,
                            CategoryId = 5,
                            Description = "EAN:\r\n730143316699\r\nGaming:\r\nDa\r\nPodnožje:\r\nAMD® AM5\r\nTip procesora:\r\nAMD® Ryzen 7\r\nBroj jezgara:\r\n8\r\nThreads:\r\n16\r\nTehnologija izrade:\r\n4 nm\r\nTDP:\r\n65W",
                            Name = "AMD Ryzen 7 8700F 4.10GHz (5.00GHz) Procesor",
                            Price = 41999m
                        },
                        new
                        {
                            Id = 10,
                            CategoryId = 5,
                            Description = "EAN:\r\n730143314893\r\nGaming:\r\nDa\r\nPodnožje:\r\nAMD® AM5\r\nTip procesora:\r\nAMD® Ryzen 9\r\nBroj jezgara:\r\n16\r\nThreads:\r\n32\r\nTehnologija izrade:\r\n5 nm\r\nTDP:\r\n120W",
                            Name = "AMD Ryzen 9 7950X3D 4.2GHz (5.7GHz) Procesor",
                            Price = 89999m
                        },
                        new
                        {
                            Id = 11,
                            CategoryId = 6,
                            Description = "EAN:\r\n4718009159310\r\nIzlazna snaga:\r\n500W\r\nTip:\r\nStandardno\r\nOblik (Form factor):\r\nATX (PS2)",
                            Name = "AEROCOOL VX PLUS 500 Napajanje",
                            Price = 3799m
                        },
                        new
                        {
                            Id = 12,
                            CategoryId = 6,
                            Description = "EAN:\r\n4260133129108\r\nIzlazna snaga:\r\n500W\r\nTip:\r\nStandardno\r\nOblik (Form factor):\r\nATX (PS2)",
                            Name = "INTER-TECH napajanje SL-500 PLUS - 88882140",
                            Price = 4499m
                        });
                });

            modelBuilder.Entity("ComponentOnlineShop.Models.ProductOrderDTO", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CategoryName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<decimal>("PriceSum")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("ProductName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("ProductPrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("ProductOrderDTOs");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryName = "RAM",
                            OrderId = 1,
                            PriceSum = 6998m,
                            ProductName = "PATRIOT Signature 8GB DDR3 SODIMM 1600MHz CL11",
                            ProductPrice = 3499m,
                            Quantity = 2
                        },
                        new
                        {
                            Id = 2,
                            CategoryName = "Graphics Card",
                            OrderId = 1,
                            PriceSum = 45999m,
                            ProductName = "INNO3D RTX 3060 Twin X2 12GB N30602-12D6-119032AH Grafička karta",
                            ProductPrice = 45999m,
                            Quantity = 1
                        },
                        new
                        {
                            Id = 3,
                            CategoryName = "Processor",
                            OrderId = 2,
                            PriceSum = 41999m,
                            ProductName = "AMD Ryzen 7 8700F 4.10GHz (5.00GHz) Procesor",
                            ProductPrice = 41999m,
                            Quantity = 1
                        },
                        new
                        {
                            Id = 4,
                            CategoryName = "HDD",
                            OrderId = 3,
                            PriceSum = 14999m,
                            ProductName = "WESTERN DIGITAL Red Plus 4TB SATA III 3.5'' WD40EFPX HDD",
                            ProductPrice = 14999m,
                            Quantity = 1
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("ComponentOnlineShop.Models.Product", b =>
                {
                    b.HasOne("ComponentOnlineShop.Models.Category", "Category")
                        .WithMany("CategoryProducts")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("ComponentOnlineShop.Models.ProductOrderDTO", b =>
                {
                    b.HasOne("ComponentOnlineShop.Models.Order", "Order")
                        .WithMany("ProductOrderDTOList")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("ComponentOnlineShop.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("ComponentOnlineShop.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ComponentOnlineShop.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("ComponentOnlineShop.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ComponentOnlineShop.Models.Category", b =>
                {
                    b.Navigation("CategoryProducts");
                });

            modelBuilder.Entity("ComponentOnlineShop.Models.Order", b =>
                {
                    b.Navigation("ProductOrderDTOList");
                });
#pragma warning restore 612, 618
        }
    }
}
