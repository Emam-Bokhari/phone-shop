import PhonesCard from "../PhonesCard/PhonesCard";
import PropTypes from "prop-types"

const PhonesCollection = ({ phonesData }) => {

    return (
        <div className="my-10">
            <div>
                <h2 className="text-center text-2xl font-semibold">Our Phone Collection</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {phonesData?.map((item,index) => <PhonesCard key={index} data={item} />)}
            </div>
        </div>
    );
};

PhonesCollection.propTypes={
    phonesData:PropTypes.array.isRequired
}

export default PhonesCollection;