import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import LeaderboardEntry from "./LeaderboardEntry"
import { Record } from "@/types/Record";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type LeaderboardProps = {
  records: Record[];
};

const Leaderboard : React.FC<LeaderboardProps> = ({ records }) => {
  return (
    <ScrollArea className="min-w-[420px] border-2 border-primary-foreground w-5/12 rounded-sm h-90">
      <div className="flex justify-center text-lg py-2" >Leaderboards</div>
      <Separator className="w-11/12 mx-auto"/>
      <Tabs defaultValue="daily" className="py-2">
        <TabsList className="flex w-56 justify-around mx-auto">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
        {records
          .filter((record) => record.type === "Daily")
          .sort((a, b) => b.amount - a.amount)
          .map((record) => (
            <div key={record.user.id}>
              <LeaderboardEntry record={record} />
              <Separator className="w-11/12 mx-auto"/>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="weekly">
          {records
            .filter((record) => record.type === "Weekly")
            .sort((a, b) => b.amount - a.amount)
            .map((record) => (
              <div key={record.user.id}>
                <LeaderboardEntry record={record} />
                <Separator className="w-11/12 mx-auto"/>
              </div>
            ))}
        </TabsContent>
        <TabsContent value="monthly">
          {records
            .filter((record) => record.type === "Monthly")
            .sort((a, b) => b.amount - a.amount)
            .map((record) => (
              <div key={record.user.id}>
                <LeaderboardEntry record={record} />
                <Separator className="w-11/12 mx-auto"/>
              </div>
            ))}
        </TabsContent>
      </Tabs>
    </ScrollArea>
  )
}

export default Leaderboard;
