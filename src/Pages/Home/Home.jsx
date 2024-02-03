import Banner from "./Banner";
import Offer from "./Offer";
import Service from "./Service";
import DeailyDeals from "./DeilyDeals/DeailyDeals";
import Instagram from "./Instagram";
import UserReview from "./UserReview";
import Brand from "./Brand";

const Home = () => {
  return (
    <div>
      <Banner />
      <Offer />
      <Service />
      <DeailyDeals />
      <UserReview />
      <Brand />
      <Instagram />
    </div>
  );
};

export default Home;
