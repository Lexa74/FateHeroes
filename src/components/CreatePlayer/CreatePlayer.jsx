import React from "react";
import { useState } from "react";
import { factions } from "../../const/factions";
import { Input } from "../UI/Input/Input";
import './createplayer.css';


export const CreatePlayer = () => {

    const [name, setName] = useState('');
    const [charac, setCharac] = useState('Фракция не выбрана');

    if(charac === '1') {console.log(factions[parseInt(charac)].HP);}

    const selectedFaction = factions.find((faction) => {
        return faction.id === parseInt(charac)
    })

    return  (
        <div className="create-player">
            <Input placeholder='Имя' type='text' value={name} onInput={setName}/>
            <select className="create-player__form-element" onChange={(e) => setCharac(e.target.value)}>
                <option value="" hidden></option>
                {factions.map((faction) => <option value={faction.id} key={faction.id}>{faction.name}</option>)}
            </select>
           
             <div>
                <p>Особенность фракции: <strong>{selectedFaction.speciality}</strong></p>
                <p>Особенность фракции: <strong>{selectedFaction.speciality}</strong></p>
                <p>Особенность фракции: <strong>{selectedFaction.speciality}</strong></p>
             </div>

        </div>
    )
  }
