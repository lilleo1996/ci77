import {useState} from 'react';
import axios from 'axios';

import './style.css';

const Pokemons = () => {
	const [pokemons, setPokemons] = useState([]);

    // Fetch: Promise then catch
    // const handleFetchPokemon = () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon')
    //         .then(response => response.json())
    //         .then(data => setPokemons(data.results))
    // }

    // Fetch: async await
    // const handleFetchPokemon = async () => {
    //     const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    //     const data = await response.json();
    //     setPokemons(data.results)
    // }

    // Axios: then catch
     const handleFetchPokemon = () => {   
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(function (response) {
                setPokemons(response.data.results)
            })
            .catch(function (error) {
                // handle error
            })
    }
	
	return (
		<div className='pokemons'>
			<button onClick={handleFetchPokemon}>Fetch Pokemon</button>
			<ul>
				{pokemons.map(pokemon => {
					return <li key={pokemon.url}>{pokemon.name}</li>
				})}
			</ul>
		</div>
	)
}

export default Pokemons;