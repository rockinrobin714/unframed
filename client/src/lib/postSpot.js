const postSpot = (data) => {
  console.log('I a posting a spot');
  console.log(JSON.stringify(data));
 
 //This takes data from AddSpot.js and sends a post request to the server
 
  fetch('http://localhost:4040/spots', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
    body: JSON.stringify(data)
  }).then((response) =>{
  	console.log(response)
  }).catch((error)=>{
  	console.log(error)
  })
};


export default postSpot;