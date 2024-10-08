import axios from "axios";

function getAllChampions (){
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/champion.json")
}
function getChampionByName (id){
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/champion/"+id+".json")
}
export default {
    getAllChampions, getChampionByName
}