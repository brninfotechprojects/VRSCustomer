const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Sign Up
router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const existing = await User.findOne({ $or: [{ email }, { phone }] });
    if (existing)
      return res.status(400).json({ message: "Email or Phone already exists" });

    const newUser = new User({ name, email, phone, password }); // plain password
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Sign In
router.post("/signin", async (req, res) => {
  const { emailOrPhone, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    if (password !== user.password) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login success",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (err) {
    console.error("Signin Error:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

module.exports = router;
