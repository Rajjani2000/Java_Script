
const nodemailer = require('nodemailer');


const student_data = [
    { name:'raj',email:'rpjani122@gmail.com',subject:'Math',marks: 85},
    { name:'jani',email:'rajjani1009@icloud.com',subject:'Physics',marks:40},
    { name:'TOM',email:'rpjani122@gmail.com',subject:'Physics',marks:30}
]



const filter_data = student_data.filter(ele => ele.marks <=50 );
const ti = filter_data.map(el => el.email);
const n = filter_data.map(el => el.name);
const sub = filter_data.map(el => el.subject);
const mar = filter_data.map(el=>el.marks);

// console.log("Filter data is", filter_data);
// console.log("Name is",n);
// console.log("Email is",ti);
// console.log("Subject is",sub);
// console.log("Marks is",mar)

var transporter = nodemailer.createTransport(
    {
        service : 'Gmail',
        auth :
        {
            user : 'codesquirrel1009@gmail.com',
            pass : ''

        }
    }
);
//Email Data
for(let i in ti)
{
    const Email_data =
    {
        from : 'codesquirrel1009@gmail.com',
        to : ti[i],
        Subject :' Result Declared ',
        text : "Hello "+n[i]+" You Got "+mar[i]+" MArks in "+sub[i]

    }
    transporter.sendMail(Email_data,(err,info) =>
    {
        if(err)
        {
            console.log("err",err)
        }
        else
        {
            console.log("Send Successull",info.response)
        }

    })

}




