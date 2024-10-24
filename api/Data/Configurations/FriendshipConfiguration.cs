using api.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.Data.Configurations;

public class FriendshipConfiguration : IEntityTypeConfiguration<Friendship>
{
    public void Configure(EntityTypeBuilder<Friendship> builder)
    {
        builder.ToTable("Friendship");
        
        builder.HasKey(f => new { f.RequesterId, f.ReceiverId });

        builder.Property(f => f.RequestedAt)
            .IsRequired();

        builder.Property(f => f.IsAccepted)
            .IsRequired();

        builder.Property(f => f.AcceptedAt);
    }   
}