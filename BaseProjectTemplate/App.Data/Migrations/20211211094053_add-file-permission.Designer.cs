﻿// <auto-generated />
using System;
using App.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace App.Data.Migrations
{
    [DbContext(typeof(WebAppDbContext))]
    [Migration("20211211094053_add-file-permission")]
    partial class addfilepermission
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("App.Data.Entities.AppRole", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CreatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DeletedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Desc")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int?>("UpdatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("AppRole");
                });

            modelBuilder.Entity("App.Data.Entities.AppRolePermission", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AppRoleId")
                        .HasColumnType("int");

                    b.Property<int?>("CreatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DeletedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<int>("MstPermissionId")
                        .HasColumnType("int");

                    b.Property<int?>("UpdatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("AppRoleId");

                    b.HasIndex("MstPermissionId");

                    b.ToTable("AppRolePermission");
                });

            modelBuilder.Entity("App.Data.Entities.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("AppRoleId")
                        .HasColumnType("int");

                    b.Property<string>("Avatar")
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<DateTime?>("BlockedBy")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("BlockedTo")
                        .HasColumnType("datetime2");

                    b.Property<int?>("CreatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DeletedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasMaxLength(200)
                        .IsUnicode(false)
                        .HasColumnType("varchar(200)");

                    b.Property<string>("FullName")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<byte[]>("PasswordHash")
                        .HasMaxLength(200)
                        .HasColumnType("varbinary(200)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasMaxLength(200)
                        .HasColumnType("varbinary(200)");

                    b.Property<string>("PhoneNumber1")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.Property<string>("PhoneNumber2")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.Property<int?>("UpdatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(200)
                        .IsUnicode(false)
                        .HasColumnType("varchar(200)");

                    b.HasKey("Id");

                    b.HasIndex("AppRoleId");

                    b.HasIndex("Username")
                        .IsUnique();

                    b.ToTable("AppUser");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "Thành phố Hồ Chí Minh",
                            CreatedBy = -1,
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "admin_test@gmail.com",
                            FullName = "Obama",
                            PasswordHash = new byte[] { 211, 148, 130, 28, 128, 254, 69, 255, 182, 213, 14, 62, 53, 4, 75, 63, 9, 138, 36, 85, 84, 171, 19, 144, 3, 208, 59, 60, 115, 25, 56, 228, 241, 73, 70, 104, 231, 234, 42, 229, 240, 189, 76, 19, 142, 59, 119, 116, 119, 30, 134, 110, 31, 216, 232, 24, 171, 71, 79, 236, 189, 77, 157, 220 },
                            PasswordSalt = new byte[] { 132, 107, 41, 79, 154, 152, 250, 253, 40, 135, 213, 157, 202, 237, 57, 166, 39, 75, 58, 36, 55, 208, 209, 230, 208, 210, 29, 252, 176, 54, 157, 67, 106, 141, 30, 9, 202, 117, 58, 153, 212, 215, 127, 187, 77, 176, 26, 190, 167, 49, 99, 252, 158, 86, 69, 46, 34, 131, 183, 37, 252, 142, 148, 161, 172, 127, 181, 16, 108, 18, 254, 144, 36, 231, 183, 211, 171, 102, 14, 241, 102, 114, 141, 75, 122, 84, 197, 247, 94, 177, 102, 37, 238, 220, 159, 109, 50, 201, 21, 188, 128, 243, 144, 244, 77, 103, 128, 152, 68, 45, 216, 204, 173, 138, 59, 216, 119, 156, 179, 56, 126, 132, 150, 196, 6, 12, 184, 6 },
                            PhoneNumber1 = "0928666158",
                            PhoneNumber2 = "0928666156",
                            UpdatedBy = -1,
                            UpdatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Username = "admin"
                        });
                });

            modelBuilder.Entity("App.Data.Entities.MstPermission", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DeletedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Desc")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(true)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int?>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<string>("GroupName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(true)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Table")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("MstPermission");

                    b.HasData(
                        new
                        {
                            Id = 1103,
                            Code = "CREATE",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Thêm quyền",
                            GroupName = "Quản lý phân quyền",
                            Table = "AppRole"
                        },
                        new
                        {
                            Id = 1105,
                            Code = "DELETE",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Xóa quyền",
                            GroupName = "Quản lý phân quyền",
                            Table = "AppRole"
                        },
                        new
                        {
                            Id = 1104,
                            Code = "UPDATE",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Sửa quyền",
                            GroupName = "Quản lý phân quyền",
                            Table = "AppRole"
                        },
                        new
                        {
                            Id = 1102,
                            Code = "VIEW_DETAIL",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Xem chi tiết quyền",
                            GroupName = "Quản lý phân quyền",
                            Table = "AppRole"
                        },
                        new
                        {
                            Id = 1101,
                            Code = "VIEW_LIST",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Xem danh sách quyền",
                            GroupName = "Quản lý phân quyền",
                            Table = "AppRole"
                        },
                        new
                        {
                            Id = 1006,
                            Code = "BLOCK",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Khóa người dùng",
                            GroupName = "Quản lý người dùng",
                            Table = "AppUser"
                        },
                        new
                        {
                            Id = 1003,
                            Code = "CREATE",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Thêm người dùng",
                            GroupName = "Quản lý người dùng",
                            Table = "AppUser"
                        },
                        new
                        {
                            Id = 1008,
                            Code = "DELETE",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Xóa người dùng",
                            GroupName = "Quản lý người dùng",
                            Table = "AppUser"
                        },
                        new
                        {
                            Id = 1007,
                            Code = "UNBLOCK",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Mở khóa người dùng",
                            GroupName = "Quản lý người dùng",
                            Table = "AppUser"
                        },
                        new
                        {
                            Id = 1004,
                            Code = "UPDATE",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Cập nhật người dùng",
                            GroupName = "Quản lý người dùng",
                            Table = "AppUser"
                        },
                        new
                        {
                            Id = 1005,
                            Code = "UPDATE_PWD",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Đổi mật khẩu",
                            GroupName = "Quản lý người dùng",
                            Table = "AppUser"
                        },
                        new
                        {
                            Id = 1002,
                            Code = "VIEW_DETAIL",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Xem chi tiết người dùng",
                            GroupName = "Quản lý người dùng",
                            Table = "AppUser"
                        },
                        new
                        {
                            Id = 1001,
                            Code = "VIEW_LIST",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Xem danh sách người dùng",
                            GroupName = "Quản lý người dùng",
                            Table = "AppUser"
                        },
                        new
                        {
                            Id = 1205,
                            Code = "MANAGER",
                            CreatedDate = new DateTime(2021, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Desc = "Quản lý file hệ thống",
                            GroupName = "Quản lý file",
                            Table = "FileManager"
                        });
                });

            modelBuilder.Entity("App.Data.Entities.AppRolePermission", b =>
                {
                    b.HasOne("App.Data.Entities.AppRole", "AppRole")
                        .WithMany("AppRolePermissions")
                        .HasForeignKey("AppRoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("App.Data.Entities.MstPermission", "MstPermission")
                        .WithMany("AppRolePermissions")
                        .HasForeignKey("MstPermissionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AppRole");

                    b.Navigation("MstPermission");
                });

            modelBuilder.Entity("App.Data.Entities.AppUser", b =>
                {
                    b.HasOne("App.Data.Entities.AppRole", "AppRole")
                        .WithMany("AppUsers")
                        .HasForeignKey("AppRoleId");

                    b.Navigation("AppRole");
                });

            modelBuilder.Entity("App.Data.Entities.AppRole", b =>
                {
                    b.Navigation("AppRolePermissions");

                    b.Navigation("AppUsers");
                });

            modelBuilder.Entity("App.Data.Entities.MstPermission", b =>
                {
                    b.Navigation("AppRolePermissions");
                });
#pragma warning restore 612, 618
        }
    }
}
