import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Record } from "@/types/Record";
import { MoveRight, TrendingDown, TrendingUp } from "lucide-react";

type LeaderboardEntryProps = {
  record: Record;
};

const LeaderboardEntry : React.FC<LeaderboardEntryProps> = ({ record }) => {
  return (
    <div className="w-full flex px-4 py-2 gap-4">
      <Avatar>
        <AvatarImage src={record.user.profilePictureUrl} />
        <AvatarFallback>{record.user.name.slice(0,1)}</AvatarFallback>
      </Avatar>
      <div className="flex items-center w-1/2 gap-4">
        <span className="text-lg">{record.user.name}</span>
        <span className="text-sm">{record.wins} - {record.pushes} - {record.losses}</span>
      </div>
      <div className="flex items-center justify-between w-1/4 gap-4">
        <span className="text-lg">{record.amount >= 0 ? "+" : "-"}${Math.abs(record.amount)}</span>
        {
          record.amount > 0 ? <TrendingUp /> :
          record.amount < 0 ? <TrendingDown /> :
          <MoveRight />
        }
      </div>
    </div>
  )
}

export default LeaderboardEntry;