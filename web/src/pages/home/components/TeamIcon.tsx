import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Team } from "./UpcomingMatchCard";

type TeamIconProps = {
  team: Team;
};

const TeamIcon: React.FC<TeamIconProps> = ({ team }) => {
  return (
    
    <div className="flex flex-col justify-center items-center w-20">
      <Avatar className="size-16 rounded-none">
        <AvatarImage className="aspect-auto w-fit h-fit my-auto" src={team.logo} />
        <AvatarFallback className="rounded-full">{team.shortName}</AvatarFallback>
      </Avatar>
      <span className="">{team.rank && "#" + team.rank}</span>
    </div>
  );
}

export default TeamIcon;