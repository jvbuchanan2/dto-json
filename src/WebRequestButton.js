import React from "react";

export default function WebRequestButton() {
  
  function WebRequestButton() {
    const requestDto = {
      "id": 0,
      "title": "Dig 6 tree holes and plant trees",
      "dueDate": "2024-08-23T23:48:48.358Z", 
      "completed": false
    };
    const address = "https://fakerestapi.azurewebsites.net/api/v1/Activities";
  
    fetch(address, {
      method: 'POST',
      body: JSON.stringify(requestDto),
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  
  return (<>
    <button onClick={() => WebRequestButton()}>Send my Post request</button>
    </>);

}
  