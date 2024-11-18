namespace api.Domain;

public class Odds
{
    public Guid Id { get; set; }
    public Book Book { get; set; }
    public int HomeTeamPrice { get; set; }
    public int AwayTeamPrice { get; set; }
}