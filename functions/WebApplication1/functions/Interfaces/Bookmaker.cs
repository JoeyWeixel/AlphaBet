namespace Functions.Interfaces;

public class Bookmaker
{
    string key { get; set; }
    string title { get; set; }
    DateTime last_update { get; set; }
    IEnumerable<Markets> markets { get; set; }
}