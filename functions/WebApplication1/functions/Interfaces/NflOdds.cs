namespace Functions.Interfaces;

public class NflOdds
{
    string id { get; set; }
    string sport_key { get; set; }
    DateTime commenence_time { get; set; }
    string home_team { get; set; }
    string away_team { get; set; }
    IEnumerable<Bookmaker> bookmakers { get; set; }
    
}