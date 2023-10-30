var nodemailer = require('nodemailer');

//Gmail SMTP Confriguration...
const transporter = nodemailer.createTransport(
    {
        service : 'Gmail',
        auth: {
            user : 'codesquirrel1009@gmail.com',
            pass : ''


}});

//Email Data

const mail_option = {
    from: 'codesquirrel1009@gmail.com',
    to : 'rpjani122@gmail.com',
    subject : 'M&T Alert Money_Withdrawl',
    text: ' Money Deposited from *****00'    
};

//Send the mail
transporter.sendMail(mail_option,(err,info)=>
{
if(err)
{
    console.log("erooor")
}
else
{
    console.log("email Sent",info.response);
}
});