import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard/PhoneCard";

const Phone = () => {

    const [phone, setPhone] = useState({})

    const { id } = useParams()
    // console.log(id)
    const phones = useLoaderData()
    // console.log(phones)

    useEffect(() => {
        const findPhone = phones?.find(item => item.id === id)
        setPhone(findPhone)
    }, [id, phones])
    // console.log(phone);


    return (
        <div className="my-10">
            <PhoneCard phone={phone} />
        </div>
    );
};

export default Phone;