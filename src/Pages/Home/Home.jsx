import Banner from "./Banner";
import Offer from "./Offer";
import Service from "./Service";
import DeailyDeals from "./DeilyDeals/DeailyDeals";

const Home = () => {
  return (
    <div>
      <Banner />
      <Offer />
      <Service />
      <DeailyDeals />
    </div>
  );
};

export default Home;
