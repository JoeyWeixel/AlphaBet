import Header from "@/components/Header";
import React from "react";
import UpcomingMatchesCarousel from "./components/UpcomingMatchesCarousel";
import { Match } from "@/types/Match";
import RecentFriendResults from "./components/RecentFriendResults";
import { User } from "@/types/User";
import { Bet } from "@/types/Bet";
import { Record } from "@/types/Record";
import Leaderboard from "./components/Leaderboard";

// TEMPORARY VALUES
let matches : Match[] = [
  {
    homeTeam: {
      id: "0",
      name: "Ohio State Buckeyes",
      logo: "https://content.sportslogos.net/logos/33/791/full/ohio_state_buckeyes_logo_primary_20134642.png",
      shortName: "OSU",
      rank: 3,
    },
    awayTeam: {
      id: "1",
      name: "Iowa Hawkeyes",
      logo: "https://content.sportslogos.net/logos/32/712/full/iowa_hawkeyes_logo_primary_19797812.png",
      shortName: "IOWA",
    },
    league: "College Football",
    date: new Date(2024, 9, 5, 15, 30),
    location: "Ohio Stadium, Columbus, OH",
    odds: {
      homeTeamMoneyLine: 800,
      awayTeamMoneyLine: -1400,
      homeTeamSpread: 20.5,
      awayTeamSpread: -20.5,
    },
    id: "0",
  },
  {
    homeTeam: {
      id: "2",
      name: "Washington Commanders",
      logo: "https://content.sportslogos.net/logos/7/6832/full/washington_commanders_logo_primary_20228587.png",
      shortName: "WAS",
    },
    awayTeam: {
      id: "3",
      name: "Cleveland Browns",
      logo: "https://content.sportslogos.net/logos/7/155/full/cleveland_browns_logo_primary_2024_sportslogosnet-6696.png",
      shortName: "CLE",
    },
    league: "NFL",
    date: new Date(2024, 9, 6, 13, 0),
    location: "Northwest Stadium, Landover, MD",
    odds: {
      homeTeamMoneyLine: 151,
      awayTeamMoneyLine: -180,
      homeTeamSpread: -3.5,
      awayTeamSpread: 3.5,
    },
    id: "1",
  },
  {
    homeTeam: {
      id: "4",
      name: "Oregon Ducks",
      logo: "https://content.sportslogos.net/logos/33/797/full/by8dfvb6j89hs5nrvlb1ibx5e.png",
      shortName: "ORE",
      rank: 6
    },
    awayTeam: {
      id: "0",
      name: "Ohio State",
      logo: "https://content.sportslogos.net/logos/33/791/full/ohio_state_buckeyes_logo_primary_20134642.png",
      shortName: "OSU",
      rank: 3,
    },
    league: "NCAA",
    date: new Date(2024, 9, 12, 19, 30),
    location: "Autzen Stadium, Eugene, Oregon",
    odds: {
      homeTeamMoneyLine: 114,
      awayTeamMoneyLine: -137,
      homeTeamSpread: 2.5,
      awayTeamSpread: -2.5,
    },
    id: "2",
  },
];

let users: User[] = [ 
  {
    id: "0",
    name: "Joey Weixel",
    username: "jweixel",
    email: "joeyweixel@gmail.com",
    profilePictureUrl: "",
  },
  {
    id: "1",
    name: "Sam Settel",
    username: "ssettel",
    email: "samsettel@gmail.com",
    profilePictureUrl: "",
  }
];

let bets : Bet[] = [
  {
    id: "0",
    user: users[0],
    match: matches[0],
    type: "spread",
    status: "won",
    team: matches[0].homeTeam,
  },
  {
    id: "1",
    user: users[1],
    match: matches[1],
    type: "moneyline",
    status: "lost",
    team: matches[1].awayTeam,
  },
  {
    id: "2",
    user: users[0],
    match: matches[2],
    type: "spread",
    status: "lost",
    team: matches[2].awayTeam,
  }
]

const records : Record[] = [
  {
    user: users[0],
    wins: 3,
    losses: 2,
    pushes: 0,
    amount: 100,
    type: "Daily",
  },
  {
    user: users[0],
    wins: 5,
    losses: 6,
    pushes: 1,
    amount: -10,
    type: "Weekly",
  },
  {
    user: users[0],
    wins: 10,
    losses: 6,
    pushes: 2,
    amount: 50,
    type: "Monthly",
  },
  {
    user: users[1],
    wins: 1,
    losses: 1,
    pushes: 1,
    amount: 0,
    type: "Daily",
  },
  {
    user: users[1],
    wins: 3,
    losses: 7,
    pushes: 1,
    amount: -50,
    type: "Weekly",
  },
  {
    user: users[1],
    wins: 15,
    losses: 10,
    pushes: 1,
    amount: 20,
    type: "Monthly",
  }
]

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-y-4 items-center flex-wrap">
      <Header />
      <span className="self-center my-4 text-xl">Upcoming Matches</span>
      <UpcomingMatchesCarousel matches={matches} />
      <div className="w-full flex justify-around">
        <RecentFriendResults bets={bets} />
        <Leaderboard records={records} />
      </div>
    </div>
  );
}

export default Home;