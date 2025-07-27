// controllers/authController.js

const User = require("../models/User");

exports.signinCustomer = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    // Find user by email or phone
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 🔥 Plain-text password comparison (no hashing)
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ Send user data
    res.status(200).json({
      message: "Signin successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        profileImage: user.profileImage || "",
      },
    });

  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
