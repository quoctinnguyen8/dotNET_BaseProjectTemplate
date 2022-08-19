using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class add_two_table_News_and_categoryNews : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppCategoryNews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    Slug = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Content = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    DisplayOrder = table.Column<int>(type: "int", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValueSql: "GETDATE()"),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppCategoryNews", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppNews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    Slug = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    Summary = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Views = table.Column<long>(type: "bigint", nullable: false, defaultValue: 0L),
                    Votes = table.Column<float>(type: "real", nullable: false, defaultValue: 0f),
                    Published = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    PublishedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PathImagePost = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppNews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppNews_AppCategoryNews_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "AppCategoryNews",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AppNews_AppUser_UserId",
                        column: x => x.UserId,
                        principalTable: "AppUser",
                        principalColumn: "Id");
                });

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 166, 250, 254, 202, 115, 56, 139, 157, 204, 38, 20, 255, 14, 16, 45, 66, 172, 243, 136, 202, 17, 180, 80, 189, 129, 63, 217, 15, 189, 60, 80, 11, 41, 244, 245, 22, 137, 78, 41, 0, 77, 37, 176, 154, 89, 212, 203, 248, 233, 89, 186, 197, 12, 155, 47, 50, 71, 93, 118, 34, 120, 169, 91, 94 }, new byte[] { 232, 9, 248, 9, 107, 100, 201, 189, 224, 18, 84, 70, 68, 192, 175, 100, 141, 171, 78, 237, 24, 130, 32, 32, 61, 196, 21, 214, 106, 230, 118, 130, 60, 237, 229, 75, 190, 105, 223, 89, 109, 234, 178, 29, 26, 88, 87, 77, 103, 164, 45, 168, 227, 102, 255, 130, 156, 115, 214, 170, 20, 90, 98, 130, 158, 253, 135, 140, 50, 160, 25, 143, 236, 250, 193, 187, 243, 8, 173, 29, 123, 26, 119, 174, 205, 42, 25, 131, 117, 99, 131, 83, 60, 39, 241, 249, 109, 26, 43, 54, 147, 201, 234, 175, 224, 23, 163, 140, 55, 116, 62, 156, 110, 196, 95, 122, 103, 205, 248, 76, 43, 199, 101, 151, 252, 229, 138, 211 } });

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 166, 250, 254, 202, 115, 56, 139, 157, 204, 38, 20, 255, 14, 16, 45, 66, 172, 243, 136, 202, 17, 180, 80, 189, 129, 63, 217, 15, 189, 60, 80, 11, 41, 244, 245, 22, 137, 78, 41, 0, 77, 37, 176, 154, 89, 212, 203, 248, 233, 89, 186, 197, 12, 155, 47, 50, 71, 93, 118, 34, 120, 169, 91, 94 }, new byte[] { 232, 9, 248, 9, 107, 100, 201, 189, 224, 18, 84, 70, 68, 192, 175, 100, 141, 171, 78, 237, 24, 130, 32, 32, 61, 196, 21, 214, 106, 230, 118, 130, 60, 237, 229, 75, 190, 105, 223, 89, 109, 234, 178, 29, 26, 88, 87, 77, 103, 164, 45, 168, 227, 102, 255, 130, 156, 115, 214, 170, 20, 90, 98, 130, 158, 253, 135, 140, 50, 160, 25, 143, 236, 250, 193, 187, 243, 8, 173, 29, 123, 26, 119, 174, 205, 42, 25, 131, 117, 99, 131, 83, 60, 39, 241, 249, 109, 26, 43, 54, 147, 201, 234, 175, 224, 23, 163, 140, 55, 116, 62, 156, 110, 196, 95, 122, 103, 205, 248, 76, 43, 199, 101, 151, 252, 229, 138, 211 } });

            migrationBuilder.CreateIndex(
                name: "IX_AppNews_CategoryId",
                table: "AppNews",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_AppNews_UserId",
                table: "AppNews",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "uq_slug",
                table: "AppNews",
                column: "Slug",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppNews");

            migrationBuilder.DropTable(
                name: "AppCategoryNews");

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 11, 207, 142, 165, 129, 9, 191, 32, 89, 202, 104, 110, 198, 107, 85, 81, 70, 27, 54, 83, 55, 247, 94, 213, 146, 122, 173, 41, 51, 36, 58, 59, 240, 134, 227, 152, 227, 216, 39, 125, 66, 20, 145, 103, 87, 175, 119, 150, 163, 157, 84, 208, 247, 138, 8, 27, 127, 105, 154, 210, 209, 208, 16, 142 }, new byte[] { 108, 96, 197, 207, 39, 211, 97, 59, 161, 105, 107, 122, 33, 66, 247, 160, 34, 22, 186, 226, 129, 150, 3, 219, 89, 94, 199, 24, 181, 219, 103, 230, 128, 9, 98, 104, 131, 181, 29, 183, 31, 98, 131, 206, 138, 160, 127, 250, 120, 207, 147, 114, 201, 161, 249, 53, 24, 103, 162, 67, 51, 215, 99, 87, 64, 227, 64, 197, 148, 91, 88, 242, 24, 167, 78, 15, 48, 144, 185, 178, 25, 154, 79, 82, 157, 85, 176, 142, 107, 39, 78, 36, 199, 148, 171, 101, 178, 174, 28, 88, 145, 255, 32, 140, 226, 163, 226, 52, 227, 100, 14, 82, 94, 126, 54, 151, 92, 200, 115, 230, 12, 87, 227, 4, 147, 60, 94, 74 } });

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 11, 207, 142, 165, 129, 9, 191, 32, 89, 202, 104, 110, 198, 107, 85, 81, 70, 27, 54, 83, 55, 247, 94, 213, 146, 122, 173, 41, 51, 36, 58, 59, 240, 134, 227, 152, 227, 216, 39, 125, 66, 20, 145, 103, 87, 175, 119, 150, 163, 157, 84, 208, 247, 138, 8, 27, 127, 105, 154, 210, 209, 208, 16, 142 }, new byte[] { 108, 96, 197, 207, 39, 211, 97, 59, 161, 105, 107, 122, 33, 66, 247, 160, 34, 22, 186, 226, 129, 150, 3, 219, 89, 94, 199, 24, 181, 219, 103, 230, 128, 9, 98, 104, 131, 181, 29, 183, 31, 98, 131, 206, 138, 160, 127, 250, 120, 207, 147, 114, 201, 161, 249, 53, 24, 103, 162, 67, 51, 215, 99, 87, 64, 227, 64, 197, 148, 91, 88, 242, 24, 167, 78, 15, 48, 144, 185, 178, 25, 154, 79, 82, 157, 85, 176, 142, 107, 39, 78, 36, 199, 148, 171, 101, 178, 174, 28, 88, 145, 255, 32, 140, 226, 163, 226, 52, 227, 100, 14, 82, 94, 126, 54, 151, 92, 200, 115, 230, 12, 87, 227, 4, 147, 60, 94, 74 } });
        }
    }
}
