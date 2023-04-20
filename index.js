import express from 'express'

const app = express();
const students = [
    {
        name: "muhammed" ,
        id: 1 ,
        city: "shebin" ,
    },
    {
        name: "ahmed" ,
        id: 2 ,
        city: "giza" ,
    },
    {
        name: "yasser" ,
        id: 3 ,
        city: "cairo" ,
    },
    {
        name: "adm"  ,
        id: 4 ,
        city: "shebin" ,
    }
];

const studentsFunction = (request, response) => {
     let output = '<ul>';
     for(let i=0;i<students.length;i++){
        const student =students[i];
        output += '<li>' + student.name + '</li>'

     }

     output += '</ui>'
     response.send(output)

};


app.get('/students', studentsFunction)
app.listen(5000);
