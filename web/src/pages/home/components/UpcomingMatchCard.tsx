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
    <Card>
      <CardHeader>
        <CardTitle>{dayNames[match.date.getDay()] + ", " + match.date.getMonth() + "/" + match.date.getDate() + "/" + match.date.getFullYear()}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row justify-around items-start">
        <TeamIcon team={awayTeam} />
        <span>vs.</span>
        <TeamIcon team={homeTeam} />
        <span>{match.location}</span>
      </CardContent>
      <CardFooter className="flex flex-col">
        <span>Spread: {homeTeam.shortName} {match.odds.homeTeamSpread}, {awayTeam.shortName} {match.odds.awayTeamSpread}</span>
        <span>ML: {homeTeam.shortName} {match.odds.homeTeamMoneyLine}, {awayTeam.shortName} {match.odds.awayTeamMoneyLine}</span>
      </CardFooter>
    </Card>
  );
}

export default UpcomingMatchCard;