import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone number and password are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: "customer",
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const maxAttempts = 5;
    const lockDuration = 15 * 60 * 1000; // 15 minutes
    const now = new Date();

    if (user.loginLockUntil && user.loginLockUntil > now) {
      const remainingSeconds = Math.ceil(
        (user.loginLockUntil.getTime() - now.getTime()) / 1000
      );

      return res.status(423).json({
        success: false,
        locked: true,
        attemptsLeft: 0,
        remainingSeconds,
        message: "Too many failed login attempts. Please try again later.",
      });
    }

    if (user.loginLockUntil && user.loginLockUntil <= now) {
      user.loginFailedAttempts = 0;
      user.loginLockUntil = null;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      user.loginFailedAttempts += 1;

      const attemptsLeft = Math.max(0, maxAttempts - user.loginFailedAttempts);

      if (user.loginFailedAttempts >= maxAttempts) {
        user.loginLockUntil = new Date(Date.now() + lockDuration);
      }

      await user.save();

      if (user.loginLockUntil) {
        const remainingSeconds = Math.ceil(
          (user.loginLockUntil.getTime() - Date.now()) / 1000
        );

        return res.status(423).json({
          success: false,
          locked: true,
          attemptsLeft: 0,
          remainingSeconds,
          message:
            "Too many failed login attempts. Your account is locked for 15 minutes.",
        });
      }

      return res.status(401).json({
        success: false,
        locked: false,
        attemptsLeft,
        message: "Invalid email or password",
      });
    }

    user.loginFailedAttempts = 0;
    user.loginLockUntil = null;
    await user.save();

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while logging in",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    console.error("GetMe error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
};

export const getCustomerCount = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required",
      });
    }

    const customerCount = await User.countDocuments({
      role: "customer",
    });

    res.status(200).json({
      success: true,
      customerCount,
    });
  } catch (error) {
    console.error("Customer count error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required",
      });
    }

    const customers = await User.find({ role: "customer" })
      .select("name email phone role createdAt")
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: customers.length,
      customers,
    });
  } catch (error) {
    console.error("Get customers error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch customers",
    });
  }
};
