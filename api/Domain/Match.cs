namespace api.Domain;

public class Match
{
    public Guid Id { get; set; }
    public string SportKey { get; set; } 
    public DateTime StartTime { get; set; }
    public Team HomeTeam { get; set; }
    public Guid HomeTeamId { get; set; }
    public Team AwayTeam { get; set; }
    public Guid AwayTeamId { get; set; }
    public IEnumerable<Odds> Odds { get; set; }
}