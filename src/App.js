import React from "react";
import { useState } from "react";
import './App.css';

function App()

{
    const [result,setResult] = useState("");
   

    const clickHandler = (eventthatisclicked)=>
    {
        setResult(result.concat(eventthatisclicked.target.value))
    };

    const clearanswer = ()=>
    {
        setResult("");
    };

    const calculate_using_eval = ()=>
    {
        setResult(eval(result).toString());
    };

    return (
        <>
            <div className="calculator">
                <input type="text" id="answer" placeholder="0" value={result}/>
                <input type="button" value="9" className="button" onClick={clickHandler}/>
                <input type="button" value="8" className="button" onClick={clickHandler}/>
                <input type="button" value="7" className="button" onClick={clickHandler}/>
                <input type="button" value="6" className="button" onClick={clickHandler}/>
                <input type="button" value="5" className="button" onClick={clickHandler}/>
                <input type="button" value="4" className="button" onClick={clickHandler}/>
                <input type="button" value="3" className="button" onClick={clickHandler}/>
                <input type="button" value="2" className="button" onClick={clickHandler}/>
                <input type="button" value="1" className="button" onClick={clickHandler}/>

                <input type="button" value="0" className="button" onClick={clickHandler}/>

                <input type="button" value="+" className="button" onClick={clickHandler}/>
                <input type="button" value="-" className="button" onClick={clickHandler}/>
                <input type="button" value="*" className="button" onClick={clickHandler}/>
                <input type="button" value="/" className="button" onClick={clickHandler}/>
                <input type="button" value="%" className="button" onClick={clickHandler}/>
                <input type="button" value="." className="button" onClick={clickHandler}/>

                <input type="button" value="Clear" className="button clear" onClick={clearanswer}/>
                <input type="button" value="=" className="button clear" onClick={calculate_using_eval}/>
            </div>

        </>
    );
}

export default App;
