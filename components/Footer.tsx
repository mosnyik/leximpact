import React from "react";
import { Instagram, Linkedin, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Help", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const communityLinks = [
    { label: "Discord", href: "#" },
    { label: "Slack", href: "#" },
    { label: "Github", href: "#" },
  ];

  const serviceLinks = [
    { label: "AI Academy", href: "#" },
    { label: "Cloud Computing", href: "#" },
    { label: "Data Center", href: "#" },
  ];

  return (
    <footer className="bg-[#021488] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/white-favicon.png"
              alt="Leximpact Logo"
              className="w-8 h-8"
            />
            <span className="text-base font-bold">Leximpact</span>
          </div>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 2 */}

        <div>
          <h4 className="font-semibold mb-4">Communities</h4>
          <ul className="space-y-2 text-sm">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@leximpact.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Enugu, Nigeria
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com/lexrunit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/lexrunit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-gray-300" />
            </a>
            <a
              href="https://youtube.com/@leximpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5 hover:text-gray-300" />
            </a>
            <a
              href="https://x.com/lexrunit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-white w-6 h-6 bg-[#021488] rounded flex items-center justify-center text-sm font-bold border border-white hover:bg-white hover:text-[#021488]">
                X
              </div>
            </a>
          </div>
        </div>
      </div>

      <hr className="my-10 border-white/20" />

      <p className="text-center text-xs text-white/70">
        © 2025 Leximpact. All rights reserved.
      </p>
    </footer>
  );
}
