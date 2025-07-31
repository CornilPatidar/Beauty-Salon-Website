import styles from "./CarouselSection.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSection() {
  return (
    <section className={styles.carouselSection}>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              className={styles.carouselImage}
              src="/images/body-care.png"
              alt="Luxury Bridal Service"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className={styles.carouselImage}
              src="/images/body-care.png"
              alt="Skin Care Treatment"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className={styles.carouselImage}
              src="/images/body-care.png"
              alt="Hair Care Session"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
