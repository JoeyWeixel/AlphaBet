using api.Domain;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class AlphabetDbContext : DbContext
{
    public AlphabetDbContext(DbContextOptions<AlphabetDbContext> options) 
        : base(options)
    {
    }
    
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
    }
}


