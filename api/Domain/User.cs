using System.ComponentModel.DataAnnotations;

namespace api.Domain;

public class User
{
    public Guid User_Id { get; set; }
    public string Username { get; set; }
    public string First_Name { get; set; }
    public string Last_Name { get; set; }
    public string Email { get; set; }
    public PhoneAttribute Phone { get; set; }
    public List<Friendship> Friends { get; set; }
}