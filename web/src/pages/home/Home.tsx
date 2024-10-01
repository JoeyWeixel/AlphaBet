import Header from "@/components/Header";
import React from "react";
import UpcomingMatchesCarousel from "./components/UpcomingMatchesCarousel";
import { Match } from "./components/UpcomingMatchCard";

// TEMPORARY VALUES
let matches : Match[] = [
  {
    homeTeam: {
      name: "Ohio State Buckeyes",
      logo: "https://content.sportslogos.net/logos/33/791/full/ohio_state_buckeyes_logo_primary_20134642.png",
      shortName: "OSU",
      rank: 3,
    },
    awayTeam: {
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
  },
  {
    homeTeam: {
      name: "Washington Commanders",
      logo: "https://content.sportslogos.net/logos/7/6832/full/washington_commanders_logo_primary_20228587.png",
      shortName: "WAS",
    },
    awayTeam: {
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
  },
  {
    homeTeam: {
      name: "Oregon Ducks",
      logo: "https://content.sportslogos.net/logos/33/797/full/by8dfvb6j89hs5nrvlb1ibx5e.png",
      shortName: "ORE",
      rank: 3
    },
    awayTeam: {
      name: "Ohio State",
      logo: "https://content.sportslogos.net/logos/33/791/full/ohio_state_buckeyes_logo_primary_20134642.png",
      shortName: "OSU",
      rank: 6,
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
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <UpcomingMatchesCarousel matches={matches} />
    </div>
  );
}

export default Home;