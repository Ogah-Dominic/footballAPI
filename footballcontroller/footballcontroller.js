const footballTeams=require("../footballModel/footballmodel")

 totalteams=async()=>{
try{
  let teams=await footballTeams();

  if(!teams){
    console.log("Unable to retrieve football teams")
  }
  else{
    return teams;
  }
}
catch(error){
    console.log(error.message)
}

}
module.exports= totalteams