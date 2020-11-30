//////////////////////********requiring packages*************/////////////////
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express.Router();
const user = require('../models/user');
const { ReplSet } = require("mongodb");



// app.use('/',express.static("public"));

///////////////////////////////////////////

// const profileSchema = new mongoose.Schema({
//     fname: String,
//     lname: String,
//     specialization: String,
//     branch: String,
//     year:String,
//     summary: String,
//     training_course : String,
//     training_organisation : String,
//     internship_specialization : String,
//     internship_organisation : String,   
//     skills:String,
//     hobbies:String
//   });

  // const Profile = mongoose.model("Profile", profileSchema);
  
  app.get("/",async function(req, res) {
    console.log(req.user)
    let result = await user.findOne({name : req.user.name}) 
    res.render("profile",{result});
  });

  app.post("/", async function(req, res) {
    let result = await user.findOne({email : req.user.email}) 
      result.name = req.body.name,
      result.Branch=req.body.branch,
      result.Year=req.body.year,
      result.Summary=req.body.summary,
      result.Specilist=req.body.specialization1,
      result.training_course = req.body.course,
      result.training_organisation = req.body.organisation1,
      result.internship_specialization = req.body.specialization1,
      result.internship_organisation = req.body.organisation2,
      result.skills=req.body.skills,
      result.hobbies=req.body.hobbies
    req.user.name = req.body.name
    result.save();
    console.log(result);;
    res.redirect("users/profile")
  });

module.exports = app