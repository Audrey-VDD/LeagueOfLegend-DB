import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChampionServices from "../Services/ChampionServices";
import { Container } from "react-bootstrap";


const ChampionDetailsPage = () => {
    const { id } = useParams();
    const [champions, setChampions] = useState([]);
    const fetchChampionByName = async () => {
        try {
            const response = await ChampionServices.getChampionByName(id);
            console.log(response);
            console.log(Object.entries(response.data.data));
            console.log(Object.entries(response.data.data)[0]);
            console.log(Object.entries(response.data.data)[0][1]);
            setChampions(Object.entries(response.data.data)[0][1]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchChampionByName();
    }, [])


    return <Container className="d-flex flex-column align-items-center">
        <h1>{champions.name}</h1>
        <p>{champions.title}</p>
        <p>{champions.lore}</p>
        <div>
            <img src={'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champions.name + '_0.jpg'} alt="picture-champion" />
        </div>

    </Container>;
}

export default ChampionDetailsPage;