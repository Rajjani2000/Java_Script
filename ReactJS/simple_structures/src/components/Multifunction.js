import React from "react";


const App1 = () =>
{
    return <h4>This is the App1 from Multifunction Arrow</h4>
}

const App2 = () =>
{   
    return <h4>This is the App2 from Multifunction Arrow</h4>;

}
const App3 = () =>
{
    return <h4>This is the App3 from Multifunction Arrow</h4>;
}
const App4 = () =>
{
    return <h4>This is the App4 from Multifunction Arrow</h4>;

}
const Dis = () =>
{
    return (
        <div>
            <App1/>
            <App2/>
            <App3/>
            <App4/>

        </div>
    )


}
 
export default Dis