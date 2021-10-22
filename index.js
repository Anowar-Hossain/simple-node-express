const express = require('express');
const cors = require('cors')
const app = express();


app.use(cors());
app.use(express.json());


const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello from my second  server, WOw. i am Excited')
})

app.p

const users = [
    
    {id:0, name: 'Anwar Hossain', email:'anwarsohan@gmail.com', phone: '01856896671'},
    {id:1, name: 'Anwar Sohan', email:'sohanmd@gmail.com', phone: '01856896671'},
    {id:2, name: 'Md. Sohan', email:'anwar1215@gmail.com', phone: '01856896671'},
    {id:3, name: 'md. Anwar', email:'sohan6671@gmail.com', phone: '01856896671'},
]

app.get('/users', (req, res)=> {
 const search = req.query.search;
  //use query search parameter
  if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
  res.send(searchResult);
  }
  else{
    res.send(users)
  }
});
//app Method
app.post('/users', (req, res)=> {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitted', req.body);
  res.json(newUser);
})
//dynamic api
app.get('/users/:id', (req, res)=> {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
})

app.listen(port, () => {
  console.log('Listening to port', port);
})