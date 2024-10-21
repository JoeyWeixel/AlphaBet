using api.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.Data.Configurations;

public class UserConfiguration
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("User");
        
        builder.HasKey(u => u.User_Id);
        builder.Property(u => u.Username)
            .IsRequired()
            .HasMaxLength(32);
        builder.Property(u => u.First_Name)
            .IsRequired()
            .HasMaxLength(32);
        builder.Property(u => u.Last_Name)
            .IsRequired()
            .HasMaxLength(32);
        builder.Property(u => u.Email)
            .IsRequired()
            .HasMaxLength(320);
        builder.Property(u => u.Phone)
            .IsRequired()
            .HasColumnType("varchar(10)");
    }
}