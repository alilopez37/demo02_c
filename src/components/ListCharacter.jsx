import {useState, useEffect, useContext} from 'react'
import UserContext from '../context/UserContext'
import Character from './Character'

function ListCharacter() {
    const [characters, setCharacters] = useState([])
    const value = useContext(UserContext)

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then (reponse => reponse.json())
        .then (data => {
            setCharacters(data.results)
        })
    }, [])

    return (
        <>
            <h1>Lista de personajes</h1>
            {value.isLogged && characters && characters.map( character => (
                <Character 
                    key={character.id}
                    name={character.name} 
                    image = {character.image}
                />
            ))}
        </>
      );
}


export default ListCharacter;