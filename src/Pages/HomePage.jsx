import { useEffect, useState } from "react";
import ChampionServices from "../Services/ChampionServices";
import ChampionCard from "../Components/ChampionCard";


const HomePage = () => {
    const [champions, setChampions] = useState([]);


    const fetchChampions = async () => {
        try {
            const response = await ChampionServices.getAllChampions();
            setChampions(response.data.data);
            console.log(response.data.data);


        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchChampions();
    }, [])

    return <>

        <div className="d-flex justify-content-center flex-wrap gap-4 mt-4" >
            {Object.entries(champions).map((champion) => {
                console.log(champion);
                return <ChampionCard championCard={champion[1]} key={champion[1].name}></ChampionCard>   
            })}
        </div>



    </>;
}

export default HomePage;