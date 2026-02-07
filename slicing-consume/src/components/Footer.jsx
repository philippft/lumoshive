import React from "react";
// Import ikon jika kamu menggunakan library icon
// import { Instagram, Facebook, Twitter, Github } from "lucide-react";



export default function Footer() {
  const footerSections = [
    {
      title: "Our Products",
      links: ["The Support Suite", "The Sales Suite", "Support", "Guide"],
    },
    {
      title: "Top Features",
      links: [
        "Ticketing System",
        "Knowledge Base",
        "Community Forums",
        "Help Desk Software",
      ],
    },
    {
      title: "Resources",
      links: ["Product Support", "Request Demo", "Library", "Peoplepower Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Press", "Investors", "Events"],
    },
    {
      title: "Favourite Things",
      links: [
        "For Enterprise",
        "For Startups",
        "For Benchmark",
        "For Small Business",
      ],
    },
  ];

  return (
    <footer className="bg-footer-dark text-white px-10 py-16 font-saira">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-2xl font-bold mb-6 md:mb-0">FurniShop</h2>

          <div className="flex gap-4">
            {/* Ganti dengan ikon asli sesuai library yang kamu pakai */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all"
              >
                <span className="text-sm">O</span>
              </div>
            ))}
          </div>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="w-full h-[1px] bg-border-line mb-16"></div>

        {/* MIDDLE SECTION: Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-20">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4 text-white/70">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>© NameBrand 2022 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
