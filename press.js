const e = require('express');
const express=require('express');
let PORT=3000;
const app = express();
let contacts=[{
    "name":"Abukar",
    "email":"abukarhassansalah@gmail.com",
    "phoneNumber":2348065719764,
    "city":"tieglow"
}]
app.use(express.json());
app.post('/add_contact',(req,res)=>{
    contacts.push(req.body);
    res.json(contacts);

});

app.get('/Contacts_lists', (req,res) => {
      res.send(contacts);
     res.send(contacts);
    });
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})