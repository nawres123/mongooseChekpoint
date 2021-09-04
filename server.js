const express = require("express");

const connectDB = require ("./DB/connectDB")

const PersonDB = require('./Model/model')

// New Person
// const Person = new PersonDB({name:"Marwa", age:25, favoriteFoods:["Pasta","Pizza"]})
 //Person.save((err)=>{
  // if(err) return handleError(err)
 //  //save
 //})


//  Create many records
//  const docs = PersonDB.create([
//    {name:"ranim",age:15,favoriteFoods:["Salad","Chikken"]},
//    {name:"nedra",age:30,favoriteFoods:["Makloub","soupe"]},
//    {name:"ichrak",age:26,favoriteFoods:["Pizza","Lasagnes"]},
//    {name:"mohsen",age:15,favoriteFoods:["Couscous","pasta"]}
//  ])


// Find All
// const search = async()=>{
//     try{
// const data = await PersonDB.find({});
// console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// search()


// Find One
// const search = async()=>{
//     try{
// const data = await PersonDB.findOne({favoriteFoods:["Salad","Chikken"]});
// console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// search()
//save



// Find By Id 
 const search = async()=>{
     try{
const data = await PersonDB.findById({_id:"61269e7f4e76532a646cc09e"});
 console.log(data)
    }catch(err){
        console.log(err)
   }
 }
// search()


// Classic Updates by Running Find, Edit, then Save
// const update = async()=>{
//     const Person = await PersonDB.findById({_id:"61269ec0244db21e68a5d263"})
//     Person.favoriteFoods=["Pasta", "Pizza", "Makloub"]
//     Person.save((err)=>{
//            if(err) return handleError(err)
//             //save
//         })
// }
// update()


// Updates Using model.findOneAndUpdate()
 const query={name:"nedra"}
 const UpdatePerson = async()=>{
   await PersonDB.findOneAndUpdate(query,{$set:{age:30}},{new:true, useFindAndModify: false}, (err,data)=>{
       try {
             console.log("updated")
         } catch (err) {
             console.log(err)
         }
    })
 }
// UpdatePerson()


// Delete One 
// const Remove = async()=>{
//   await PersonDB.findByIdAndRemove({_id:"61269ec0244db21e68a5d264"}, (err,data)=>{
//     try {
//       console.log("removed")
//     } catch (error) {
//       console.log(err)
//     }
//   })
// }
// Remove()


// Delete Many 
// const RemovePerson = async()=>{
//   const res = await PersonDB.remove({name:"nedra"}, (err,data) =>{
//     try {
//       console.log("removed Persons")
//     } catch (error) {
//       console.log(err)
//     }
//   })
// }
// RemovePerson()



// chain()
// const chain = async() => {
//    try {
//      const data = await PersonDB.find({favoriteFoods: {$elemMatch: {$eq: "Pizza"}}}).sort({name: 'Marwa'}).limit(2).select({age: 0, __v: 0}).exec()
//          console.log(data)
//     } catch (err) {
//        console.error(err)
//     }
// }
// chain()



connectDB()

const app = express();

const PORT = 3001;

app.listen(PORT,(err)=>{
    err?
    console.log(err)
    : console.log(`server is running in ${PORT}...`)

})