//Implement node mailer library
const { response } = require('express');
const nodemailer = require('nodemailer');


//Create Tranpporter

const transporter = nodemailer.createTransport(
    {
        service : 'Gmail',
        auth : 
        {
        
            user : 'codesquirrel1009@gmail.com',
            pass : ''

        }


    }
);
 

///Email Data
const Email_option  = {

    from : 'codesquirrel1009@gmail.com',
    to : 'jjani1@students.towson.edu',
    Subject : 'M&T Alert : Password Reset',
    text : 'Your Password Has been changed'




};


//Sending mail
transporter.sendMail(Email_option,(err,info)=>
{
    if(err)
    {
        console.log("Erooor")
    }
    else
    {
        console.log("Email Sent",info.response);

    }


});