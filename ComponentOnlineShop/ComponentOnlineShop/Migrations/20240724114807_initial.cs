using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ComponentOnlineShop.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderTotal = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    City = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DeliveryType = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Products_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductOrderDTOs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    PriceSum = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductOrderDTOs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductOrderDTOs_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "RAM" },
                    { 2, "HDD" },
                    { 3, "SSD" },
                    { 4, "Graphics Card" },
                    { 5, "Processor" },
                    { 6, "Power Supply" }
                });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "Address", "City", "Date", "DeliveryType", "Name", "OrderTotal", "PhoneNumber", "Surname" },
                values: new object[,]
                {
                    { 1, "Ulica 123", "Beograd", new DateTime(2022, 10, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), "Bexpress", "Marija", 52.997m, "024456789", "Marijanovic" },
                    { 2, "Bulevar 25", "Novi Sad", new DateTime(2023, 9, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "AKS", "Bogdan", 41.999m, "063654321", "Bogdanovic" },
                    { 3, "Ulica 123", "Beograd", new DateTime(2024, 3, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "D Express", "Marija", 14.999m, "063456789", "Marijanovic" }
                });

            migrationBuilder.InsertData(
                table: "ProductOrderDTOs",
                columns: new[] { "Id", "CategoryName", "OrderId", "PriceSum", "ProductName", "ProductPrice", "Quantity" },
                values: new object[,]
                {
                    { 1, "RAM", 1, 6998m, "PATRIOT Signature 8GB DDR3 SODIMM 1600MHz CL11", 3499m, 2 },
                    { 2, "Graphics Card", 1, 45999m, "INNO3D RTX 3060 Twin X2 12GB N30602-12D6-119032AH Grafička karta", 45999m, 1 },
                    { 3, "Processor", 2, 41999m, "AMD Ryzen 7 8700F 4.10GHz (5.00GHz) Procesor", 41999m, 1 },
                    { 4, "HDD", 3, 14999m, "WESTERN DIGITAL Red Plus 4TB SATA III 3.5'' WD40EFPX HDD", 14999m, 1 }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "CategoryId", "Description", "Name", "Price" },
                values: new object[,]
                {
                    { 1, 1, "EAN:\r\n4711085933485\r\nKapacitet:\r\n32GB\r\nTip:\r\nDDR4\r\nMaksimalna frekvencija:\r\n3200Mhz\r\nLatencija:\r\nCL22", "ADATA Premier 32GB DDR4 3200MHZ CL22", 13499m },
                    { 2, 1, "EAN:\r\n0815530013273\r\nKapacitet:\r\n8GB\r\nTip:\r\nSO-DIMM DDR3\r\nMaksimalna frekvencija:\r\n1600Mhz\r\nLatencija:\r\nCL11", "PATRIOT Signature 8GB DDR3 SODIMM 1600MHz CL11", 3499m },
                    { 3, 2, "EAN:\r\n7624032338431\r\nPrimena:\r\nNAS/Server\r\nTip:\r\nInterni\r\nFormat:\r\n3.5\"\r\nKonekcija:\r\nSATA II\r\nKapacitet:\r\n4TB HDD\r\nBroj obrtaja:\r\n5400 RPM\r\nTehnologija upisa podataka:\r\nCMR (Conventional Magnetic Recording)", "WESTERN DIGITAL Red Plus 4TB SATA III 3.5'' WD40EFPX HDD", 14999m },
                    { 4, 2, "EAN:\r\n718037886190\r\nTip:\r\nInterni\r\nFormat:\r\n3.5\"\r\nKonekcija:\r\nSATA III\r\nKapacitet:\r\n12TB HDD\r\nBroj obrtaja:\r\n7200 RPM\r\nTehnologija upisa podataka:\r\nCMR (Conventional Magnetic Recording)\r\nBuffer:\r\n256 MB", "WESTERN DIGITAL Red Plus 12TB SATA III 3.5'' WD120EFBX HDD", 41999m },
                    { 5, 3, "EAN:\r\n649528918833\r\nKapacitet:\r\n1TB\r\nFormat:\r\nM.2 2280\r\nInterfejs:\r\nPCIe 4.0\r\nBrzina čitanja:\r\ndo 5000 MB/s\r\nGaming:\r\nDa", "CRUCIAL P3 Plus 1TB PCIe M.2 2280 CT1000P3PSSD8 - SSD", 12999m },
                    { 6, 3, "EAN:\r\n649528918826\r\nKapacitet:\r\n500GB\r\nFormat:\r\nM.2 2280\r\nInterfejs:\r\nPCIe 4.0\r\nBrzina čitanja:\r\ndo 4700 MB/s\r\nGaming:\r\nDa", "CRUCIAL P3 Plus 500GB PCIe M.2 2280 CT500P3PSSD8 - SSD", 9999m },
                    { 7, 4, "EAN:\r\n4895223102091\r\nGPU:\r\nNvidia GeForce RTX 3060\r\nKoličina memorije:\r\n12GB\r\nTip memorije:\r\nGDDR6\r\nMagistrala memorije:\r\n192bit", "INNO3D RTX 3060 Twin X2 12GB N30602-12D6-119032AH Grafička karta", 45999m },
                    { 8, 4, "EAN:\r\n4719331313449\r\nGPU:\r\nNvidia GeForce RTX 4060 Ti\r\nKoličina memorije:\r\n8GB\r\nTip memorije:\r\nGDDR6\r\nMagistrala memorije:\r\n128bit", "GIGABYTE RTX 4060 Ti Aero OC 8G GV-N406TAERO OC-8GD Grafička karta", 69999m },
                    { 9, 5, "EAN:\r\n730143316699\r\nGaming:\r\nDa\r\nPodnožje:\r\nAMD® AM5\r\nTip procesora:\r\nAMD® Ryzen 7\r\nBroj jezgara:\r\n8\r\nThreads:\r\n16\r\nTehnologija izrade:\r\n4 nm\r\nTDP:\r\n65W", "AMD Ryzen 7 8700F 4.10GHz (5.00GHz) Procesor", 41999m },
                    { 10, 5, "EAN:\r\n730143314893\r\nGaming:\r\nDa\r\nPodnožje:\r\nAMD® AM5\r\nTip procesora:\r\nAMD® Ryzen 9\r\nBroj jezgara:\r\n16\r\nThreads:\r\n32\r\nTehnologija izrade:\r\n5 nm\r\nTDP:\r\n120W", "AMD Ryzen 9 7950X3D 4.2GHz (5.7GHz) Procesor", 89999m },
                    { 11, 6, "EAN:\r\n4718009159310\r\nIzlazna snaga:\r\n500W\r\nTip:\r\nStandardno\r\nOblik (Form factor):\r\nATX (PS2)", "AEROCOOL VX PLUS 500 Napajanje", 3799m },
                    { 12, 6, "EAN:\r\n4260133129108\r\nIzlazna snaga:\r\n500W\r\nTip:\r\nStandardno\r\nOblik (Form factor):\r\nATX (PS2)", "INTER-TECH napajanje SL-500 PLUS - 88882140", 4499m }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ProductOrderDTOs_OrderId",
                table: "ProductOrderDTOs",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryId",
                table: "Products",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "ProductOrderDTOs");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
