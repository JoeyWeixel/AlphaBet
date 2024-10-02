import { ScrollArea } from "@/components/ui/scroll-area";
import { Bet } from "@/types/Bet";
import RecentFriendResult from "./RecentFriendResult";
import { Separator } from "@/components/ui/separator";
type RecentFriendResultsProps = {
  bets: Bet[];
};

const RecentFriendResults : React.FC<RecentFriendResultsProps> = ({ bets }) => {
  return (
    <ScrollArea className="border-2 border-primary-foreground w-5/12 rounded-sm h-90">
      <div className="flex justify-center text-lg py-2" key="Title">Recent Results</div>
      <Separator className="w-11/12 mx-auto" key="TitleSeparator"/>
      {bets.map((bet) => (
        <>
          <RecentFriendResult bet={bet} key={bet.id} />
          <Separator className="w-11/12 py-0 mx-auto" key={bet.id + "separator"}/>
        </>
      ))}
    </ScrollArea>
  )
}

export default RecentFriendResults;