using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class EmptyMigrationToAddFullText : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                "CREATE FULLTEXT CATALOG ft AS DEFAULT;",
                suppressTransaction: true);
            migrationBuilder.Sql(
                "CREATE FULLTEXT INDEX ON [dbo].[User](Username) KEY INDEX PK_User;",
                suppressTransaction: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                "DROP FULLTEXT INDEX ON [dbo].[User](Username);",
                suppressTransaction: true);
            migrationBuilder.Sql(
                "DROP FULLTEXT CATALOG ft;",
                suppressTransaction: true);
        }
    }
}
