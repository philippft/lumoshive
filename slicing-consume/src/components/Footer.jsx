
import Instagram from "../assets/sc-instagram.svg";
import Facebook from "../assets/facebook-rect.svg";
import Twitter from "../assets/twitter-solid.svg";
import Github from "../assets/github.svg";


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

  const FooterSocialMedia = [
    { id: 1, icon: Instagram, alt: "Instagram" },
    { id: 2, icon: Facebook, alt: "Facebook" },
    { id: 3, icon: Twitter, alt: "Twitter" },
    { id: 4, icon: Github, alt: "Github" },
    { id: 5, icon: Instagram, alt: "Instagram" },
  ];

  return (
    <footer className="bg-footer-dark text-white px-10 py-16 font-saira">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-2xl font-bold mb-6 md:mb-0">FurniShop</h2>

          <div className="flex gap-4">
            {FooterSocialMedia.map((icon) => (
              <div
                key={icon.id}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all"
              >
                <img
                  src={icon.icon}
                  alt={icon.alt}
                  className="w-5 h-5 brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-border-line mb-16"></div>

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

        <div className="text-center text-white/60 text-sm">
          <p>© NameBrand 2022 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
