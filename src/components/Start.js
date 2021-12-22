import React, { useEffect } from 'react';


export default function Start({manyStates, setManyStates}) { 
    
    const interval = () => {
            setInterval(() => {
                setManyStates(['bla']) 
            }, 1000);
            
        }
    
    const start = () => {
        interval();        
    }

    useEffect(() => {
        console.log('aljskdf');
    }, [manyStates])

    return (
        <button onClick={start}>Start</button>
    );
}
