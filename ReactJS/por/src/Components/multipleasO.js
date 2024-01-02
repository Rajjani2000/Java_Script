import React, {Component} from "react";

const A = props => {
    return(
        <div>
            Welcome TO The  {props.companyname}
        </div>
    )
}
const B = props =>
{
    return(
        <div>
        
            {props.drink}
            {props.eat}
        </div>
    )
}

class Display extends Component {
    render()
     {
        return(
            <div>

                <A companyname="Scotts"/>
                <B drink="Drink with Grandma" eat="Eat With Sam"/>

            </div>
        )
    
    }
}

export default Display