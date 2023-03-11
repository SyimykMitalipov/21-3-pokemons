import axios from "axios"

const baseURL = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async(limit, offset) => {
    try {
        const { data } = await axios.get(baseURL + `pokemon?limit=${limit}&offset=${offset}`)
        return data;
    }catch(error) {
        console.log(error);
    }

}


export const getPokemon = async(id) => {
 try {
    const { data } = await axios.get(baseURL + `pokemon/${id}`);
    return data;
 } catch (error) {
    console.log(error);
 }
}