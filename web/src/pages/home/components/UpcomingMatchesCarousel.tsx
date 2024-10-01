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
    <Carousel className="w-5/6 mx-auto mt-8"
      opts={{
      }}
    >
      <CarouselContent>
        {matches.map((match) => (
          <CarouselItem 
            key={match.awayTeam.name + match.homeTeam.name + match.league + match.date}
            className="basis-1/2"
          >
            <UpcomingMatchCard match={match} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default UpcomingMatchesCarousel;