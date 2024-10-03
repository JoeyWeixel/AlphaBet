import { 
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UpcomingMatchCard from "./UpcomingMatchCard";
import { Match } from "@/types/Match";

type UpcomingMatchesCarouselProps = {
  matches: Match[]
};

const UpcomingMatchesCarousel : React.FC<UpcomingMatchesCarouselProps> = ({ matches }) => {
  return (
    <Carousel className="w-3/4 mx-auto"
      opts={{
      }}
    >
      <CarouselContent>
        {matches.map((match) => (
          <CarouselItem 
            key={match.awayTeam.name + match.homeTeam.name + match.league + match.date}
            className="basis-1/2 min-w-[330px] max-w-[500px]"
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