import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import desertArt from "../../assets/desert-banner.jpg";
import SliderContent from "../SliderContent/SliderContent";
import { Fade } from "react-awesome-reveal";

// left-4 right-5 lg:left-40 2xl:left-80

const HeroSliders = () => {
  return (
    <section className="h-screen relative">
      {/* main slider */}
      <swiper-container
        class="mySwiper"
        thumbs-swiper=".mySwiper2"
        effect="fade"
        centered-slides="true"
        autoplay-delay="4000"
        autoplay-disable-on-interaction="false"
      >
        <swiper-slide>
          <img src={slider1} />
          <SliderContent
            title="Discover the Rich Heritage of the Middle East"
            desc="Journey through ancient civilizations, explore magnificent archaeological sites, and marvel at the architectural wonders of the
            Middle East. From the majestic pyramids of Egypt to the stunning Petra
            in Jordan, uncover the timeless treasures that tell the story of this
            culturally diverse region."
          />
        </swiper-slide>
        <swiper-slide>
          <img src={slider2} />
          <SliderContent
            title="Experience the Natural Beauty of the Middle East"
            desc="Lose yourself in the breathtaking landscapes of the Middle East, where rugged mountains, vast deserts, and pristine coastlines await. Discover hidden oases, hike through picturesque valleys, and soak in the tranquility of shimmering seas."
          />
        </swiper-slide>
        <swiper-slide>
          <img src={slider3} />
          <SliderContent
            title="Embark on an Adventure in the Middle East"
            desc="From camel treks across the Sahara to exhilarating scuba diving in the Red Sea, the Middle East offers a plethora of adrenaline-pumping adventures. Dive into the depths of ancient history with a hot air balloon ride over Luxor or soar above the desert dunes on a thrilling sandboarding excursion"
          />
        </swiper-slide>
        <swiper-slide>
          <img src={desertArt} />
          <SliderContent
            title="Explore the Hidden Gems of the Middle East"
            desc="Venture off the beaten path and discover the lesser-known wonders of the Middle East. From hidden villages nestled in lush valleys to secluded beaches with crystal-clear waters, these hidden gems promise unforgettable experiences"
          />
        </swiper-slide>
      </swiper-container>

      {/* thumbs slider */}
      <swiper-container
        class="mySwiper2"
        space-between="15"
        slides-per-view="4"
      >
        <swiper-slide>
          <img src={slider1} />
        </swiper-slide>
        <swiper-slide>
          <img src={slider2} />
        </swiper-slide>
        <swiper-slide>
          <img src={slider3} />
        </swiper-slide>
        <swiper-slide>
          <img src={desertArt} />
        </swiper-slide>
      </swiper-container>
    </section>
  );
};

export default HeroSliders;
