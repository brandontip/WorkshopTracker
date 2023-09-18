import React from 'react';
import FeedbackPopup from "./Components/FeedbackPopup";
import OffenseUpgrade from "./Components/OffenseUpgrade";
import UsernameList from "./Components/UsernameList";
import UtilityUpgrade from "./Components/UtilityUpgrade";
import DefenseUpgrade from "./Components/DefenseUpgrade";
function App() {
  const [allUsernames, setAllUsernames] = React.useState([]);
  const addUserHandler = (username, uid) => {
    if(username.trim().length === 0 || uid.trim().length === 0) {return;}
    let allUsernamesTemp = [...allUsernames];
    allUsernamesTemp.push({'username':username, 'id':uid});
    setAllUsernames(allUsernamesTemp);};

  return (
      <>
        <div className={'row'}>
          <OffenseUpgrade onAddUser={addUserHandler}/>
          <DefenseUpgrade onAddUser={addUserHandler}/>
          <UtilityUpgrade onAddUser={addUserHandler}/>
        </div>
        <form className={'form'} >
          <div className="input-group">
            <p>
              <label >Coins saved</label>
              <input />
            </p>
            <p>
              <label >Gems saved</label>
              <input />
            </p>
            <p>
              <label >Lifetime coins</label>
              <input />
            </p>
            <p>
              <label >Date</label>
              <input type="date"/>
            </p>
            <p>
              <label >User</label>
              <input />
            </p>

          </div>
        </form>
      </>

  );
}

export default App;
