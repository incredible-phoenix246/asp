// import icons
import dicover from "../../public/icons/discover.svg";
import menuBoard from "../../public/icons/menu-board.svg";
import monitor from "../../public/icons/monitor.svg";
import people from "../../public/icons/people.svg";
import search from "../../public/icons/search.svg";
import stack from "../../public/icons/stack.svg";
import value from "../../public/value.svg";

export type NavbarLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export type FooterLinkProps = {
  company: NavbarLinkProps[];
  help: NavbarLinkProps[];
  emails: { id?: number; email: string }[];
};
export type HowItWorksProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};
export type OurValuesProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};
export type ServicesProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};

export type FAQsProps = {
  id: number;
  question: string;
  answer: string;
};

export type ApproachProps = {
  id: number;
  details: string;
};

export type PrivavyProps = {
  id: number;
  header: string;
  details: string;
};

export const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: "home", label: "home" },
  { id: 2, link: "services", label: "services" },
  { id: 3, link: "about-us", label: "about us" },
  { id: 4, link: "contacts", label: "contacts" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: "services?path=services", label: "services" },
    { id: 2, link: "about?path=about", label: "about us" },
    { id: 3, link: "contacts?path=contacts", label: "contacts" },
    { id: 4, link: "jobs?path=jobs", label: "jobs" },
  ],
  help: [
    { id: 1, link: "faq?path=faq", label: "faq" },
    { id: 2, link: "terms?path=terms", label: "terms of services" },
    { id: 3, link: "privacy?path=privacy", label: "privacy policy" },
  ],
  emails: [
    { id: 1, email: "Info@codesgranite.com" },
    { id: 2, email: "Contact@codesgranite.com" },
    { id: 3, email: "Support@codesgranite.com" },
  ],
};

export const HOW_IT_WORKS: HowItWorksProps[] = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description:
      "Kickstart your journey with an in-depth consultation. We delve into your project requirements, goals, and challenges. This phase is crucial for understanding your vision and aligning our expertise with your expectations.",
    icon: dicover,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description:
      "Our seasoned experts craft a customized plan tailored to your unique needs. This strategic roadmap outlines key milestones, timelines, and deliverables, ensuring clarity and alignment throughout the project.",
    icon: menuBoard,
  },
  {
    id: 3,
    title: "Development & Prototyping",
    description:
      "Watch your vision take shape as our skilled development team brings concepts to life. We create prototypes and iterative versions, providing you with a tangible understanding of the evolving solution and room for feedback.",
    icon: monitor,
  },
  {
    id: 4,
    title: "Collaborative Feedback",
    description:
      "Collaboration is at the heart of our process. Regular feedback loops allow you to actively participate in shaping the solution. Your insights guide the refinement process, ensuring the final product meets your expectations.",
    icon: people,
  },
  {
    id: 5,
    title: "Rigorous Testing",
    description:
      "Prior to launch, we subject the solution to rigorous testing. Our quality assurance team performs comprehensive tests, ensuring functionality, security, and optimal performance. We leave no stone unturned in delivering a robust product.",
    icon: search,
  },
  {
    id: 6,
    title: "Deployment & Integration",
    description:
      "Seamlessly integrate the solution into your existing infrastructure or launch it to the public. Our deployment process is meticulous, ensuring a smooth transition and minimal disruption to your operations.",
    icon: stack,
  },
];

export const OurValues: OurValuesProps[] = [
  {
    id: 1,
    title: "Customer Centrism",
    description:
      "Our customers are our top priority. We strive to exceed their expectations and deliver high efficiency.",
    icon: value,
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "We are committed to exceptional delivery, continuously learning and improving to provide state-of-the-art solutions.",
    icon: value,
  },
  {
    id: 3,
    title: "Collaboration",
    description:
      "We value collaboration, actively engaging with clients to ensure effective and tailored solutions.",
    icon: value,
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "We stay at the forefront of technological advancements, ensuring our solutions are adaptable and forward-thinking.",
    icon: value,
  },
  {
    id: 5,
    title: "Adaptability",
    description:
      "We are adaptable to changing needs and technologies, ensuring relevance and agility in a rapidly evolving landscape.",
    icon: value,
  },
  {
    id: 6,
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity in all our actions, ensuring trust and transparency.",
    icon: value,
  },
];


