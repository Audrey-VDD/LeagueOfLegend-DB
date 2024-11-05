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
            console.log(response.data.data[id]);
            setChampions(response.data.data[id]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchChampionByName();
    }, [])


    return <Container className="d-flex flex-column align-items-center mt-4 mb-4">
        <h1>{champions.name}</h1>
        <p>{champions.title}</p>
        <p>{champions.tags && champions.tags.map((tag) => {
            return <p>{tag}</p>
        })}</p>
        <p>{champions.lore}</p>
        <div className="d-flex flex-column align-items-center mt-4 mb-4">
            <img src={'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champions.name + '_0.jpg'} alt="picture-champion" />

            <div className="mt-5 col-5" >
                <div className="fs-6" >
                    {champions.spells && champions.spells.map((spell) => {
                        return <p>{spell.name} {spell.description}</p>
                    })}
                </div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-4 mb-4">
            <h2>Conseil pour les alliés</h2>
            <ul>
                {/* Le temps que tu ne trouves pas l'info, tu ne fais rien, comme ça, pas d'écran noir */}
                {champions.allytips && champions.allytips.map((tip) => {
                    return <li>{tip}</li>
                })}
            </ul>

            <h2>Conseil pour les ennemis</h2>
            <ul>
                {/* Le temps que tu ne trouves pas l'info, tu ne fais rien, comme ça, pas d'écran noir */}
                {champions.enemytips && champions.enemytips.map((tip) => {
                    // pour ne plus affichier le message d'erreur et éviter les pb de lenteur
                    return <li key={tip}>{tip}</li>
                })}
            </ul>
        </div>
        <div className="d-flex flex-column align-items-center mt-4 mb-4">
            <h2>Infos</h2>
            <ul>
                <li>Attaque : {champions.info && champions.info.attack}</li>
                <li>Défense : {champions.info && champions.info.defense}</li>
                <li>Difficulty : {champions.info && champions.info.difficulty}</li>
                <li>Magie : {champions.info && champions.info.magic}</li>
            </ul>
        </div>

        <div className="d-flex flex-column align-items-center mt-4 mb-4">
            <h2>Passif :</h2>
            {champions.passive && <div>
                <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive/" + champions.passive.image.full} alt="imagePouvoirPassif" />
            </div>}
            <div className="d-flex flex-column align-items-center mt-4 mb-4" >
                {champions.stats && Object.entries(champions.stats).map((key) => {
                    return <span>{key[0]} => {key[1]}</span>
                })}
            </div>
        </div>

    </Container>;
}

export default ChampionDetailsPage;