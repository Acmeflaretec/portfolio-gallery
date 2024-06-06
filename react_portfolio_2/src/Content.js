// import images
import Hero_person from "./assets/images/Hero/image3-removebg-preview.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Hero/a1.png";

import Hireme_person from "./assets/images/Hero/image2-removebg-preview.png";
          
// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsMapFill } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Varghese Kalathil",
    firstName: "Art",
    LastName: "ist",
    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        count: "30+",
        text: "Years of Experinse in Art",
      },
      // {
      //   count: "4+",
      //   text: "Awards received",
      // },
    ],
  },
  skills: {
    title: "PROGRAMS AND AWARDS",
    subtitle: "My Top Programs and Awards",
    skills_content: [
      {
        name: "Solo Exhibitions",
        // para: "Lorem ipsum text  dummy",
        details: ['iLLUMINATiONS - THE PERPETUAL FLOW OF TIME at Lalithakala Academy Gallery, Kozhikode, Kerala, India (2019)',
          'Selfie Series at Kannur, Kerala, India (2016)',
          'Solo Exhibition at the inaugural show of White Sanctorum Art Gallery, Bangalore (2015)',
          'Weeping Visuals at Lalithakala Academy Gallery, Kozhikode, Kerala, India (2013)',
          'Silent Sigh at Durbar Hall Art Center, Ernakulum Kochi, Kerala, India (2012)',
          'Episodes at Nanappa Art Gallery, Ernakulum Kochi, Kerala, India (2010)']

      },
      {
        name: "Exhibitions",
        parag: "Participated in many camps and exhibitions in India and abroad."
        // ['Serendipity at Gallery Veda, Chennai (2020)',
        //   'Nature group show at Gallery Veda, Chennai (2020)',
        //   'The Sentence group show at Karnataka Chitrakala Parishath Art Gallery, Bangalore (2018)',
        //   'Group Show at Onyx Corridor, Ernakulam, Kochi (2017)',
        //   'International Art Exhibition by World Wide Art Movement at Katmandu, Nepal (2017)']
        
      },
      // {
      //   name: "State Exhibitions",
      //   parag: "I have participated in several state exhibitions organized by the Kerala Lalithakala Academy, Ernakulum, across different years.",
        
      // },
      // {
      //   name: "Camps",
      //   parag: "I have actively participated in numerous camps organized by various institutions, exploring themes ranging from portraiture to landscape and conservation of art.",
       
      // },
      {
        name: "Awards",
        details: ['Soorya Kanthi Puraskar (2018)',
          'Art Maistreo Award (2019)',
          'Kerala Lalithakala Academy Grand for Solo Exhibition (2018, 2013)',
        'Ashanthan puraskaram (2022)']
        // para: "Lorem ipsum text  dummy",
        // logo: sketch,
      },
      // {
      //   name: "Python",
      //   para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "GALLERY",
    subtitle: "My Creations",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Varghese Kalathil's work is a profound exploration of the human condition. His paintings are not just visual feasts but also deeply evocative narratives that speak to the viewer's soul. Each piece is a testament to his mastery of color, form, and emotion”",
        img: avatar1,
        name: "Dr. Anupama Menon",
        pro:'Art Critic & Historian'
        
      },
      {
        review:
          "“I have had the pleasure of curating Varghese Kalathil's exhibitions multiple times. His work never ceases to amaze me with its depth and creativity. Varghese's ability to capture fleeting moments and eternal truths on canvas is unparalleled.”",
          name: "Rajesh Nair",
          img: avatar1,
        pro:'Curator, Lalithakala Academy'
      },
      {
        review:
          "“Varghese is a true inspiration. His dedication to his craft and his continuous quest for perfection are evident in every stroke of his brush. His exhibitions are a must-see for anyone who appreciates fine art”",
          img: avatar1,
          pro:'Artist & Art Instructor',
        name: "Meera Suresh",
      },
      {
        review:
          "“Owning a piece by Varghese Kalathil is like owning a piece of history. His art is not only aesthetically pleasing but also thought-provoking. Each artwork tells a story that resonates deeply with me.”",
          img: avatar1,
          pro:'Art Collector',
        name: "Priya Menon",
      },
    ],
  },
  Hireme: {
    title: "ABOUT mE",
    subtitle: "Information about me.",
    image1: Hireme_person,
    // image2: Hireme_person2,
    para: "Greetings! I am Varghese Kalathil, an artist born in 1972 in Alappuzha, Kerala, India. With a passion for creativity that has been nurtured since my early years, I have pursued a journey through various forms of artistic expression.",
    // btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "varghesekalathil@gmail.com",
        icon: GrMail,
        link: "mailto:varghesekalathil@gmail.com",
      },
      {
        text: "+91 9495535596",
        icon: MdCall,
        link: "https://wa.me/9495535596",
      },
      {
        text: "Kalathil, Vaiparamba, Azhikode, P.O., Kannur 670009, Kerala, India",
        icon: BsMapFill,
        link: "https://www.google.com/maps/place/artist+VARGHESE+KALATHIL/@11.9243123,75.3133681,14.24z/data=!4m6!3m5!1s0x3ba417006e043d59:0xf54532123fa56ef3!8m2!3d11.9188302!4d75.3216902!16s%2Fg%2F11vm2qbhcm?entry=tts",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024 by Varghese Kalathil",
    text2: "Designed by Acmeflare",
  },
};
