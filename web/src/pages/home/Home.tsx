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