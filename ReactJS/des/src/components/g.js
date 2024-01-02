import React from "react"


const  Greet = props =>
{
    return(
       <div>
        <h1>
            hello {props.name} {props.heroname}
        </h1>

       </div>
    )

}


export default Greet