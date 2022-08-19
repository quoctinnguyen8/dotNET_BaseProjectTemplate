using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class adduserdata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AppUser",
                columns: new[] { "Id", "Address", "AppRoleId", "Avatar", "BlockedBy", "BlockedTo", "CreatedBy", "CreatedDate", "DeletedDate", "DisplayOrder", "Email", "FullName", "PasswordHash", "PasswordSalt", "PhoneNumber1", "PhoneNumber2", "UpdatedBy", "UpdatedDate", "Username" },
                values: new object[] { 2, "Thành phố Hồ Chí Minh", 1, null, null, null, -1, new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "thanhnguyendt2000@gmail.com", "Obama", new byte[] { 11, 207, 142, 165, 129, 9, 191, 32, 89, 202, 104, 110, 198, 107, 85, 81, 70, 27, 54, 83, 55, 247, 94, 213, 146, 122, 173, 41, 51, 36, 58, 59, 240, 134, 227, 152, 227, 216, 39, 125, 66, 20, 145, 103, 87, 175, 119, 150, 163, 157, 84, 208, 247, 138, 8, 27, 127, 105, 154, 210, 209, 208, 16, 142 }, new byte[] { 108, 96, 197, 207, 39, 211, 97, 59, 161, 105, 107, 122, 33, 66, 247, 160, 34, 22, 186, 226, 129, 150, 3, 219, 89, 94, 199, 24, 181, 219, 103, 230, 128, 9, 98, 104, 131, 181, 29, 183, 31, 98, 131, 206, 138, 160, 127, 250, 120, 207, 147, 114, 201, 161, 249, 53, 24, 103, 162, 67, 51, 215, 99, 87, 64, 227, 64, 197, 148, 91, 88, 242, 24, 167, 78, 15, 48, 144, 185, 178, 25, 154, 79, 82, 157, 85, 176, 142, 107, 39, 78, 36, 199, 148, 171, 101, 178, 174, 28, 88, 145, 255, 32, 140, 226, 163, 226, 52, 227, 100, 14, 82, 94, 126, 54, 151, 92, 200, 115, 230, 12, 87, 227, 4, 147, 60, 94, 74 }, "0928666157", "0928666158", -1, new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "admin1" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
