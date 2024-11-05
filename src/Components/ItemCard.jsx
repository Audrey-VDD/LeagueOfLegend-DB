import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


// Je l'appelle en props itemCard
const ItemCard = ({ itemCard }) => {
    const navigate = useNavigate();
    const navigateTo = (name) => {
// Dans mon json (itemCard = objet avec toutes les infos), location.state.item (dans le log, on a bien un objet et dans l'objet les infos)
        navigate("/item/"+name, {state : {item : itemCard}});
    }
    console.log(itemCard);
    
    return <>
        <div className='col-2 d-flex justify-content-center'>
            <Card className='card' border="danger" style={{width:'12rem'}} onClick={() => {navigateTo(itemCard.name)}}>
                <Card.Header >{itemCard.name}</Card.Header>
                <Card.Body>
                    <div   className='d-flex justify-content-center'>
                    <Card.Text>{itemCard.plaintext}</Card.Text>
                    </div>
                    <div  className='d-flex justify-content-center mt-4'>
                    <Card.Img variant="top" style={{ width: '5rem' }} src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/" + itemCard.image.full} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>
};

export default ItemCard;