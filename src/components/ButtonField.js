import React from 'react'
import Start from './Start';
import Stop from './Stop';


export default function ButtonField({manyStates, setManyStates}) {

    return (
        <div>
            <Start manyStates={manyStates} setManyStates={setManyStates}/>
            <Stop />
        </div>
    );
}
