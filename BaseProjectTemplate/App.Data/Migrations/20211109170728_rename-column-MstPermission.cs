using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class renamecolumnMstPermission : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Groupname",
                table: "MstPermission",
                newName: "GroupName");

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 155, 217, 198, 98, 179, 137, 112, 183, 154, 120, 101, 252, 227, 51, 55, 246, 89, 55, 61, 155, 239, 121, 111, 17, 5, 165, 146, 185, 36, 170, 244, 238, 72, 252, 12, 58, 61, 51, 241, 212, 105, 33, 146, 155, 43, 27, 248, 113, 49, 169, 101, 27, 28, 216, 233, 72, 110, 5, 165, 14, 212, 102, 32, 146 }, new byte[] { 63, 193, 126, 131, 120, 106, 178, 239, 109, 45, 106, 47, 16, 49, 113, 113, 57, 110, 68, 229, 209, 181, 180, 126, 78, 242, 7, 54, 243, 135, 4, 38, 88, 226, 222, 81, 94, 207, 88, 220, 111, 134, 74, 65, 26, 66, 171, 191, 222, 220, 31, 46, 239, 205, 196, 241, 253, 186, 54, 90, 226, 17, 152, 44, 204, 68, 226, 67, 225, 89, 157, 137, 96, 229, 47, 241, 211, 176, 100, 171, 62, 159, 211, 88, 252, 166, 170, 92, 46, 233, 59, 129, 37, 175, 51, 221, 63, 168, 50, 29, 168, 173, 135, 254, 48, 206, 47, 18, 90, 106, 67, 181, 252, 218, 194, 0, 183, 210, 253, 62, 227, 117, 113, 12, 125, 5, 28, 239 } });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1101,
                column: "Desc",
                value: "Xem danh sách quyền");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1102,
                column: "Desc",
                value: "Xem chi tiết quyền");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1103,
                column: "Desc",
                value: "Thêm quyền");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1104,
                column: "Desc",
                value: "Sửa quyền");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1105,
                column: "Desc",
                value: "Xóa quyền");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "GroupName",
                table: "MstPermission",
                newName: "Groupname");

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 221, 32, 54, 145, 208, 172, 222, 149, 45, 195, 188, 42, 248, 125, 137, 139, 124, 82, 129, 208, 34, 229, 231, 129, 164, 73, 177, 107, 62, 38, 69, 71, 192, 91, 122, 22, 120, 66, 204, 17, 188, 44, 155, 251, 191, 119, 241, 78, 152, 159, 187, 140, 224, 100, 87, 169, 131, 9, 120, 248, 101, 235, 156, 202 }, new byte[] { 186, 8, 27, 130, 203, 90, 53, 216, 95, 159, 29, 55, 32, 98, 148, 125, 246, 85, 54, 232, 35, 220, 161, 165, 193, 110, 122, 117, 154, 93, 128, 32, 173, 4, 145, 20, 152, 129, 195, 26, 232, 62, 86, 124, 87, 225, 110, 63, 246, 79, 20, 161, 152, 117, 134, 54, 37, 168, 25, 163, 94, 156, 150, 93, 22, 126, 0, 17, 67, 191, 227, 224, 185, 170, 204, 182, 138, 225, 215, 164, 165, 149, 49, 16, 98, 139, 182, 182, 254, 65, 186, 26, 183, 163, 64, 47, 49, 123, 203, 52, 87, 216, 195, 8, 68, 11, 25, 226, 123, 182, 19, 221, 219, 117, 204, 152, 198, 74, 39, 139, 137, 217, 21, 68, 113, 166, 41, 175 } });

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1101,
                column: "Desc",
                value: "Xem danh sách người dùng");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1102,
                column: "Desc",
                value: "Xem chi tiết người dùng");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1103,
                column: "Desc",
                value: "Thêm người dùng");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1104,
                column: "Desc",
                value: "Cập nhật người dùng");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1105,
                column: "Desc",
                value: "Xóa người dùng");
        }
    }
}
