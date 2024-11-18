namespace api.Domain;

public class Team
{ 
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string SportKey { get; set; }
    public ICollection<Match> Matches { get; set; }
    
}