import { useState } from "react";
import { useParams } from "react-router-dom";


const ChampionDetailsPage = () => {
    const {id} = useParams();
    const [champion, setChampion] = useState({})


    return <>
    <h1>Détails champion</h1>
    </>;
}
 
export default ChampionDetailsPage;