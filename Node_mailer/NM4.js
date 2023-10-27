const nodemailer = require('nodemailer');
 ///tranpoter...

 const tranpoter = nodemailer.createTransport(
      {
        service : 'Gmail',
        auth : {
            user : 'codesquirrel1009@gmail.com',
            pass : 'aqlcgowlnqbwkzcl'
        }

      }
 );
 //Sending Data..
 const Email_option = {

    from :'codesquirrel1009@gmail.com',
    to : 'pankajjani09@yahoo.com',
    Subject : 'M&T Alert : Password Reset',
    text : 'Your Password Has been reseted....'
 }
 
 //Email Sent..
 tranpoter.sendMail(Email_option,(err,info) =>
 {
    if(err)
    {
        console.log("eroor Occur")
    }
    else
    {
        console.log("Email Sent",info.response)

    }

 });