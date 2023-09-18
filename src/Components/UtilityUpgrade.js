import React, {useState} from "react";


function submitHandler(event) { }
function resetHandler(event) { }

function row(namea, nameb) {return(<div className="input-group">
    <p>
        <label >{namea}</label>
        <input type="number"/>
    </p>
    <p>
        <label>{nameb}</label>
        <input type="number"/>
    </p>
</div>);}
function OffenseUpgrade(props) {

    return (
        <form className="utilityform" onSubmit={submitHandler}>
            {row("Cash bonus", "Cash/wave")}
            {row("Coin bonus", "Coin/wave")}
            {row("Free attack", "Free defense")}
            {row("Free utility", "Interest/wave")}
            {row("Recovery amount", "Max Recovery")}
            {row("Package Chance", "Enemy attack lvl skip")}
            <div className="input-group">
                <p>
                    <label >Enemy health lvl skip</label>
                    <input type="number"/>
                </p>
            </div>
        </form>
    );
}

export default OffenseUpgrade;