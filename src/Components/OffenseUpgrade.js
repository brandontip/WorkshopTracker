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
        <form className="offenseform" onSubmit={submitHandler}>
            {row("Damage", "AttackSpeed")}
            {row("Critical Chance", "Critical Factor")}
            {row("Range", "Damage/m")}
            {row("MS Chance", "MS Tar")}
            {row("RF Chance", "RF Duration")}
            {row("BS Chance", "Bs Target")}
            {row("BS Range", "Super Crit Chance")}
            {row("Super Crit Mult", "Rend Armor Chance")}
            <div className="input-group">
                <p>
                <label >Rend Armor Mult</label>
                    <input type="number"/>
                </p>
            </div>
        </form>
    );
}

export default OffenseUpgrade;