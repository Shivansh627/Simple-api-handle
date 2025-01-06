use('courses');

// console.log(db);
// db.createCollection("Shivansh");

// db.Shivansh.insert([
//     {
//       "name": "Alice",
//       "random": 42
//     },
//     {
//       "name": "Bob",
//       "random": 68
//     },
//     {
//       "name": "Charlie",
//       "random": 3
//     },
//     {
//       "name": "David",
//       "random": 87
//     },
//     {
//       "name": "Eve",
//       "random": 12
//     },
//     {
//       "name": "Frank",
//       "random": 5
//     },
//     {
//       "name": "Grace",
//       "random": 99
//     },
//     {
//       "name": "Henry",
//       "random": 23
//     },
//     {
//       "name": "Isaac",
//       "random": 7
//     },
//     {
//       "name": "Jane",
//       "random": 56
//     }
//   ]);

// let a= db.Shivansh.find();
//   console.log(a);
// let b= '6772cc0e909ae5d316b386c1'
// console.log(db.Shivansh.findOne({_id:ObjectId: ObjectId(b)}));
  
let b = '6772cc0e909ae5d316b386c1';
let c=db.Shivansh.findOne({ _id: ObjectId(b) });