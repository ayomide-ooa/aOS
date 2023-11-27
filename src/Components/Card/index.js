import React, { useState } from 'react'
import './Card.scss'
import Draggable from 'react-draggable'

const Card = (props) => {
    const [divCount, setDivCount] = useState(1);

    var addDiv = () => {
        setDivCount(divCount + 1)
    }
    
    return (
        <body>
            {Array.from({ length: divCount }).map((_, index) => (
                <Draggable>
                    <div key={index} className="Card" id="card">
                        <div className="card-header">
                            <div className="right details">
                                <span> <img src="../../Img/aos.png" height="15vw" alt="aos_logo" /> </span>
                                <span style={{ fontSize: "1.2vw" }}>File Manager</span>
                            </div>
                            <div className="left details">
                                <button>x</button>
                                <button>-</button>
                                <button onClick={() => document.getElementById("card").style.display = "none"}>o</button>
                            </div>
                        </div>
                    </div>
                </Draggable>
            ))}
            <span onClick={addDiv}>
            <img src={props.src} alt={props.alt} />
            <span style={{
                    display: "block",
                    fontSize: "1vw"
            }}>{ props.name }</span>
            </span>
        </body>
    )
            }

export default Card;




// This is the component that you want to create on button click 
// function NewComponent(props) { 
//     return <div className="new-component" >Hello, {props.name} !</div>
// }

// function Card() {
//     // This is the state that stores the components 
//     const [components, setComponents] = useState([]);
//     // This is the function that creates a new component and adds it to the state 
//     function createComponent() {
//     // You can pass any props you want to the new component 
//     const newComponent = <NewComponent name="Reactors" /> ;
//     // You can use the spread operator to add the new component to the existing array of components 
//     setComponents([...components, newComponent]);
//     }

//     return (
//         <div className="Cardss">
//             <h1>React Component on Button Click</h1>
//             <button onC1ick={createComponent}>Create Component</button>
//             <Draggable>
//             <div className="Card">
//                 {/* You can use the map method to render the components from the state */}
//                 {components.map((components, index) => (
                    
//                     <div key={index} className="Card">{components}</div>
                    
//                 ))}
//         </div>
//         </Draggable>
//         </div>
//                 )
// }
// export default Card;
