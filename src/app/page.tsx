import LandingComponent from "~/app/_components/LandingComponent";
import FavoriteTools from "~/app/_components/FavoriteTools";
import WorkingSteps from "~/app/_components/WorkingSteps";
import Testimonials from "~/app/_components/Testimonials";
import Footer from "~/app/_components/Footer";
import PricingComponent from "~/app/_components/PricingComponent";
import UserProfile from "~/app/_components/UserProfile";

export default function HomePage() {
  return (
      <div className={'min-h-screen scroll-auto snap-center scroll-m-2 flex flex-col mb-16 items-center justify-center'}>
          <div>
              <LandingComponent/>
          </div>
          <div id={'tools'}>
              <FavoriteTools/>
          </div>
          <div id={'skills'}>
              <WorkingSteps/>
          </div>
          <div id={'testimonial'}>
              <Testimonials/>
          </div>
          <div id={'pricing'}>
              <PricingComponent/>
          </div>
          <div id={'about'}>
              <UserProfile/>
          </div>
          <div id={'footer'} className={'w-full'}>
              <Footer/>
          </div>
      </div>
  );
}
