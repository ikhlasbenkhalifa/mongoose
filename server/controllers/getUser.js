const { User } = require("../model/User");

const getUsers = async (req, res) => {
    try {
      const users = await User.find();
  
      if (users.length === 0) {
        console.log('No users found.');
      }
  
      res.status(200).json(users);
    } catch (error) {
      console.error("Error in getUsers:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  


module.exports = {
  getUsers,
};
