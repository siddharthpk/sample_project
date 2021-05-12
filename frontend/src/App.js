import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from 'axios';

const url = "http://localhost:8000";

function App() {
  let tmp
  const [users, setUsers] = useState();
  const [isFetching, setFetching] = useState(false);
  const [newUser, setNewUser] = useState();


  const fetchUsers = async () => {
    setFetching(true);

    let json;
    try {
      const data = await fetch(url + "/users/");
      json = await data.json();
      console.log(json);
    } catch (err) {
      console.log(err);
      window.alert(err);
    }

    if (json) {
      setUsers(json);
    }

    setFetching(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () =>{
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    };
    try {
      const fetchResponse = await fetch(url + "/users/add/", settings);
      if(fetchResponse){
        console.log("Added " + newUser +  " Successfully");
      }
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users?.map((user, index) => (
              <li key={index}>{user.fields.name}</li>
            ))}
          </ul>
        )}
        <form>
          <label>
            Name : 
            <input type="text" name="name" onChange = { e =>setNewUser(e.target.value)} />
          </label>
          <br></br>
          <input type="submit" name="Action"  value='Add' onClick={addUser}/>
        </form>
      </header>
    </div>
  );

}

export default App;
