import { useEffect, useState } from "react";
import ChampionServices from "../Services/ChampionServices";
import ChampionCard from "../Components/ChampionCard";
import { Form } from "react-bootstrap";


const HomePage = () => {
    const [champions, setChampions] = useState([]);
    const [searchChampion, setSearchChampion] = useState(null);
    const [filteredChampions, setFilteredChampions] = useState([]);

    const handleChange = (event) => {
        setSearchChampion(event.currentTarget.value);
    }

    const fetchChampions = async () => {
        try {
            const response = await ChampionServices.getAllChampions();
            // console.log(response.data.data);
            // setChampions(response.data.data);

            const res = Object.entries(response.data.data);
            res.sort((a, b)=>{
                console.log(a[1].name, b[1].name);
                return a[1].name.localeCompare(b[1].name); 
            })
            setChampions(res);
            setFilteredChampions(res);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchChampions();
    }, [])
    useEffect(() =>{
        setFilteredChampions(champions.filter((tata) =>{
            // return tata[1].name.toLowerCase().startsWith(searchChampion.toLowerCase());
            return tata[1].name.toLowerCase().includes(searchChampion.toLowerCase());
        }))
    }, [searchChampion])


    return <>

        <div className="d-flex justify-content-center mt-3">
            <Form className="col-4" >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rechercher</Form.Label>
                    <Form.Control type="text" placeholder="Garen" value={searchChampion} onChange={handleChange}  />
                </Form.Group>
            </Form>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-4 mt-4" >
            {filteredChampions.map((champion) => {
                return <ChampionCard championCard={champion[1]} key={champion[1].name}></ChampionCard>
            })}
        </div>



    </>;
}

export default HomePage;