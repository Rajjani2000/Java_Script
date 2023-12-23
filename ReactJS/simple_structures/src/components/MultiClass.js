import React, {Component} from "react";

class One extends Component
{
    render()
    {
        return <h4>This is the Component 1 from Multi Class</h4>;
    }
}

class Two extends Component
{
    render()
    {
        return <h4>This is the Component 2 from Multi Class</h4>;
    }
}

class Three extends Component
{
    render ()
    {
        return <h4>This is the Component 3 from Multi Class</h4>;
    }

}

class Di extends Component
{
    render ()
    {
        return(
        <div>
            <One/>
            <Two/>
            <Three/>

        </div>)
    }
}
export default Di