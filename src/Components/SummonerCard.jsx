import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SummonerCard = ({ summonerCard }) => {
    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate("/summoner/" + id, {state : {item : summonerCard}});
    }
    


    return <>
        <div className='col-1 d-flex justify-content-center'>
            <Card className='card' border="danger" style={{ width: '12rem' }} onClick={() => { navigateTo(summonerCard.id) }}>
                <Card.Header >{summonerCard.name}</Card.Header>
                <Card.Body>
                    <div className='d-flex justify-content-center mt-4'>
                        <Card.Img variant="top" style={{ width: '5rem' }} src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/" + summonerCard.image.full} />
                    </div>
                    <div>
                        {summonerCard.id}
                    </div>
                </Card.Body>
            </Card>
        </div>

    </>;
}

export default SummonerCard;