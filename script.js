let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://sv443.net/jokeapi/v2/joke/Any`);
  let data = await response.json()
  console.log(data)
  console.log(response)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  if (data.type === "twopart"){
    document.querySelector("#content").innerHTML += `<div class="card">
  <div class="card-header">
    Category: ${data.category}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${data.setup}...</p>
      <p>${data.delivery} </p>
    </blockquote>
  </div>
</div>`
    
  } else if(data.type == "single") {
    
    document.querySelector("#content").innerHTML +=`<div class="card">
  <div class="card-header">
    Category: ${data.category}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${data.joke}</p>
    </blockquote>
  </div>
</div>`
  }
  
  
}

