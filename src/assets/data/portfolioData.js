import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-05.png";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "full-stack",
    title: "Sports Academy ",
    
    technologies: ["React", "Tailwind css", "Firebase", "Node.js", "MongoDB"],
    siteUrl: "#",
    demo: "https://summer-camp-12.web.app/",
    client: "https://github.com/rakib-molla/summer-camp-client",
    server: "https://github.com/rakib-molla/summer-camp-server",
    details: "Sports Academies is a full-stack web application with an admin, instructor, and student dashboard  Students can view & Select available classes and enroll in the chosen class Admin can approve and Denay posts and manage user role",
  },

  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "full-stack",
    title: "Toy MarketPlace",
    technologies: ["React", "Tailwind css", "Firebase", "Node.js", "MongoDB"],
    siteUrl: "#",
    demo: "https://toy-marketplace-assignment-11.web.app/",
    client: "https://github.com/rakib-molla/toy-market-client",
    server: "https://github.com/rakib-molla/toy-market-server",
    details: "Toy Marketplace is a React web application  Users can create accounts and log in to access Using Firebase Login System Integration The user added to update and deleted the toy"
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "front-end",
    title: "Restaurant Website",
    technologies: ["React", "Tailwind css", "Firebase", ],
    siteUrl: "#",
    demo: "https://chef-client-assignment-10.web.app/",
    client: "https://github.com/rakib-molla/recipe-hunter-webiste-client",
    server: "https://github.com/rakib-molla/recipe-hunter-webiste-server",
    details: "Restaurant Website website are fully responsive",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "front-end",
    title: "Knowledge CAFE",
    technologies: ["React", "Tailwind css",],
    siteUrl: "#",
    demo: "https://fascinating-souffle-692e7e.netlify.app/",
    client: "https://github.com/rakib-molla/knowledge-cafe-react-frontend",
    server: "",
    details: "Knowledge CAFE website are fully responsive",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "front-end",
    title: "Product Selling Website",
    technologies: ["HTML","CSS", "Tailwind css",],
    siteUrl: "#",
    demo: "https://benevolent-chebakia-879349.netlify.app/",
    client: "",
    server: "",
    details: "Product Selling Website website are fully responsive",
  },
 

];

export default portfolios;
