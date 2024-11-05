import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemServices from "../Services/ItemServices";
import { Container } from "react-bootstrap";
import ItemCard from "../Components/ItemCard";

const itemPage = () => {
    const [items, setItems] = useState({});

    const fetchItems = async () => {
        try {
            const response = await ItemServices.getAllItems();
            console.log(response.data.data);
            setItems(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
// J'appelle la fonction seulement quand je suis sur ma page
    useEffect(() => {
        fetchItems();
    }, [])

    return <>

        <div className="d-flex justify-content-center">
            <h1>ITEMS</h1>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
            {Object.entries(items).map((item) => {
                return <ItemCard itemCard={item[1]} key={item[0]}></ItemCard>
            })}
        </div >

    </>
}

export default itemPage;