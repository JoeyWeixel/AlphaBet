using api.Data.Configurations;
using api.Domain;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class AlphabetDbContext : DbContext
{
    public AlphabetDbContext(DbContextOptions<AlphabetDbContext> options) 
        : base(options)
    {
    }
    
    public DbSet<ApplicationUser> Users { get; set; }
    public DbSet<Friendship> Friendships { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new ApplicationUserConfiguration());
    }
}


