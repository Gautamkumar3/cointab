const axios = require("axios");
const userModel = require("../model/user");

// ##### fetch 100 user from the api ###########

const fetchUserFromapi = async () => {
  let res = await axios("https://randomuser.me/api/?results=10");
  return res.data.results;
};

const addUser = async (req, res) => {
  try {
    let data = await fetchUserFromapi();
    const allUser = await userModel.insertMany(data);
    res.send({ status: "success", data: allUser });
  } catch (er) {
    res.status(403).send({ status: "error", msg: er.message });
  }
};

module.exports = { addUser };
