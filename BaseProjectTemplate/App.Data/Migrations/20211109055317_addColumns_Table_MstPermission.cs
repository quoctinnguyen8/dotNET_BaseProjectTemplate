using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class addColumns_Table_MstPermission : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Desc",
                table: "MstPermission",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Groupname",
                table: "MstPermission",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 221, 32, 54, 145, 208, 172, 222, 149, 45, 195, 188, 42, 248, 125, 137, 139, 124, 82, 129, 208, 34, 229, 231, 129, 164, 73, 177, 107, 62, 38, 69, 71, 192, 91, 122, 22, 120, 66, 204, 17, 188, 44, 155, 251, 191, 119, 241, 78, 152, 159, 187, 140, 224, 100, 87, 169, 131, 9, 120, 248, 101, 235, 156, 202 }, new byte[] { 186, 8, 27, 130, 203, 90, 53, 216, 95, 159, 29, 55, 32, 98, 148, 125, 246, 85, 54, 232, 35, 220, 161, 165, 193, 110, 122, 117, 154, 93, 128, 32, 173, 4, 145, 20, 152, 129, 195, 26, 232, 62, 86, 124, 87, 225, 110, 63, 246, 79, 20, 161, 152, 117, 134, 54, 37, 168, 25, 163, 94, 156, 150, 93, 22, 126, 0, 17, 67, 191, 227, 224, 185, 170, 204, 182, 138, 225, 215, 164, 165, 149, 49, 16, 98, 139, 182, 182, 254, 65, 186, 26, 183, 163, 64, 47, 49, 123, 203, 52, 87, 216, 195, 8, 68, 11, 25, 226, 123, 182, 19, 221, 219, 117, 204, 152, 198, 74, 39, 139, 137, 217, 21, 68, 113, 166, 41, 175 } });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1001,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Xem danh sách người dùng", "Quản lý người dùng" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1002,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Xem chi tiết người dùng", "Quản lý người dùng" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1003,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Thêm người dùng", "Quản lý người dùng" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1004,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Cập nhật người dùng", "Quản lý người dùng" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1005,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Đổi mật khẩu", "Quản lý người dùng" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1006,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Khóa người dùng", "Quản lý người dùng" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1007,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Mở khóa người dùng", "Quản lý người dùng" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1008,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Xóa người dùng", "Quản lý người dùng" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1101,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Xem danh sách người dùng", "Quản lý phân quyền" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1102,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Xem chi tiết người dùng", "Quản lý phân quyền" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1103,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Thêm người dùng", "Quản lý phân quyền" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1104,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Cập nhật người dùng", "Quản lý phân quyền" });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1105,
                columns: new[] { "Desc", "Groupname" },
                values: new object[] { "Xóa người dùng", "Quản lý phân quyền" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Desc",
                table: "MstPermission");

            migrationBuilder.DropColumn(
                name: "Groupname",
                table: "MstPermission");

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 54, 69, 233, 193, 29, 232, 81, 37, 98, 159, 17, 80, 7, 137, 154, 70, 3, 182, 85, 26, 84, 135, 198, 192, 36, 179, 103, 1, 80, 70, 89, 83, 56, 59, 83, 203, 38, 249, 35, 66, 43, 77, 208, 145, 237, 206, 83, 120, 224, 164, 74, 208, 3, 120, 182, 89, 119, 172, 192, 85, 253, 53, 243, 208 }, new byte[] { 214, 156, 49, 82, 85, 158, 170, 114, 128, 174, 238, 168, 83, 87, 237, 152, 229, 109, 87, 1, 180, 134, 186, 150, 134, 78, 13, 192, 144, 22, 210, 154, 113, 125, 225, 181, 45, 187, 209, 127, 103, 90, 57, 196, 203, 193, 245, 0, 229, 100, 145, 160, 22, 152, 33, 181, 35, 74, 99, 236, 115, 91, 194, 45, 110, 58, 17, 249, 89, 132, 51, 130, 121, 84, 190, 180, 109, 172, 158, 225, 166, 203, 227, 253, 24, 157, 114, 247, 146, 204, 145, 241, 212, 148, 119, 71, 139, 139, 41, 118, 52, 49, 11, 179, 180, 25, 175, 232, 233, 138, 195, 24, 81, 155, 142, 245, 34, 133, 129, 74, 42, 93, 137, 231, 63, 143, 229, 45 } });
        }
    }
}
