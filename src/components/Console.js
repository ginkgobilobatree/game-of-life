import React, { useState } from 'react';
import Field from './Field';
import ButtonField from './ButtonField'
import '../App.css';


export default function Console() {

    const [manyStates, setManyStates] = useState([]);

    
    return (
        <div className="console">
            <h1>Convay's Game of Life</h1>
            <hr/>
            <Field manyStates={manyStates} setManyStates={setManyStates}/>
            <hr />
            <ButtonField manyStates={manyStates} setManyStates={setManyStates}/>
        </div>
    );
}
