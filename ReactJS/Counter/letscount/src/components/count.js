import React, {Component} from "react";

class Co extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
           message: 0
        }
    }
    
    changeMessage()
    {
        this.setState((prevState)=>
        {
            return{
                message: prevState.message+1,
            };
        });

    }

    change()
    {
        this.setState((again)=>
        {
            return{
                message: again.message-1,
            };
        });
    }
    zero()
    {
        this.setState((maketozer)=>
        {
            return{
                message: 0  
            };
        });
    
    }
    
    
    render()
    {
    return(
        <div>
           <h4>{this.state.message}</h4>
            
            <button onClick={()=>{this.changeMessage()}}>Count+</button>
            <button onClick={()=>{this.change()}}>Count-</button>
            <button onClick={()=>{this.zero()}}>Clear</button>
        </div>
    );
    }





}

export default Co




