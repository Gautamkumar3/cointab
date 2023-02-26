const axios = require("axios");
const userModel = require("../model/user");

// ##### fetch 100 user from the api ###########

const fetchUserFromapi = async () => {
  let res = await axios("https://randomuser.me/api/?results=100");
  return res.data.results;
};

// ############# add user to database ################

const addUser = async (req, res) => {
  try {
    let data = await fetchUserFromapi();
    const allUser = await userModel.insertMany(data);
    res.send({ status: "success", data: allUser });
  } catch (er) {
    res.status(403).send({ status: "error", msg: er.message });
  }
};

// ################# delete users from database ###########

const deleteAllUsers = async (req, res) => {
  try {
    const deletedUsers = await userModel.deleteMany();
    res.send({
      status: "success",
      msg: "user removed successfully",
      data: deleteAllUsers,
    });
  } catch (er) {
    res.status(403).send({ status: "error", msg: er.message });
  }
};

// ############ get all users from database ############

const getAllUsers = async (req, res) => {
  let query = {};
  if (req.body.gender == "female") {
    query = { gender: "female" };
  } else if (req.body.gender == "male") {
    query = { gender: "male" };
  } else if (req.body.age == "lessthanfifty") {
    query = { "dob.age": { $lt: 50 } };
  } else if (req.body.age == "greterthanequaltofifty") {
    query = { "dob.age": { $gte: 50 } };
  } else if (req.body.country == "India") {
    query = { "location.country": "India" };
  } else if (req.body.country == "New Zealand") {
    query = { "location.country": "New Zealand" };
  } else if (req.body.country == "Iran") {
    query = { "location.country": "Iran" };
  }
    try {
      const totalUsers = await userModel.find(query).count();
      const filteredUser = await userModel
        .find(query)
        .skip(req.params.page)
        .limit(10);
      res.status(200).send({
        status: "success",
        users_count: totalUsers,
        data: filteredUser,
      });
    } catch (er) {
      res.status(403).send({ status: "error", msg: er.message });
    }
};

module.exports = { addUser, deleteAllUsers, getAllUsers };
