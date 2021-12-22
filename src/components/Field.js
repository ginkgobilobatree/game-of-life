import React/* , { useEffect } */ from 'react';


export default function Field(props) {

    // const [manyStates, setManyStates] = useState([]) 

    const rows = 90; //max 180
    const columns = 50; //max 100
     
   

    const changeAmbivalence = (e) => {
        
        const myStates = [...props.manyStates];

        if (myStates.includes(e.target.dataset.coordinates)) {
            e.target.className = "dead";
            myStates.splice(myStates.indexOf(e.target.dataset.coordinates), 1);
            props.setManyStates(myStates);
        } else {
            e.target.className = "alive";
            props.setManyStates([...props.manyStates, e.target.dataset.coordinates]);   
        }
    }

    return (
        <div className="field"
             style={{
                 width:"900px", //don't touch
                 height:"500px" //don't touch
             }}>
           {[...Array(rows)].map((_, x) =>
           <div className="field-column" 
                key={x}
                style={{
                    width:"10px",
                    height:"500px"
                }}>
                {[...Array(columns)].map((_, y) => 
                    <div
                    style={{
                        height:"10px",
                        outline:"1px solid #2d426333"
                    }}
                    data-coordinates={[x + 1, y + 1]}
                    className="dead"
                    onClick={changeAmbivalence}
                    key={y}></div>
                    )}
           </div>
           )} 
        </div>
    );
}
