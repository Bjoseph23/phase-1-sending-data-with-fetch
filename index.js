function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        body: JSON.stringify({name, email}),
    } )  
    .then(res=>res.json())
    .then( object => document.body.textContent=object["id"])
    .catch(function (error) {
        alert("Oh no!, Error");
        document.body.textContent=error.message
      });
}
submitData(name,email)