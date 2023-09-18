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
        <form className="defenseform" onSubmit={submitHandler}>
            {row("Health", "Health regn")}
            {row("Defense %", "Defense Absolute")}
            {row("Thorn", "Life Steal")}
            {row("Knockback Chance", "Knockback force")}
            {row("Orb speed", "Orbs")}
            {row("Shockwave size", "Shockwave frequency")}
            {row("Land mine chance", "Land mine damage")}
            {row("Land mine radius", "death defy")}
            {row("Wall health", "Wall rebuild")}
        </form>
    );
}

export default OffenseUpgrade;