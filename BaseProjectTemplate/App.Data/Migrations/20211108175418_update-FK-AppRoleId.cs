using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Data.Migrations
{
    public partial class updateFKAppRoleId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppUser_AppRole_AppRoleId",
                table: "AppUser");

            migrationBuilder.AlterColumn<int>(
                name: "AppRoleId",
                table: "AppUser",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1001,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1002,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1003,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1004,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1005,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1006,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1007,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1008,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1101,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1102,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1103,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1104,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1105,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 54, 18, 476, DateTimeKind.Local).AddTicks(2636));

            migrationBuilder.AddForeignKey(
                name: "FK_AppUser_AppRole_AppRoleId",
                table: "AppUser",
                column: "AppRoleId",
                principalTable: "AppRole",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppUser_AppRole_AppRoleId",
                table: "AppUser");

            migrationBuilder.AlterColumn<int>(
                name: "AppRoleId",
                table: "AppUser",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1001,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1002,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1003,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1004,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1005,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1006,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1007,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1008,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1101,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1102,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1103,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1104,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.UpdateData(
                table: "MstPermission",
                keyColumn: "Id",
                keyValue: 1105,
                column: "CreatedDate",
                value: new DateTime(2021, 11, 9, 0, 41, 36, 324, DateTimeKind.Local).AddTicks(6668));

            migrationBuilder.AddForeignKey(
                name: "FK_AppUser_AppRole_AppRoleId",
                table: "AppUser",
                column: "AppRoleId",
                principalTable: "AppRole",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
