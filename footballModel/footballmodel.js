const footballDb=require("../footballDatabase.json")
// console.log(footballDb)

//A function to get all things
const allTeams=()=>{
  return new Promise((resolve,reject)=>{

    resolve(footballDb)
  })
}

module.exports=allTeams