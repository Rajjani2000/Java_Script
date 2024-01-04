const User = require("../models/user");
const bcrypt = require('bcrypt');


exports.createUser = async (req, res) => {
  try {
    const adminusername = req.body.adminusername;
    const adminpassword = req.body.adminpassword;
    const classroomname = req.body.classroomname;
    const classroompassword = req.body.classroompassword;

    const userExist = await User.findOne({ adminusername: adminusername });
    if (userExist) {
      console.log("User Alreday Exist.. ");
    } else {
      const received = {
        adminusername: adminusername,
        adminpassword: adminpassword,
        classroomname: classroomname,
        classroompassword: classroompassword,
      };
      const newUser = await User.create(received);
      res.json(newUser);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    let users;
    if (req.query.adminusername) {
      users = await User.find({
        adminusername: req.query.adminusername,
      });
      if (users) {
        const isMatch = await bcrypt.compare(req.query.adminpassword,users[0].adminpassword);
        
        
          if (!isMatch) {
          res.status(403).json("Invalid Credentials");
        } else {
            
          res.status(200).json({ message: "Logged In Successfully" });
        }
      }
    } 
    
    
    else if (req.query.classroomname) {
      users = await User.find({
        classroomname: req.query.classroomname,
      });

      if (users) {
        const isMatch = await bcrypt.compare(req.query.classroompassword,users[0].classroompassword
        );
        
        if (!isMatch) {
          res.status(403).json("Invalid Credentials");
        } else {
          res.status(200).json({ message: "Logged In Successfully" });
    
        }
      }
    } else {
      users = await User.find();
    }
    // res.json(users);
    // console.log("Users:", users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
