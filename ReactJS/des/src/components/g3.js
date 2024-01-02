import React, {Component} from "react";


const A = props =>
{
    return(
        <div>
            hello {props.name} AKA {props.heroname}
        </div>
    )
}


class Display extends Component
{

    render()
    {
        return (
          <h1>
            <A name="RAJ" heroname="Captain" />
          </h1>
        );
    }

        


}


export  default Display