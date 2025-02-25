export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/relap.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "React Query, Zustand, Framer Motion, Aceternity, Tailwind, Redux, Axios, etc",
    description: "Experience with a variety of libraries and packages",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Relap Landing Page",
    des: "Modern mobile responsive landing page made with Next.js, TypeScript, TailwindCSS, Framer Motion.",
    img: "/relap.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://relap-landing-page.vercel.app/",
  },
  {
    id: 2,
    title: "Gastapp Admin Dashboard",
    des: "Modern admin dashboard for a gas order and delivery service",
    img: "/gastapp.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://gastapp-admin-webapp.vercel.app/home",
  },
  {
    id: 3,
    title: "Interior Plants Decor Landing Page",
    des: "Modern mobile responsive landing page made with Next.js, TypeScript, TailwindCSS, Framer Motion.",
    img: "/daunku.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://unclejames-interior-decor.vercel.app/",
  },
  {
    id: 4,
    title: "React Movie Website",
    des: "Movie website made with React.js, JavaScript and Styled Components with data coming from The Movie DB",
    img: "/rmdb.png",
    iconLists: ["/re.svg", "/js.svg", "/sc.svg"],
    link: "https://unclejames-movies.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "From day one, Ebuka impressed us with his technical skills and problem-solving mindset. He approaches every task with enthusiasm and precision, ensuring the project stays on track. His ability to explain complex concepts in simple terms made working together effortless. A true professional through and through.",
    name: "Sunny Osaje",
    title: "CEO of Inspired Technologies",
  },
  {
    quote:
      "Ebuka is hands down one of the best developers I've worked with. He doesn't just execute tasks—he elevates ideas. His attention to detail, combined with a proactive approach and clear communication, made the entire process smooth and stress-free. If you want someone who delivers quality while being an absolute professional, look no further.",
    name: "Jonathan Ebhota",
    title: "Supervisor and Lead Developer at Risigner Innovations",
  },
  {
    quote:
      "Working with Ebuka was an absolute game-changer for our project. His frontend skills are top-notch, but what truly stood out was his ability to think outside the box and find creative solutions to complex challenges. Communication was seamless, and he always kept us in the loop. It felt like having a true partner invested in our success.",
    name: "Ayobami Ajala",
    title: "Founder, Conduit",
  },
  {
    quote:
      "Ebuka doesn't just build websites; he crafts experiences. His keen eye for design, attention to user experience, and thoughtful suggestions made all the difference. What stood out most was his attitude—positive, solution-oriented, and always willing to go the extra mile. It's been an absolute pleasure working with him.",
    name: "Michael Fred",
    title: "CTO at Inspired Technologies",
  },
  {
    quote:
      "I can't recommend Ebuka enough. He not only brought our vision to life with stunning frontend work but also anticipated needs we hadn't even considered. His communication was flawless—always responsive, clear, and collaborative. It's rare to find someone so talented and easy to work with.",
    name: "Rasheed Oricha",
    title: "CTO at ZKYTE Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Developed various web and mobile app solutions ranging from dashboards to command and control systems with various technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Frontend Developer",
    desc: "Developed modern, user & mobile-friendly web app solutions for clients using Next.js, React.js, TypeScript, JavaScript and TailwindCSS.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Android Mobile App Developer Intern",
    desc: "Developed multiple Android applications using Kotlin, Java, and Android Studio, including a situation reporting app for real-time data collection",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Junior Embedded Systems Engineer",
    desc: "Programmed microcontrollers using C/C++ and Python for embedded systems projects, focusing on performance, reliability, and hardware integration.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/unclejames2610",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/chukwuebuka-udeala-989872188/",
  },
];
