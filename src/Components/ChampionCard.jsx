import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ChampionCard = ({ championCard }) => {

    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate("/champion/" + id);
    }

    return <>
        <div className='col-2 d-flex justify-content-center' >
            <Card className='card' border="danger" style={{ width: '12rem' }} onClick={() => {navigateTo(championCard.id)}}>
                <Card.Header >{championCard.name}</Card.Header>
                <Card.Body>
                    <Card.Text>{championCard.title}</Card.Text>
                    <Card.Img variant="top" style={{ width: '10rem' }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + championCard.id + "_0.jpg"} />
                </Card.Body>
            </Card>
        </div>
    </>;
}

export default ChampionCard;