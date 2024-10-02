import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bet } from "@/types/Bet";
import TeamIcon from "./TeamIcon";

type RecentFriendResultProps = {
  bet: Bet;
};
const RecentFriendResult : React.FC<RecentFriendResultProps> = ({ bet }) => {

  const ringColor : string = (() => {
    switch (bet.status) {
      case "won":
        return "ring-bet-won/[.75]";
      case "lost":
        return "ring-bet-lost";
      case "push":
        return "ring-bet-push";
      default:
        return "";
    }
  })();

  const betName : string = (() => {
    if (bet.team === bet.match.homeTeam) {
      if (bet.type === "moneyline") {
        return bet.match.homeTeam.shortName + (bet.match.odds.homeTeamMoneyLine >= 0 ? " +" : " ") + bet.match.odds.homeTeamMoneyLine;
      } else if (bet.type === "spread") {
        return bet.match.homeTeam.shortName + (bet.match.odds.homeTeamSpread >= 0 ? " +" : " ") + bet.match.odds.homeTeamSpread;
      }
    } else if (bet.team === bet.match.awayTeam) {
      if (bet.type === "moneyline") {
        return bet.match.awayTeam.shortName + (bet.match.odds.awayTeamMoneyLine >= 0 ? " +" : " ") + bet.match.odds.awayTeamMoneyLine;
      } else if (bet.type === "spread") {
        return bet.match.awayTeam.shortName + (bet.match.odds.awayTeamSpread >= 0 ? " +" : " ") + bet.match.odds.awayTeamSpread;
      }
    }
    return "";
  })();

  return (
    <div className="flex justify-between items-center px-4 my-2 mx-auto h-24">
      <Avatar className={`ring-4 ${ringColor}`}>
        <AvatarImage src={bet.user.profilePictureUrl} />
        <AvatarFallback>{bet.user.name.slice(0,1)}</AvatarFallback>
      </Avatar>
      <div className="w-1/2 flex flex-row justify-around items-start">
          <TeamIcon team={bet.match.awayTeam} />
          <span className="pt-6">vs.</span>
          <TeamIcon team={bet.match.homeTeam} />
      </div>
      <div className="w-1/4 pl-4">
        <span className="text-left">{betName}</span>
      </div>
    </div>
  )
}

export default RecentFriendResult;