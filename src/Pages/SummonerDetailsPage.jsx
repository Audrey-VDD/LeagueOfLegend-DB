import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

const SummonerDetailsPage = () => {
    const location = useLocation();
    const currentSummoner = location.state.item
    console.log(location.state.item);

    return <>
        <Container className="d-flex flex-column align-items-center mt-4">
            <div className="d-flex justify-content-center mt-3" >
                <h1>{currentSummoner.name}</h1>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <img variant="top" style={{ width: '5rem' }} src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/" + currentSummoner.image.full} alt="" />
            </div>
            <div className='d-flex flex-wrap justify-content-center mt-4 col-6' >
                <h3>{currentSummoner.description}</h3>
            </div>
        </Container>
    </>;
}

export default SummonerDetailsPage;