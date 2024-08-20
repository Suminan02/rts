import { useState } from "react";

const GuestList:React.FC=()=> {
  const [name, setName]=useState('');
  const [guests, setGuests]=useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name])
  };


  return ( <div>
    <h3>Guset List</h3>
    <ul>
      {guests.map(guest => <li key={guest}>{guest}</li>)}
    </ul>
    <input value={name} onChange={(e)=> setName(e.target.value)}/>
    <button onClick={onClick}>Add Guest</button>
  </div>
  );
};

export default GuestList;
