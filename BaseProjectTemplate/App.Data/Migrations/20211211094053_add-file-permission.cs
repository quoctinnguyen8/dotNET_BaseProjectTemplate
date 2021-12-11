using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class addfilepermission : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 211, 148, 130, 28, 128, 254, 69, 255, 182, 213, 14, 62, 53, 4, 75, 63, 9, 138, 36, 85, 84, 171, 19, 144, 3, 208, 59, 60, 115, 25, 56, 228, 241, 73, 70, 104, 231, 234, 42, 229, 240, 189, 76, 19, 142, 59, 119, 116, 119, 30, 134, 110, 31, 216, 232, 24, 171, 71, 79, 236, 189, 77, 157, 220 }, new byte[] { 132, 107, 41, 79, 154, 152, 250, 253, 40, 135, 213, 157, 202, 237, 57, 166, 39, 75, 58, 36, 55, 208, 209, 230, 208, 210, 29, 252, 176, 54, 157, 67, 106, 141, 30, 9, 202, 117, 58, 153, 212, 215, 127, 187, 77, 176, 26, 190, 167, 49, 99, 252, 158, 86, 69, 46, 34, 131, 183, 37, 252, 142, 148, 161, 172, 127, 181, 16, 108, 18, 254, 144, 36, 231, 183, 211, 171, 102, 14, 241, 102, 114, 141, 75, 122, 84, 197, 247, 94, 177, 102, 37, 238, 220, 159, 109, 50, 201, 21, 188, 128, 243, 144, 244, 77, 103, 128, 152, 68, 45, 216, 204, 173, 138, 59, 216, 119, 156, 179, 56, 126, 132, 150, 196, 6, 12, 184, 6 } });

            migrationBuilder.InsertData(
                table: "MstPermission",
                columns: new[] { "Id", "Code", "CreatedDate", "DeletedDate", "Desc", "DisplayOrder", "GroupName", "Table" },
                values: new object[] { 1205, "MANAGER", new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Quản lý file hệ thống", null, "Quản lý file", "FileManager" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1205);

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 155, 217, 198, 98, 179, 137, 112, 183, 154, 120, 101, 252, 227, 51, 55, 246, 89, 55, 61, 155, 239, 121, 111, 17, 5, 165, 146, 185, 36, 170, 244, 238, 72, 252, 12, 58, 61, 51, 241, 212, 105, 33, 146, 155, 43, 27, 248, 113, 49, 169, 101, 27, 28, 216, 233, 72, 110, 5, 165, 14, 212, 102, 32, 146 }, new byte[] { 63, 193, 126, 131, 120, 106, 178, 239, 109, 45, 106, 47, 16, 49, 113, 113, 57, 110, 68, 229, 209, 181, 180, 126, 78, 242, 7, 54, 243, 135, 4, 38, 88, 226, 222, 81, 94, 207, 88, 220, 111, 134, 74, 65, 26, 66, 171, 191, 222, 220, 31, 46, 239, 205, 196, 241, 253, 186, 54, 90, 226, 17, 152, 44, 204, 68, 226, 67, 225, 89, 157, 137, 96, 229, 47, 241, 211, 176, 100, 171, 62, 159, 211, 88, 252, 166, 170, 92, 46, 233, 59, 129, 37, 175, 51, 221, 63, 168, 50, 29, 168, 173, 135, 254, 48, 206, 47, 18, 90, 106, 67, 181, 252, 218, 194, 0, 183, 210, 253, 62, 227, 117, 113, 12, 125, 5, 28, 239 } });
        }
    }
}
