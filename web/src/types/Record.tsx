import { User } from "./User"

export type Record = {
  user: User;
  wins: number;
  losses: number;
  pushes: number;
  type: "Daily" | "Weekly" | "Monthly";
  amount: number;
}