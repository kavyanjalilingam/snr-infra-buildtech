import nodemailer from "nodemailer";
import admin from "firebase-admin";

// Initialize Firebase (only once)
if (!admin.apps.length) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("✅ Firebase initialized successfully");
  } catch (error) {
    console.error("❌ Firebase initialization failed:", error);
  }
}

const db = admin.firestore();

export default async function handler(req, res) {
  console.log("📥 Request received:", req.method);

  if (req.method !== "POST") {
    console.warn("⚠️ Method not allowed");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    name,
    phone,
    email,
    plotOwnership,
    city,
    budgetRange,
    priceReference,
  } = req.body;

  console.log("📝 Form data received:", req.body);

  if (!name || !phone || !plotOwnership || !city || !budgetRange) {
    console.warn("⚠️ Missing required fields");
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // 1️⃣ Save lead to Firestore
    const docRef = await db.collection("leads").add({
      name,
      phone,
      email: email || "Not Provided",
      plotOwnership,
      city,
      budgetRange,
      priceReference,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log(`✅ Lead saved to Firestore with ID: ${docRef.id}`);

    // 2️⃣ Send Email Notification to Client
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CLIENT_EMAIL,
        pass: process.env.CLIENT_PASS,
      },
    });

    const mailOptions = {
      from: `"SNR Infra BuildTech" <${process.env.CLIENT_EMAIL}>`,
      to: process.env.CLIENT_EMAIL,
      subject: "New Quote Request - SNR Infra BuildTech",
      html: `
        <h2>New Quote Request Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not Provided"}</p>
        <p><strong>Plot Ownership:</strong> ${plotOwnership}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Budget Range:</strong> ${budgetRange}</p>
        <p><strong>Price Reference:</strong> ${priceReference}</p>
        <br/>
        <p>Submitted at: ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");

    res.status(200).json({
      success: true,
      message: "Lead saved and email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
}
