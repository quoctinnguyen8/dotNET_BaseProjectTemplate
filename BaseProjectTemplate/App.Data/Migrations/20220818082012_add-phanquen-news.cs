using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class addphanquennews : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 89, 4, 82, 64, 7, 75, 130, 166, 74, 215, 140, 100, 164, 86, 11, 65, 231, 250, 97, 32, 205, 1, 98, 97, 59, 214, 94, 250, 155, 0, 252, 29, 28, 181, 27, 239, 195, 29, 2, 229, 225, 68, 198, 246, 80, 45, 41, 16, 231, 154, 89, 1, 190, 241, 76, 197, 205, 180, 168, 15, 174, 200, 169, 173 }, new byte[] { 151, 152, 29, 58, 224, 130, 94, 87, 48, 225, 4, 190, 204, 141, 173, 38, 154, 118, 10, 250, 144, 3, 40, 42, 189, 142, 26, 233, 121, 184, 123, 202, 95, 60, 230, 80, 3, 12, 97, 169, 141, 205, 139, 184, 56, 100, 224, 23, 108, 147, 12, 19, 63, 73, 150, 156, 103, 232, 78, 215, 98, 140, 236, 149, 35, 132, 190, 224, 202, 81, 72, 195, 115, 133, 218, 5, 100, 168, 111, 184, 93, 140, 107, 239, 76, 78, 22, 136, 171, 239, 231, 44, 90, 33, 53, 157, 144, 255, 52, 223, 84, 39, 3, 127, 51, 227, 157, 87, 236, 191, 146, 182, 131, 241, 248, 253, 67, 42, 45, 170, 31, 231, 41, 58, 171, 64, 106, 23 } });

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 89, 4, 82, 64, 7, 75, 130, 166, 74, 215, 140, 100, 164, 86, 11, 65, 231, 250, 97, 32, 205, 1, 98, 97, 59, 214, 94, 250, 155, 0, 252, 29, 28, 181, 27, 239, 195, 29, 2, 229, 225, 68, 198, 246, 80, 45, 41, 16, 231, 154, 89, 1, 190, 241, 76, 197, 205, 180, 168, 15, 174, 200, 169, 173 }, new byte[] { 151, 152, 29, 58, 224, 130, 94, 87, 48, 225, 4, 190, 204, 141, 173, 38, 154, 118, 10, 250, 144, 3, 40, 42, 189, 142, 26, 233, 121, 184, 123, 202, 95, 60, 230, 80, 3, 12, 97, 169, 141, 205, 139, 184, 56, 100, 224, 23, 108, 147, 12, 19, 63, 73, 150, 156, 103, 232, 78, 215, 98, 140, 236, 149, 35, 132, 190, 224, 202, 81, 72, 195, 115, 133, 218, 5, 100, 168, 111, 184, 93, 140, 107, 239, 76, 78, 22, 136, 171, 239, 231, 44, 90, 33, 53, 157, 144, 255, 52, 223, 84, 39, 3, 127, 51, 227, 157, 87, 236, 191, 146, 182, 131, 241, 248, 253, 67, 42, 45, 170, 31, 231, 41, 58, 171, 64, 106, 23 } });

            migrationBuilder.InsertData(
                table: "MstPermission",
                columns: new[] { "Id", "Code", "CreatedDate", "DeletedDate", "Desc", "DisplayOrder", "GroupName", "Table" },
                values: new object[,]
                {
                    { 1301, "VIEW_LIST", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Xem danh sách bài viết", null, "Quản lý tin tức", "AppNews" },
                    { 1302, "CREATE", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Thêm bài viết", null, "Quản lý tin tức", "AppNews" },
                    { 1303, "UPDATE", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Cập nhật bài viết", null, "Quản lý tin tức", "AppNews" },
                    { 1304, "DELETE", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Xóa bài viết", null, "Quản lý tin tức", "AppNews" },
                    { 1305, "PUBLIC", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Công khai bài viết", null, "Quản lý tin tức", "AppNews" },
                    { 1306, "UNPUBLIC", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Gỡ bỏ bài viết", null, "Quản lý tin tức", "AppNews" },
                    { 1401, "VIEW_LIST", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Xem danh sách thể loại tin", null, "Quản lý thể loại tin", "AppCategoryNews" },
                    { 1402, "CREATE", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Thêm thể loại bài viết", null, "Quản lý thể loại tin", "AppCategoryNews" },
                    { 1403, "UPDATE", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Cập nhật thể loại bài viết", null, "Quản lý thể loại tin", "AppCategoryNews" },
                    { 1404, "DELETE", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Xóa thể loại bài viết", null, "Quản lý thể loại tin", "AppCategoryNews" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1301);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1302);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1303);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1304);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1305);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1306);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1401);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1402);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1403);

            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1404);

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
        }
    }
}
