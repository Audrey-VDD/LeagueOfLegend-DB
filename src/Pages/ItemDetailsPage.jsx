import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


const ItemDetailsPage = () => {
    const location = useLocation();

    const currentItem = location.state.item;
    console.log(location.state.item);



    return <>
        <Container className="d-flex flex-column align-items-center mt-4">
            <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/" + currentItem.image.full} alt="" />
            <div>
                <h1>{currentItem.name}</h1>
            </div>
            <div>
                <h3>{currentItem.plaintext}</h3>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3">
{/* Mettre une condition ternaire && pour que si l'into est undefined, on affiche sans le into */}
                {currentItem.into && currentItem.into.map((obj)=>{
                    return <img key={obj} src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+obj+".png"} alt="" />
                })}
                <h4>
                    
                </h4>
            </div>
        </Container >



    </>
}

export default ItemDetailsPage;