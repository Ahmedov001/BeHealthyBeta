using BeHealthyProject.Server.Entities;
using Microsoft.EntityFrameworkCore;

namespace BeHealthyProject.Server.Data
{
	public class BeHealthyDbContext : DbContext
	{
		public BeHealthyDbContext(DbContextOptions options) : base(options)
		{
		}
		public DbSet<User> Users { get; set; }

        public DbSet<Dietitian> Dietitians { get; set; }
    }
}
