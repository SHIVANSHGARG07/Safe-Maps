// const nodemailer = require('nodemailer');
// const User = require('../models/user'); // Assuming you have a user model
// const sendEmail = require('../utils/nodemailerConfig'); // Your existing email function

// exports.sendReportsByEmail = async (req, res) => {
//   const { email, reports } = req.body;

//   try {
//     // Find the user based on the provided email
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.json({ message: "User not registered" });
//     }

//     // Generate an email content with the provided reports
//     let emailContent = `<h2>Reports</h2>`;
//     reports.forEach((report) => {
//       emailContent += `
//         <div>
//           <h3>${report.title}</h3>
//           <p>${report.description}</p>
//           <p><strong>Type:</strong> ${report.type}</p>
//           <p><strong>Time:</strong> ${report.time}</p>
//           <p><strong>Contact:</strong> ${report.contact}</p>
//           <p><strong>Address:</strong> ${report.address}</p>
//           ${report.images.length > 0 ? '<p><strong>Images:</strong></p>' : ''}
//           ${report.images.map(img => `<img src="${img}" alt="Report Image" width="100" height="100" />`).join('')}
//           <hr />
//         </div>
//       `;
//     });

//     // Set up nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'shivanshgarg587@gmail.com', // Sender's email
//         pass: 'vpey sfbh bstw cbaq' // Sender's email password
//       }
//     });

//     // Define mail options
//     const mailOptions = {
//       from: 'shivanshgarg587@gmail.com',
//       to: user.email, // The recipient's email
//       subject: 'Reports Notification',
//       html: emailContent
//     };

//     // Send the email
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         return res.json({ message: "Error sending email" });
//       } else {
//         return res.json({ status: true, message: 'Email sent successfully!' });
//       }
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Failed to send email.' });
//   }
// };

const nodemailer = require('nodemailer');
const User = require('../models/user'); // Assuming you have a user model

exports.sendReportsByEmail = async (req, res) => {
  const { email, reports } = req.body;

  try {
    // Find the user based on the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not registered" });
    }

    // Generate an email content with the provided reports
    let emailContent = `<h2>Reports</h2>`;
    reports.forEach((report) => {
      emailContent += `
        <div>
          <h3>${report.title}</h3>
          <p>${report.description}</p>
          <p><strong>Type:</strong> ${report.type}</p>
          <p><strong>Time:</strong> ${report.time}</p>
          <p><strong>Contact:</strong> ${report.contact}</p>
          <p><strong>Address:</strong> ${report.address}</p>
          ${report.images.length > 0 ? '<p><strong>Images:</strong></p>' : ''}
          ${report.images.map(img => `<img src="${img}" alt="Report Image" width="100" height="100" />`).join('')}
          <hr />
        </div>
      `;
    });

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shivanshgarg587@gmail.com', // Replace with your email
        pass: 'vpey sfbh bstw cbaq'   // Replace with your email password
      }
    });

    // Define mail options
    const mailOptions = {
      from: 'your-email@gmail.com', // Replace with your email
      to: email, // The recipient's email
      subject: 'Reports Notification',
      html: emailContent
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error sending email:', error);
        return res.json({ message: "Error sending email" });
      } else {
        return res.json({ status: true, message: 'Email sent successfully!' });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};
