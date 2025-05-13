// // "use client";

// // import React from "react";
// // import { useState } from "react";
// // import { useSearchParams } from "next/navigation";
// // import Image from "next/image";
// // import { resetPasswordAction } from "@/app/actions";

// // export default function ResetPasswordPage() {
// //   const searchParams = useSearchParams();
// //   const token = searchParams.get("token"); // assuming token is passed via URL

// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       setMessage("Passwords do not match");
// //       return;
// //     }

// //     if (!token) {
// //       setMessage("Invalid or missing token");
// //       return;
// //     }

// //     setIsSubmitting(true);
// //     const formData = new FormData();
// //     formData.append("token", token);
// //     formData.append("password", password);

// //     // const result =
// //     await resetPasswordAction(formData);
// //     setIsSubmitting(false);

// //     // if (result.error) {
// //     //   setMessage(result.error);
// //     // } else {
// //     //   setMessage("Password reset successful! You can now log in.");
// //     // }
// //   };

// //   return (
// //     <main className="flex items-center justify-center min-h-screen bg-black/80 backdrop-blur-sm font-montserrat px-4">
// //       <div className="bg-[#cdd3e0] rounded-xl p-8 w-full max-w-md text-center relative">
// //         {/* Logo */}
// //         <Image
// //           src="/white-favicon.png"
// //           alt="Leximpact Logo"
// //           width={64}
// //           height={64}
// //           className="mx-auto mb-4"
// //         />

// //         {/* Title */}
// //         <h2 className="text-2xl font-bold text-black mb-1">Leximpact</h2>
// //         <h3 className="text-xl font-semibold text-black mb-4">
// //           Set a New Password
// //         </h3>
// //         <p className="text-sm text-black mb-6">
// //           Enter a new password for your account.
// //         </p>

// //         {/* Message */}
// //         {message && (
// //           <p className="mb-4 text-sm text-red-600 font-medium">{message}</p>
// //         )}

// //         {/* Form */}
// //         <form onSubmit={handleSubmit} className="space-y-4 text-left">
// //           <div>
// //             <label className="block mb-1 font-medium text-black">
// //               New Password
// //             </label>
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="w-full px-5 py-3 rounded-full border border-[#021488] outline-none"
// //             />
// //           </div>

// //           <div>
// //             <label className="block mb-1 font-medium text-black">
// //               Confirm Password
// //             </label>
// //             <input
// //               type="password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //               className="w-full px-5 py-3 rounded-full border border-[#021488] outline-none"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             disabled={isSubmitting}
// //             className="w-full py-3 rounded-full bg-[#021488] text-white font-semibold text-lg shadow-lg shadow-black"
// //           >
// //             {isSubmitting ? "Resetting..." : "Reset Password"}
// //           </button>
// //         </form>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import { resetPasswordAction } from "@/app/actions";

// export default function ResetPasswordClient() {
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match");
//       return;
//     }

//     if (!token) {
//       setMessage("Invalid or missing token");
//       return;
//     }

//     setIsSubmitting(true);
//     const formData = new FormData();
//     formData.append("token", token);
//     formData.append("password", password);

//     await resetPasswordAction(formData);
//     setIsSubmitting(false);
//     // You could handle success/error messages better here if needed
//   };

//   return (
//     <main className="flex items-center justify-center min-h-screen bg-black/80 backdrop-blur-sm font-montserrat px-4">
//       <div className="bg-[#cdd3e0] rounded-xl p-8 w-full max-w-md text-center relative">
//         <Image
//           src="/white-favicon.png"
//           alt="Leximpact Logo"
//           width={64}
//           height={64}
//           className="mx-auto mb-4"
//         />
//         <h2 className="text-2xl font-bold text-black mb-1">Leximpact</h2>
//         <h3 className="text-xl font-semibold text-black mb-4">
//           Set a New Password
//         </h3>
//         <p className="text-sm text-black mb-6">
//           Enter a new password for your account.
//         </p>

//         {message && (
//           <p className="mb-4 text-sm text-red-600 font-medium">{message}</p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4 text-left">
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               New Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-5 py-3 rounded-full border border-[#021488] outline-none"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full px-5 py-3 rounded-full border border-[#021488] outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full py-3 rounded-full bg-[#021488] text-white font-semibold text-lg shadow-lg shadow-black"
//           >
//             {isSubmitting ? "Resetting..." : "Reset Password"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

import React from 'react'

const ResetPasswordPage = () => {
  return (
    <div>ResetPasswordPage</div>
  )
}

export default ResetPasswordPage
