const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // build transporter
    let transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // your App Password
      },
    });

    // your fuchsia email template
    const htmlTemplate = `
      <!doctype html>
      <html>
      <head><meta charset="utf-8"></head>
      <body>
        <h2 style="color:#d946ef;">New Safari Booking</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Safari Type:</strong> ${data.safariType}</p>
        <p><strong>Group Size:</strong> ${data.groupSize}</p>
        <p><strong>Arrival:</strong> ${data.arrivalDate}</p>
        <p><strong>Departure:</strong> ${data.departureDate}</p>
        <p><strong>Accommodation:</strong> ${data.accommodation}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong><br>${data.message}</p>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Reyona Safaris" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your inbox
      subject: `New Safari Submission from ${data.name}`,
      html: htmlTemplate,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent!" }),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
