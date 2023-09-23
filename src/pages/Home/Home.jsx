import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import PhonesCollection from './../../components/PhonesCollection/PhonesCollection';

const Home = () => {
    const phonesData=useLoaderData()
    return (
        <div className="my-10">
            <Banner/>
            <PhonesCollection phonesData={phonesData} />
        </div>
    );
};

export default Home;