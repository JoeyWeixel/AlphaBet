import { Match } from "./Match";
import { Team } from "./Team";
import { User } from "./User";

export type Bet = {
  id: string;
  user: User;
  match: Match;
  type: "moneyline" | "spread";
  status: "pending" | "won" | "lost" | "push";
  team: Team;
}