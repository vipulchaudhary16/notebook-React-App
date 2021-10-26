import React , {useContext , useEffect} from 'react'
import noteContext from '../context/Notes/noteContext'

function About() {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
         // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h1>This is about {a.state.name}</h1>
        </div>
    )
}

export default About
