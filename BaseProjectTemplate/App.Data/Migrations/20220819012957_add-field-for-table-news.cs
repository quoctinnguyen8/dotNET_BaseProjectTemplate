﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class addfieldfortablenews : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StampLink",
                table: "AppNews",
                newName: "StampPath");

            migrationBuilder.RenameColumn(
                name: "PathImagePost",
                table: "AppNews",
                newName: "CoverImgThumbnailPath");

            migrationBuilder.AddColumn<string>(
                name: "CoverImgPath",
                table: "AppNews",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 6, 42, 105, 215, 201, 199, 188, 230, 66, 64, 1, 195, 229, 18, 35, 96, 121, 190, 243, 185, 68, 77, 194, 149, 129, 224, 122, 104, 66, 207, 212, 35, 231, 147, 48, 243, 100, 123, 251, 26, 69, 114, 88, 120, 70, 76, 86, 93, 95, 69, 225, 253, 205, 91, 39, 93, 2, 126, 220, 189, 223, 2, 177, 212 }, new byte[] { 249, 68, 129, 154, 78, 206, 41, 68, 3, 11, 138, 14, 209, 92, 185, 74, 161, 183, 216, 192, 1, 179, 145, 108, 110, 126, 218, 183, 247, 168, 102, 55, 107, 73, 215, 92, 173, 56, 221, 56, 170, 131, 79, 68, 94, 206, 36, 251, 47, 134, 74, 37, 56, 126, 130, 95, 209, 150, 185, 90, 57, 4, 192, 115, 221, 80, 24, 111, 192, 109, 81, 63, 66, 224, 132, 26, 118, 74, 235, 255, 245, 144, 187, 229, 117, 126, 42, 180, 74, 5, 198, 242, 104, 156, 155, 51, 91, 141, 56, 128, 153, 39, 45, 6, 13, 80, 108, 111, 207, 246, 55, 107, 93, 160, 59, 132, 133, 243, 185, 16, 210, 109, 103, 222, 204, 69, 39, 172 } });

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 6, 42, 105, 215, 201, 199, 188, 230, 66, 64, 1, 195, 229, 18, 35, 96, 121, 190, 243, 185, 68, 77, 194, 149, 129, 224, 122, 104, 66, 207, 212, 35, 231, 147, 48, 243, 100, 123, 251, 26, 69, 114, 88, 120, 70, 76, 86, 93, 95, 69, 225, 253, 205, 91, 39, 93, 2, 126, 220, 189, 223, 2, 177, 212 }, new byte[] { 249, 68, 129, 154, 78, 206, 41, 68, 3, 11, 138, 14, 209, 92, 185, 74, 161, 183, 216, 192, 1, 179, 145, 108, 110, 126, 218, 183, 247, 168, 102, 55, 107, 73, 215, 92, 173, 56, 221, 56, 170, 131, 79, 68, 94, 206, 36, 251, 47, 134, 74, 37, 56, 126, 130, 95, 209, 150, 185, 90, 57, 4, 192, 115, 221, 80, 24, 111, 192, 109, 81, 63, 66, 224, 132, 26, 118, 74, 235, 255, 245, 144, 187, 229, 117, 126, 42, 180, 74, 5, 198, 242, 104, 156, 155, 51, 91, 141, 56, 128, 153, 39, 45, 6, 13, 80, 108, 111, 207, 246, 55, 107, 93, 160, 59, 132, 133, 243, 185, 16, 210, 109, 103, 222, 204, 69, 39, 172 } });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverImgPath",
                table: "AppNews");

            migrationBuilder.RenameColumn(
                name: "StampPath",
                table: "AppNews",
                newName: "StampLink");

            migrationBuilder.RenameColumn(
                name: "CoverImgThumbnailPath",
                table: "AppNews",
                newName: "PathImagePost");

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 196, 11, 155, 188, 3, 2, 109, 220, 85, 76, 140, 13, 80, 223, 80, 87, 140, 232, 38, 122, 0, 17, 219, 34, 247, 103, 164, 211, 74, 211, 247, 3, 135, 69, 56, 221, 196, 233, 151, 169, 94, 176, 9, 58, 246, 135, 193, 21, 226, 153, 174, 229, 235, 172, 222, 237, 0, 135, 162, 18, 105, 17, 36, 65 }, new byte[] { 147, 234, 151, 50, 163, 50, 146, 18, 216, 24, 5, 138, 57, 2, 177, 91, 138, 238, 153, 174, 35, 122, 23, 186, 221, 202, 73, 179, 21, 84, 61, 118, 208, 97, 44, 203, 155, 247, 20, 235, 82, 158, 174, 142, 156, 207, 139, 216, 65, 165, 222, 245, 44, 34, 226, 135, 193, 70, 27, 220, 36, 111, 113, 136, 109, 24, 129, 237, 181, 229, 171, 149, 49, 75, 47, 12, 1, 88, 46, 179, 249, 26, 252, 202, 216, 186, 191, 252, 148, 32, 225, 251, 164, 233, 135, 58, 177, 61, 0, 124, 197, 23, 63, 9, 253, 234, 47, 22, 110, 49, 148, 67, 122, 161, 197, 222, 147, 99, 227, 244, 33, 222, 145, 53, 210, 240, 105, 130 } });

            migrationBuilder.UpdateData(
                table: "AppUser",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 196, 11, 155, 188, 3, 2, 109, 220, 85, 76, 140, 13, 80, 223, 80, 87, 140, 232, 38, 122, 0, 17, 219, 34, 247, 103, 164, 211, 74, 211, 247, 3, 135, 69, 56, 221, 196, 233, 151, 169, 94, 176, 9, 58, 246, 135, 193, 21, 226, 153, 174, 229, 235, 172, 222, 237, 0, 135, 162, 18, 105, 17, 36, 65 }, new byte[] { 147, 234, 151, 50, 163, 50, 146, 18, 216, 24, 5, 138, 57, 2, 177, 91, 138, 238, 153, 174, 35, 122, 23, 186, 221, 202, 73, 179, 21, 84, 61, 118, 208, 97, 44, 203, 155, 247, 20, 235, 82, 158, 174, 142, 156, 207, 139, 216, 65, 165, 222, 245, 44, 34, 226, 135, 193, 70, 27, 220, 36, 111, 113, 136, 109, 24, 129, 237, 181, 229, 171, 149, 49, 75, 47, 12, 1, 88, 46, 179, 249, 26, 252, 202, 216, 186, 191, 252, 148, 32, 225, 251, 164, 233, 135, 58, 177, 61, 0, 124, 197, 23, 63, 9, 253, 234, 47, 22, 110, 49, 148, 67, 122, 161, 197, 222, 147, 99, 227, 244, 33, 222, 145, 53, 210, 240, 105, 130 } });
        }
    }
}