export const Services: ServicesProps[] = [
  {
    id: 1,
    title: "Broadband Internet Services",
    description:
      "We provide broadband internet services to offices, homes, and organizations using Fiber Optics, Microwave, or Satellite VSAT technology.",
    icon: dicover,
  },
  {
    id: 2,
    title: "LAN Deployment and Management",
    description:
      "We manage the ever-changing technology needs of your business or home, allowing you to focus on your primary operations.",
    icon: menuBoard,
  },
  {
    id: 3,
    title: "Software-as-a-Service",
    description:
      "We offer customizable solutions to improve productivity and efficiency, available as a one-off solution or a subscription-based service.",
    icon: monitor,
  },
  {
    id: 4,
    title: "VOIP Solution",
    description:
      "Our Voice Over IP solution provides both internal and external communications with low call rates to all mobile service providers in Nigeria.",
    icon: people,
  },
  {
    id: 5,
    title: "Cyber Security-as-a-Service",
    description:
      "We provide security for your data from cyber-attacks and educate your team on recent cyber threats and how to avoid them.",
    icon: search,
  },
  {
    id: 6,
    title: "Other Services",
    description:
      "We offer additional services including Smart Homes IoT and CCTV Installations, and Procurement-as-a-Service.",
    icon: stack,
  },
];

export const FAQS: FAQsProps[] = [
  {
    id: 1,
    question: "What is Aspace Network and Technology Limited?",
    answer:
      "Aspace Network and Technology Limited is a technology firm specializing in developing and delivering cutting-edge technology solutions for businesses and organizations. Our team of experienced engineers, developers, designers, and educational experts collaborates to create solutions that address the unique challenges faced by schools and educational organizations.",
  },
  {
    id: 2,
    question: "What services does Aspace Network and Technology Limited offer?",
    answer:
      "We offer a variety of services including Broadband Internet Services, LAN Deployment and Management, Software-as-a-Service, VOIP Solutions, Cyber Security-as-a-Service, and other services such as Smart Homes IoT and CCTV Installations, and Procurement-as-a-Service.",
  },
  {
    id: 3,
    question:
      "How does Aspace Network and Technology Limited approach customer service?",
    answer:
      "Customer Centrism is one of our core values. We believe we exist because of our customers, and they are our top priority. We stay at the forefront of our customers’ needs and work to provide them with ease and high efficiency, earning a reputation for reliability, quality, and customer satisfaction.",
  },
  {
    id: 4,
    question:
      "What makes Aspace Network and Technology Limited different from other technology firms?",
    answer:
      "We pride ourselves on our values of excellence, collaboration, and innovation. Our diverse and diligent approach ensures zero room for mediocrity. We actively engage with clients to understand their requirements, delivering tailored and effective solutions while staying at the forefront of technological advancements.",
  },
  {
    id: 5,
    question:
      "Can Aspace Network and Technology Limited help with cybersecurity?",
    answer:
      "Yes, we offer Cyber Security-as-a-Service. We provide security for all your data from cyber-attacks and educate your team on recent cyber threats and how to avoid them, ensuring your business and homes are protected.",
  },
  {
    id: 6,
    question:
      "What is the team culture like at Aspace Network and Technology Limited?",
    answer:
      "Our expatriate team is young, dynamic, and enthusiastic. We value our team highly, ensuring they are well-equipped to serve our customers. We foster a culture of collaboration, continuous learning, and excellence, ensuring our team goes the extra mile to achieve customer satisfaction.",
  },
];

export const APPROACH: ApproachProps[] = [
  {
    id: 1,
    details: "Customer Centrism",
  },
  {
    id: 2,
    details: "Excellence",
  },
  {
    id: 3,
    details: "Collaboration",
  },
  {
    id: 4,
    details: "Innovation",
  },
  {
    id: 5,
    details: "Adaptability",
  },
];


export const PRIVACY_POLICY: PrivavyProps[] = [
  {
    id: 1,
    header: "Privacy Policy",
    details:
      "At Code Granites, we are committed to protecting your privacy and ensuring the security of your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.",
  },
  {
    id: 2,
    header: "What this Privacy Policy Covers",
    details:
      "At Code Granites, we are committed to protecting your privacy and ensuring the security of your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.",
  },
  {
    id: 3,
    header: "Information Collection",
    details:
      "We collect only the necessary information required to provide you with our services and enhance your user experience.",
  },
  {
    id: 4,
    header: "Data Security",
    details:
      "Your data is treated with the utmost confidentiality, and we employ industry-standard security measures to protect it from unauthorized access.",
  },
  {
    id: 5,
    header: "Third-Party Disclosure",
    details:
      "We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent.",
  },
  {
    id: 6,
    header: "Cookie Usage",
    details:
      "Our website may use cookies to improve user experience. You can manage cookie preferences through your browser settings.",
  },
];
