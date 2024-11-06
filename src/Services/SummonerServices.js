import axios from "axios";

function getAllSummoner() {
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.22.1/data/fr_FR/summoner.json")
}
export default {
    getAllSummoner
}