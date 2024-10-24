using api.Data.Configurations;
using api.Domain;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class AlphabetDbContext(DbContextOptions<AlphabetDbContext> options) : DbContext(options)
{
    public DbSet<ApplicationUser> Users { get; init; }
    public DbSet<Friendship> Friendships { get; init; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new ApplicationUserConfiguration());
        modelBuilder.ApplyConfiguration(new FriendshipConfiguration());
    }
}


