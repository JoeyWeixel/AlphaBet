import { 
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle, 
} from "@/components/ui/card";
import React from "react";
import TeamIcon from "./TeamIcon";

export type Match = {
  date: Date;
  homeTeam: Team;
  awayTeam: Team;
  league: string;
  location: string;
  odds: {
    homeTeamMoneyLine: number;
    awayTeamMoneyLine: number;
    homeTeamSpread: number;
    awayTeamSpread: number;
  };

};

export type Team = {
  name: string;
  shortName: string;
  logo: string;
  rank?: number;
};

type UpcomingMatchCardProps = {
  match: Match
};


const UpcomingMatchCard : React.FC<UpcomingMatchCardProps> = ({ match }) => {
  let homeTeam = match.homeTeam;
  let awayTeam = match.awayTeam;
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <Card className="lg:h-48 flex flex-col justify-between">
      <CardHeader className="py-2">
        <CardTitle className="text-sm text-end">{dayNames[match.date.getDay()] + ", " + match.date.getMonth() + "/" + match.date.getDate() + "/" + match.date.getFullYear()}</CardTitle>
      </CardHeader>
      <CardContent className="h-1/2 flex pb-2">
        <div className="w-2/3 flex flex-row justify-around items-start">
          <TeamIcon team={awayTeam} />
          <span className="pt-6">vs.</span>
          <TeamIcon team={homeTeam} />
        </div>
        <span className="text-center text-balance place-self-center">{match.location}</span>
      </CardContent>
      <CardFooter className="flex justify-between py-2">
        <span className="">
          Spread: {homeTeam.shortName + " "} 
          {match.odds.homeTeamSpread >= 0 ? "+" + match.odds.homeTeamSpread : match.odds.homeTeamSpread}, 
          {" " + awayTeam.shortName + " "} 
          {match.odds.awayTeamSpread >= 0 ? "+" + match.odds.awayTeamSpread : match.odds.awayTeamSpread}
        </span>
        <span>
          ML: {homeTeam.shortName + " "} 
          {match.odds.homeTeamMoneyLine >= 0 ? "+" + match.odds.homeTeamMoneyLine : match.odds.homeTeamMoneyLine}, 
          {" " + awayTeam.shortName + " "} 
          {match.odds.awayTeamMoneyLine >= 0 ? "+" + match.odds.awayTeamMoneyLine : match.odds.awayTeamMoneyLine}
        </span>
      </CardFooter>
    </Card>
  );
}

export default UpcomingMatchCard;