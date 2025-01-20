// NOT USED
// 
// // import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = ({ isOpen, onClose }) => {
//   const [isSending, setIsSending] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const sendEmail = () => {
//     setIsSending(true);

//     const serviceId = "YOUR_SERVICE_ID";
//     const templateId = "YOUR_TEMPLATE_ID";
//     const userId = "YOUR_USER_ID";

//     const templateParams = {
//       to_name: "Andrew Cui Name",
//       from_name: "Your Name",
//       message: "This is an automatically sent email from the modal.",
//     };

//     emailjs
//       .send(serviceId, templateId, templateParams, userId)
//       .then(() => {
//         setIsSending(false);
//         setIsSuccess(true);
//         setTimeout(onClose, 2000); // Automatically close modal after success
//       })
//       .catch((error) => {
//         console.error("Email sending error: ", error);
//         setIsSending(false);
//       });
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1000,
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "20px",
//           borderRadius: "8px",
//           maxWidth: "400px",
//           textAlign: "center",
//         }}
//       >
//         <h2>Send Email</h2>
//         <p>
//           Are you sure you want to send an email? This action will send an email
//           automatically.
//         </p>
//         {!isSending && !isSuccess && (
//           <>
//             <button
//               style={{ margin: "10px", padding: "10px 20px", cursor: "pointer" }}
//               onClick={sendEmail}
//             >
//               Send Email
//             </button>
//             <button
//               style={{ margin: "10px", padding: "10px 20px", cursor: "pointer" }}
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//           </>
//         )}
//         {isSending && <p>Sending email...</p>}
//         {isSuccess && <p>Email sent successfully!</p>}
//       </div>
//     </div>
//   );
// };

// export default ContactForm;