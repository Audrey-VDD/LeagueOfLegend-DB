import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemServices from "../Services/ItemServices";
import { Container } from "react-bootstrap";
import ItemCard from "../Components/ItemCard";
import Form from 'react-bootstrap/Form';

const itemPage = () => {
    const [items, setItems] = useState([]);
    // Définie un état pour la barre de recherche et null parce que quand on arrive, on ne veut pas qu'il y ait déjà quelque chose dans la barre de recherche
    const [searchValue, setSearchValue] = useState(null);
    // Ma variable clône qui aura les items filtrés
    const [filteredItems, setFilteredItems] = useState([]);

    // Fonction qui met à jour 
    const handleChange = (event) => {
        // On fait un changement et on veut que ça change dans notre API donc useEffect
        setSearchValue(event.currentTarget.value);

    }

    const fetchItems = async () => {
        try {
            const response = await ItemServices.getAllItems();
            // Fonction qui s'appelle "sort" pour mettre les résultats par ordre alphabétique
            // Comme on a un objet json avec un tableau d'objet, ce sera un peu différent, a = premier objet et b c'est l'objet +1
            // console.log(response.data.data);
            // On doit transformer notre objet en tableau avec object.entries: 
            const toto = Object.entries(response.data.data);
            toto.sort((a, b) => {
                // console.log(a[1].name, b[1].name); 
                // Maintenant qu'on récupère bien les noms, on met un return pour mettre la fonction localeCompare créée par Javascript  
                return a[1].name.localeCompare(b[1].name);
            });
            // response.data.data.sort((a, b) => a.name.localCompare(b.name))
            setItems(toto);
            setFilteredItems(toto);
        } catch (error) {
            console.log(error);
        }
    }
    // J'appelle la fonction seulement quand je suis sur ma page
    useEffect(() => {
        fetchItems();
    }, [])

    // Faire que le changement se fasse sur nos données, on utilise la fonction .filter déjà existant
    useEffect(() => {
        // on met bien setFilteredItems pour set notre variable tempon le filtre
        setFilteredItems(items.filter((item) => {
            // fonction qui permet de vérifier qu'une chaine de caractères existe dans une chaîne de caractères : includes
            // toLowerCase pour que les majuscules ne comptent plus
            // return item[1].name.toLowerCase().includes(searchValue.toLowerCase());
            // Si on veut les items qui commencent par 
            return item[1].name.toLowerCase().startsWith(searchValue.toLowerCase());
            // On réceptionne un tableau et un filtre se fait, mais il faut réinitialiser le filtre avec une variable tempon
            // variable tempon avec items qu'on ne trouve pas et une variable qui stocke nos items filtrés et qui seront modifiés
            // Le parent, on le set et on y touche plus et on fait un clône, un enfant  
        }))
    }, [searchValue])

    return <>

        <div className="d-flex justify-content-center">
            <h1>ITEMS</h1>
        </div>
        <div className="d-flex justify-content-center">
            <Form className="col-4" >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rechercher</Form.Label>
                    {/* On lui dit que sa valeur prenne le searchValue et que quand on écrit, il y a un changement */}
                    <Form.Control type="text" placeholder="Bottes" value={searchValue} onChange={handleChange} />
                </Form.Group>
            </Form>
        </div>


        <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
            {filteredItems.map((item) => {
                return <ItemCard itemCard={item[1]} key={item[0]}></ItemCard>
            })}
        </div >

    </>
}

export default itemPage;