const getLatLong = (options, callback) => {
  console.log("The options are", options);
//sends off an api request with options we pass in, this gets the closest address to our lat & long
  fetch(`http://localhost:4040/fetchLatLong/${options.address}`)
  .then((response) => {
      //with fetch we gotta json it before we can use it
      console.log("THE RESPONSE IS", response)
      return response.json();
      //we then call imageGetter on the data, and then send it back to the app
    })
  .catch((err) => console.log('Error in get lat long', err));
};

export default getLatLong;
