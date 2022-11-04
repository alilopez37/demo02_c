import {useState, useEffect} from 'react';
import Card from '../components/Card';
import '../assets/styles/Characters.css'
function Characters() {
    const [apiData, setApiData] = useState(null)

    useEffect(function() {
        fetch('https://rickandmortyapi.com/api/character')
        .then (response => response.json())
        .then ( data => setApiData(data))
        .catch ( err => console.log(err))
    },[])

    return (
        <div className="container_characters">
            {
               apiData && apiData.results.map( character => (
                    <Card 
                        key={character.id}
                        name={character.name}
                        image={character.image}
                    />
                ))    
            }
        </div>  
      ) 
}

export default Characters;