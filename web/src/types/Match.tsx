import { Team } from './Team';
export type Match = {
  id: string;
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