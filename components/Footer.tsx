// components/Footer.tsx
import { Instagram, Linkedin, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#021488] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <div className="text-2xl font-bold mb-4">Leximpact</div>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Partners</li>
            <li>Help</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-4">Communities</h4>
          <ul className="space-y-2 text-sm">
            <li>Discord</li>
            <li>Slack</li>
            <li>Github</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>AI Academy</li>
            <li>Cloud Computing</li>
            <li>Data Center</li>
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
            <Instagram className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
            <div className="bg-white w-6 h-6 text-[#021488] rounded flex items-center justify-center text-sm font-bold">
              X
            </div>
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
