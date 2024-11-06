import { useEffect, useState } from "react";
import SummonerServices from "../Services/SummonerServices"
import SummonerCard from "../Components/SummonerCard";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const SummonerPage = () => {
    const [summoners, setSummoners] = useState([]);

    const fetchSummoners = async () => {
        try {
            const response = await SummonerServices.getAllSummoner();
            console.log(Object.entries(response.data.data));
            setSummoners(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchSummoners()
    }, []);

    const navigate = useNavigate();
    const navigateTo = (genre) => {
        navigate("/genre/" + genre.id, { state: { "genre": genre } });
    }


    return <>
        <Container className="d-flex flex-column align-items-center mt-4">
            <div className='d-flex justify-content-center mt-3 mb-3'>
                <h1>SUMMONER</h1>
            </div>

            <div className='d-flex justify-content-center flex-wrap gap-3'>
                {Object.entries(summoners).map((summoner) => {
                    return <SummonerCard summonerCard={summoner[1]} key={summoner[0]} ></SummonerCard>
                })}
            </div>
        </Container>


    </>;
}

export default SummonerPage;