using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class initDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppRole",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Desc = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppRole", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MstPermission",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    Code = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Table = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MstPermission", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppUser",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(200)", maxLength: 200, nullable: true),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(200)", maxLength: 200, nullable: true),
                    FullName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    PhoneNumber1 = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    PhoneNumber2 = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    Email = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    Address = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Avatar = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    BlockedTo = table.Column<DateTime>(type: "datetime2", nullable: true),
                    BlockedBy = table.Column<DateTime>(type: "datetime2", nullable: true),
                    AppRoleId = table.Column<int>(type: "int", nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUser", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppUser_AppRole_AppRoleId",
                        column: x => x.AppRoleId,
                        principalTable: "AppRole",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AppRolePermission",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppRoleId = table.Column<int>(type: "int", nullable: false),
                    MstPermissionId = table.Column<int>(type: "int", nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppRolePermission", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppRolePermission_AppRole_AppRoleId",
                        column: x => x.AppRoleId,
                        principalTable: "AppRole",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppRolePermission_MstPermission_MstPermissionId",
                        column: x => x.MstPermissionId,
                        principalTable: "MstPermission",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "MstPermission",
                columns: new[] { "Id", "Code", "CreatedDate", "DeletedDate", "DisplayOrder", "Table" },
                values: new object[,]
                {
                    { 1103, "CREATE", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppRole" },
                    { 1105, "DELETE", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppRole" },
                    { 1104, "UPDATE", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppRole" },
                    { 1102, "VIEW_DETAIL", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppRole" },
                    { 1101, "VIEW_LIST", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppRole" },
                    { 1006, "BLOCK", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppUser" },
                    { 1003, "CREATE", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppUser" },
                    { 1008, "DELETE", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppUser" },
                    { 1007, "UNBLOCK", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppUser" },
                    { 1004, "UPDATE", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppUser" },
                    { 1005, "UPDATE_PWD", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppUser" },
                    { 1002, "VIEW_DETAIL", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppUser" },
                    { 1001, "VIEW_LIST", new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668), null, null, "AppUser" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppRolePermission_AppRoleId",
                table: "AppRolePermission",
                column: "AppRoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AppRolePermission_MstPermissionId",
                table: "AppRolePermission",
                column: "MstPermissionId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_AppRoleId",
                table: "AppUser",
                column: "AppRoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_Username",
                table: "AppUser",
                column: "Username",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppRolePermission");

            migrationBuilder.DropTable(
                name: "AppUser");

            migrationBuilder.DropTable(
                name: "MstPermission");

            migrationBuilder.DropTable(
                name: "AppRole");
        }
    }
}
