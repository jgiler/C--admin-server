using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Project4.Models
{
    public partial class arcsurf_dbContext : DbContext
    {
        //public arcsurf_dbContext()
        //{
        //}

        public arcsurf_dbContext(DbContextOptions<arcsurf_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Products> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;Port=3306;Database=arcsurf_db;User=root;Password=root;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Products>(entity =>
            {
                entity.HasKey(e => e.ProductId)
                    .HasName("PRIMARY");

                entity.ToTable("products");

                entity.Property(e => e.ProductId)
                    .HasColumnName("product_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ProductColor)
                    .IsRequired()
                    .HasColumnName("product_color")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.ProductDescription)
                    .IsRequired()
                    .HasColumnName("product_description")
                    .HasColumnType("mediumtext");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasColumnName("product_name")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.ProductPrice)
                    .HasColumnName("product_price")
                    .HasColumnType("decimal(13,4)");

                entity.Property(e => e.ProductQuantity)
                    .HasColumnName("product_quantity")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ProductSize)
                    .IsRequired()
                    .HasColumnName("product_size")
                    .HasColumnType("varchar(3)");

                entity.Property(e => e.ProductType)
                    .IsRequired()
                    .HasColumnName("product_type")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.ProductUrl)
                    .IsRequired()
                    .HasColumnName("product_url")
                    .HasColumnType("varchar(255)");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
