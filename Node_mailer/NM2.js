const nodemailer = require('nodemailer');
 ///Transporter....
const transporter = nodemailer.createTransport(
        {
            service :  'Gmail',
            auth : {
                user : 'codesquirrel1009@gmail.com',
                pass :  ''


            }
 });





 ///Email Data

 const Email_option = {
            from : 'codesquirrel1009@gmail.com',
            to :'jjani1@students.towson.edu',
            subject : 'Extra Credit for AWD Midterm',
            text : ' You will get Extra Credit For the Exam '
    
        };



 //Sendig Email

 transporter.sendMail(Email_option,(err,info) =>
 {
    if (err)
    {
        console.log("Email errror");

    }
    else
    {
        console.log("Email Sent",info.response);
    }

 })