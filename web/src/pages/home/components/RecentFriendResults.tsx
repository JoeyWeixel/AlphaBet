import { ScrollArea } from "@/components/ui/scroll-area";
import { Bet } from "@/types/Bet";
import RecentFriendResult from "./RecentFriendResult";
import { Separator } from "@/components/ui/separator";
type RecentFriendResultsProps = {
  bets: Bet[];
};

const RecentFriendResults : React.FC<RecentFriendResultsProps> = ({ bets }) => {
  return (
    <ScrollArea className="min-w-[420px] border-2 border-primary-foreground w-5/12 rounded-sm h-90">
      <div className="flex justify-center text-lg py-2">Recent Results</div>
      <Separator className="w-11/12 mx-auto"/>
      {bets.map((bet) => (
        <div key={bet.id}>
          <RecentFriendResult bet={bet}/>
          <Separator className="w-11/12 py-0 mx-auto"/>
        </div>
      ))}
    </ScrollArea>
  )
}

export default RecentFriendResults;