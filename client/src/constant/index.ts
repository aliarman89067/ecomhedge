import { HomeIcon, PhoneIcon, SquareMenuIcon, UserIcon } from "lucide-react";

export const navbarLinks = [
  {
    id: 1,
    label: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    id: 2,
    label: "Services",
    icon: SquareMenuIcon,
    href: "/services",
  },
  {
    id: 3,
    label: "About",
    icon: UserIcon,
    href: "/about",
  },
  {
    id: 4,
    label: "Contact",
    icon: PhoneIcon,
    href: "/contact",
  },
];

// export const contractTypes = [
//   {
//     label: "amazon-fba",
//     title: "Amazon FBA",
//   },
//   {
//     label: "amazon-private",
//     title: "Amazon Private",
//   },
//   {
//     label: "amazon-reinstatement",
//     title: "Amazon Reinstatement",
//   },
//   {
//     label: "shopify-automation",
//     title: "Shopify Automation",
//   },
//   {
//     label: "walmart-automation",
//     title: "Walmart Automation",
//   },
//   {
//     label: "tiktok-automation",
//     title: "Tiktok Automation",
//   },
// ];

export const contractTypes = [
  {
    label: "amazon-fba",
    title: "Amazon FBA Automation",
  },
  {
    label: "amazon-private",
    title: "Amazon Private Label",
  },
  {
    label: "amazon-reinstatement",
    title: "Amazon Reinstatement",
  },
  {
    label: "shopify-automation",
    title: "Shopify Automation",
  },
  {
    label: "walmart-automation",
    title: "Walmart Automation",
  },
  {
    label: "tiktok-automation",
    title: "Tiktok Automation",
  },
];

export const servicesData = [
  {
    label: "Amazon FBA Automation",
    desc: "Effortlessly scale your business with automated Amazon FBA solutions.",
    href: "/amazon-fba-automation",
    imgSrc: "/services-list/amazon-private-label.jpg",
    videoSrc: "/new/hero/amazon-fba.mp4",
  },
  {
    label: "Tiktok Shop Automation",
    desc: "Launch your TikTok Shop Store and earn Monthly passive income.",
    href: "/tiktok-shop-automation",
    imgSrc: "/services-list/tiktok-shop-automation.jpg",
    videoSrc: "/new/hero/tiktok-shopping.mp4",
  },
  {
    label: "Amazon Private Label",
    desc: "Effortlessly scale your business with automated Amazon FBA solutions.",
    href: "/amazon-private-label",
    imgSrc: "/services-list/amazon-label-automation.jpg",
    videoSrc: "/new/hero/amazon-private.mp4",
  },
  {
    label: "Walmart Automation",
    desc: "Streamline your business operations, driving efficiency and success with Walmart Automation.",
    href: "/walmart-automation",
    imgSrc: "/services-list/walmart-automation.jpg",
    videoSrc: "/new/hero/walmart.mp4",
  },
  {
    label: "Account Reinstatement",
    desc: "Efficient Solutions to Swiftly Regain Control of Your platform account",
    href: "/account-reinstatement",
    imgSrc: "/services-list/account-reinstatement.jpg",
    videoSrc: "/new/hero/account-reinstatement.mp4",
  },
  {
    label: "Shopify Automation",
    desc: "Simplify your e-commerce success with automated Shopify dropshipping.",
    href: "/shopify-dropshipping-automation",
    imgSrc: "/services-list/shopify-automation.jpg",
    videoSrc: "/new/hero/shopify-automation.mp4",
  },
];
