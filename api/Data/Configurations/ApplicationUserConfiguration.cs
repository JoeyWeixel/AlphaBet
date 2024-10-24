using api.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.Data.Configurations;

public class ApplicationUserConfiguration : IEntityTypeConfiguration<ApplicationUser>
{
    public void Configure(EntityTypeBuilder<ApplicationUser> builder)
    {
        builder.ToTable("User");
        
        builder.HasIndex(u => u.Username)
            .IsUnique();
        
        builder.HasKey(u => u.UserId);
        builder.Property(u => u.Username)
            .IsRequired()
            .HasMaxLength(32);
        builder.Property(u => u.FirstName)
            .IsRequired()
            .HasMaxLength(32);
        builder.Property(u => u.LastName)
            .IsRequired()
            .HasMaxLength(32);
        builder.Property(u => u.Email)
            .IsRequired()
            .HasMaxLength(320);

        builder.HasMany(u => u.RequestedFriends)
            .WithOne(f => f.Requester)
            .HasForeignKey(f => f.RequesterId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany(u => u.ReceivedFriends)
            .WithOne(f => f.Receiver)
            .HasForeignKey(f => f.ReceiverId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}