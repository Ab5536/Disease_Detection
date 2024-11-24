const User = require("./mongoDB/user");
exports.signup

  //LogIn
  exports.logIn = async (req, res) => {
    console.log("Login");
    const { email, password } = req.body;
  
    try {
      const check = await User.findOne({
        email: email,
        password: password,
      });
      if (check) {
        res.json({
          status: 200,
          data: check,
        });
      } else {
        res.json({
          status: 404,
        });
      }
    } catch (e) {
      res.json({status:500,});
    }
  };
  // SignUp
  exports.signup = async (req, res) => {
    console.log("SignUp",req.body);
    const data = req.body;
  
    try {
        await User.create(data);
        console.log("SignUp Successful");
        res.json({status:200});
      
    } catch (e) {
      console.log("Error", e);
      res.status(500).json("Error");
    }
  };