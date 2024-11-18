using api.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.Data.Configurations;

public class OddsConfiguration : IEntityTypeConfiguration<Odds>
{
    public void Configure(EntityTypeBuilder<Odds> builder)
    {
        builder.ToTable("Odds");
        
        builder.HasKey(o => o.Id);

        builder.Property(o => o.HomeTeamPrice)
            .IsRequired();

        builder.Property(o => o.AwayTeamPrice)
            .IsRequired();

        builder.HasOne(o => o.Book);
    }
}