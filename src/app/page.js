import ApartmentType from "./home/ApartmentType";
import FeaturedListing from "./home/FeaturedListing";
import HeroSection from "./home/HeroSection";
import PropertiesCities from "./home/PropertiesCities";
import Section3 from "./home/Section3";
import SellingOption from "./home/SellingOption";


export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ApartmentType></ApartmentType>
      <Section3></Section3>
      <FeaturedListing></FeaturedListing>
      <PropertiesCities></PropertiesCities>
      <SellingOption></SellingOption>
    </>
  );
}
