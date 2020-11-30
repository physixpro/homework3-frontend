import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Home () {

    useEffect( () => {
        const fetchAthletes = async () => {
            const res = await axios.get('http://localhost:3001/')
            const athletes = res.data;
            setAthletes(athletes);
            console.log(res);
        };
     
        fetchAthletes();
    },[])

    

    const[athletes,setAthletes]=useState([])

    return(
        <div>
    <h1>Home</h1>

    {
        athletes.map(athlete => (
            <ul>
                <li>{athlete.name}</li>
                <li>{athlete.description}</li>
                <li>{athlete.country}</li>
            </ul>
        ))
    }
        </div>
    )
}

export default Home;