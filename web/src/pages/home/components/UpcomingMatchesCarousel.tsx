import { 
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UpcomingMatchCard, { Match } from "./UpcomingMatchCard";

type UpcomingMatchesCarouselProps = {
  matches: Match[]
};

const UpcomingMatchesCarousel : React.FC<UpcomingMatchesCarouselProps> = ({ matches }) => {
  return (
    <Carousel>
      <CarouselContent>
        {matches.map((match) => (
          <CarouselItem key={match.awayTeam.name + match.homeTeam.name + match.league + match.date}>
            <UpcomingMatchCard match={match} />
          </CarouselItem>
        ))}
        <CarouselPrevious />
        <CarouselNext />
      </CarouselContent>
    </Carousel>
  );
}

export default UpcomingMatchesCarousel;