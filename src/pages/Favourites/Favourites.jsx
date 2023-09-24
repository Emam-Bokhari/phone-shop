import { useEffect, useState } from "react";
import Favourite from './../Favourite/Favourite';

const Favourites = () => {

    const [favourite, setFavourite] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow,setIsShow]=useState(false)
    const [totalPrice,setTotalPrice]=useState(0)

    useEffect(() => {
        const favouriteItems = JSON.parse(localStorage.getItem("favourites"))
        if (favouriteItems) {
            setFavourite(favouriteItems);
            const total=favouriteItems.reduce((preValue,currentValue)=>preValue+currentValue.price,0)
            setTotalPrice(total)
            console.log(total)
        }
        else {
            setNoFound('No Data Found')
        }
    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setFavourite([])
        setNoFound('No Data Found')
    }

    return (
        <div className="my-10">

            <div>
                {
                    noFound ? <p className="flex justify-center items-center h-[50vh] text-base">{noFound}</p>
                        :

                        <div>

                       

                            {favourite.length > 0 && <button onClick={handleRemove} className="bg-indigo-300 px-3 py-1 rounded-md ">
                                Remove All
                            </button>}

                            <div>
                            <p>Total Price{totalPrice}</p>
                        </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                               {
                                isShow ?  
                                    favourite?.map((item) => (<Favourite key={item.id}  data={item} />))
                                

                                 :
                                
                                    favourite.slice(0,2)?.map((item) => (<Favourite key={item.id} data={item} />))
                                

                               }
                            </div>

                            {favourite.length>2&&<button onClick={()=>setIsShow(!isShow)} className="bg-indigo-300 px-3 py-1 rounded-md my-10">
                                {isShow ? 'See Less' : 'See More'}
                            </button>}

                        </div>


                }
            </div>



        </div>
    );
};

export default Favourites;