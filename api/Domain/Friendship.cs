namespace api.Domain;

public class Friendship
{
    public Guid User1_Id { get; set; }
    public User User1 { get; set; }
    public Guid User2_Id { get; set; }
    public User User2 { get; set; }
    
    public bool IsAccepted { get; set; }
}