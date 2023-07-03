import { link } from "fs";

interface CategoryType {
  id: number;
  name: string;
  link: string;
}

export const Categories: CategoryType[] = [
  {
    id: 1,
    name: "Casual & Urban Wear",
    link: "",
  },
  {
    id: 2,
    name: "T-Shirts & Tops",
    link: "",
  },
  {
    id: 3,
    name: "Shorts",
    link: "",
  },
  {
    id: 4,
    name: "Down Coats & Vests",
    link: "",
  },
  {
    id: 5,
    name: "Jeans",
    link: "",
  },
  {
    id: 6,
    name: "Jackets",
    link: "",
  },
  {
    id: 7,
    name: "Jumpers & Cardigans",
    link: ""
  },
];

export const Help: string[] = [
  "Frequently Asked Questions",
  "Returns & Exchanges",
  "Privacy Policy",
  "Terms & Conditions",
];

export const About: string[] = [
  "Our Story",
  "Journal",
  "Contact",
  "My account",
];

interface MenuType {
  id: number;
  name: string;
  submenu?: {
    id: string;
    name: string;
    link: string;
  };
  link: string;
}

export const Menu: MenuType[] = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "STORE",
    link: "/store",
  },
  {
    id: 3,
    name: "ABOUT US",
    link: "/about-us",
  },
  {
    id: 4,
    name: "CONTACT US",
    link: "/contact-us",
  },
];
