import { FaMedium, FaGithub } from "react-icons/fa";
import type { ReactNode } from "react";

interface socialLinksProps {
  name: string;
  link: string;
  logo: ReactNode;
}

const socialLinks: socialLinksProps[] = [
  {
    name: "Github",
    link: "https://github.com/PanchalKeyur0806",
    logo: <FaGithub size={20} />,
  },
  {
    name: "Medium",
    link: "https://medium.com/@panchalkeyur.dev",
    logo: <FaMedium size={20} />,
  },
];

export default socialLinks;
