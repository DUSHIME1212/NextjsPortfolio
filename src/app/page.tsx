import Link from "next/link";
import LandingComponent from "~/app/_components/LandingComponent";
import FavoriteTools from "~/app/_components/FavoriteTools";
import WorkingSteps from "~/app/_components/WorkingSteps";
import Testimonials from "~/app/_components/Testimonials";
import Footer from "~/app/_components/Footer";

export default function HomePage() {
  return (
      <div className={'min-h-screen flex flex-col mb-16 items-center justify-center'}>
          <LandingComponent/>
          <FavoriteTools/>
          <WorkingSteps/>
          <Testimonials/>
          <Footer/>
      </div>
  );
}
