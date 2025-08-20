interface SocialMedia {
    name: string;
    url: string;
}

interface ExperienceItem {
    id: string;
    title: {
        en: string;
        uz: string;
    };
    company: string;
    date: {
        en: string;
        uz: string;
    };
    description: {
        en: string[];
        uz: string[];
    };
    stack: string[];
    location?: string;
    type?: 'full-time' | 'part-time' | 'internship' | 'freelance' | 'contract';
}

interface Project {
    id: string;
    title: string;
    github: string;
    external: string;
    tech: string[];
    showInProjects: boolean;
    info: string;
    category: 'frontend' | 'fullstack' | 'backend' | 'design' | 'other';
}

interface Data {
    email: string;
    socialMedia: SocialMedia[];
    experience: ExperienceItem[];
    projects: Project[];
}

const data: Data = {
    email: 'usmonhakimov1999@gmail.com',
    socialMedia: [
        {
            name: "GitHub",
            url: "https://github.com/Usmonkul",
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/usmonkul-khakimov/",
        },
        {
            name: "Twitter",
            url: "https://x.com/UsmonHakim",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/usmon_khakim/",
        }, 
        {
            name: "Telegram",
            url: "https://t.me/usmonkul",
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/@usmonkul",
        }
    ],
    experience: [
        {
            id: "ilmla",
            title: {
                en: "Programming Instructor",
                uz: "Dasturlash o'qituvchisi"
            },
            company: "Ilmla IT Talim",
            date: {
                en: "September 2024 - Present",
                uz: "Sentabr 2024 - Hozir"
            },
            type: "full-time",
            location: " Samarkand, Uzbekistan",
            description: {
                en: [
                    "Teach Programming Foundations to students aged 10–25, covering core concepts of problem-solving, algorithms, and coding logic.",
                    "Deliver a comprehensive Front-End Development curriculum, including HTML, CSS, JavaScript, React, TypeScript, and related technologies.",
                    "Guide and mentor students in building real-world projects for local clients, from planning to deployment, fostering both technical skills and teamwork."
                ],
                uz: [
                    "10-25 yoshdagi o'quvchilarga Dasturlash asoslarini o'rgatish, muammolarni hal qilish, algoritmlar va kodlash mantiqining asosiy tushunchalarini qamrab oladi.",
                    "HTML, CSS, JavaScript, React, TypeScript va tegishli texnologiyalarni o'z ichiga olgan keng qamrovli Front-End Development o'quv dasturini o'rgatish.",
                    "O'quvchilarni mahalliy mijozlar uchun haqiqiy dunyo loyihalarini qurishda yo'riqnoma berish va mentorlash, rejalashtirishdan joylashtirish gacha, texnik ko'nikmalar va jamoa ishini rivojlantirish."
                ]
            },
            stack: [
                "React.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Python",
                "Flask",
                "SQLite",
                "Figma",
                "Notion",
            ],
          },
          {
            id: "goqba",
            title: {
                en: "Software Engineer",
                uz: "Dastur muhandisi"
            },
            company: "GoQba Technology",
            date: {
                en: "September 2023 - August 2024",
                uz: "Sentabr 2023 - Avgust 2024"
            },
            type: "full-time",
            location: "Seoul, South Korea",
            description: {
                en: [
                    "Developed and managed front-end code for over four websites",
                    "Conducting research and designing single-page websites and components",
                    "Contributed to backend development for the administrative platform, incorporating CRUD operations through Flask and MySQL",
                ],
                uz: [
                    "To'rtdan ortiq veb-saytlar uchun front-end kodlarini ishlab chiqish va boshqarish",
                    "Bir sahifali veb-saytlar va komponentlarni tadqiq qilish va dizayn qilish",
                    "Flask va MySQL orqali CRUD operatsiyalarini o'z ichiga olgan ma'muriy platforma uchun backend ishlab chiqishda hissa qo'shish",
                ]
            },
            stack: [
                "Python",
                "Flask",
                "Next.js",
                "React.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "MySQL",
                "Figma",
                "Notion",
            ],
        },
        {
            id: "intern",
            title: {
                en: "Front-end Developer Internship",
                uz: "Front-end Dasturchi Amaliyot"
            },
            company: "IDR Envision",
            date: {
                en: "March 2023 - May 2023",
                uz: "Mart 2023 - May 2023"
            },
            type: "internship",
            location: "Seoul, South Korea",
            description: {
                en: [
                    "Build a dynamic administration web app",
                    "Gathered functional and non-functional requirements, and created high-level design diagrams",
                    "Draw wireframe and design website UI using Figma",
                ],
                uz: [
                    "Dinamik ma'muriy veb-ilovani qurish",
                    "Funktsional va funktsional bo'lmagan talablarni to'plash va yuqori darajadagi dizayn diagrammalarini yaratish",
                    "Figma yordamida veb-sayt UI sini chizish va dizayn qilish",
                ]
            },
            stack: [
                "React.js",
                "TypeScript",
                "JavaScript",
                "Figma",
                "Tailwind CSS",
            ],
        },
        {
            id: "freelance",
            title: {
                en: "Freelance Web Developer",
                uz: "Mustaqil Veb-Dasturchi"
            },
            company: "Freelance",
            date: {
                en: "January 2021 - February 2023",
                uz: "Yanvar 2021 - Fevral 2023"
            },
            type: "freelance",
            location: "Remote",
            description: {
                en: [
                    "Collaborated with a team of developers or individually to build modern and responsive web applications using best practices.",
                    "Build semantically structured web applications.",
                    "Developed, maintained, and shipped production code for client websites.",
                ],
                uz: [
                    "Dasturchilar jamoasi bilan hamkorlik qilish yoki individual ravishda eng yaxshi amaliyotlardan foydalanib zamonaviy va responsive veb-ilovalarni qurish.",
                    "Semantik tarzda tuzilgan veb-ilovalarni qurish.",
                    "Mijozlar veb-saytlari uchun production kodlarini ishlab chiqish, saqlash va yetkazib berish.",
                ]
            },
            stack: [
                "Next.js",
                "React.js",
                "TypeScript",
                "JavaScript",
                "Figma",
                "Formik",
                "Auth",
                "Firebase",
                "Firestore",
                "Node - Express",
                "Payment - Stripe",
            ],
        },
    ],
    projects: [
        {
            id: 'marico',
            title: 'Marico',
            github: "https://github.com/usmonkul/marico",
            external: "https://marico-xi.vercel.app/",
            tech: [
              "Next js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "SQLite",
            ],
            showInProjects: true,
            info: "The Marico website is a cutting-edge web application that helps to connect Creators with their audience.",
            category: 'frontend',
        },
        {
            id: 'movie-app',
            title: "Movie App",
            github: "https://github.com/Usmonkul/nextjs-movie-app",
            external: "https://my-movie-app-beta.vercel.app/auth",
            tech: [
              "NextJS",
              "Tailwind CSS",
              "TypeScript",
              "NodeJS",
              "ExpressJS",
              "React",
              "Zustand",
              "Stripe",
              "Firebase",
              "Formik",
            ],
            showInProjects: true,
            info: "Full Stack Movie app. The users can buy a subscription, login and register on the app. Then, they will be able to watch the movies trailer and get information about them.",
            category: 'fullstack',
          },
          {
            id: 'natours',
            title: "Natours",
            github: "https://github.com/Usmonkul/Natours",
            external: "https://natours-huh.netlify.app",
            tech: ["HTML", "SCSS", "Fully-Responsive"],
            showInProjects: true,
            info: "Natours is fully responsive tour agency website built by only using HTML and SCSS. All the interaction and animations are the result of CSS code. It show the power of CSS.",
            category: 'frontend',
          },
          {
            id: 'medimatrix',
            title: "MediMatrix",
            github: "https://www.figma.com/file/9KdB23BBNdA8izTuWZRTPu/medimatrix?type=design&node-id=0%3A1&mode=design&t=Gds3ust7EHpGnVXw-1",
            external: "https://www.figma.com/file/9KdB23BBNdA8izTuWZRTPu/medimatrix?type=design&node-id=0%3A1&mode=design&t=Gds3ust7EHpGnVXw-1",
            tech: [
              "Figma",
              "Wireframe",
              "Design",
              "UI & UX"
            ],
            showInProjects: true,
            info: "The Medimatix is a medical platform website design. Designed by using Figma.",
            category: 'design',
          },
          {
            id: 'checkie-inspection-app',
            title: "Checkie inspection app",
            github: "https://github.com/Usmonkul/checkie-manager",
            external: "https://checkie-manager.vercel.app",
            tech: [
              "Next js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Formik",
              "Figma",
            ],
            showInProjects: true,
            info: "Inspection manager app that Inspector able to create inspection target, inspection items, inspectors to monitor inspections on a target place",
            category: 'frontend',
          },
          
    ]
};

// Debug log to help with production issues
console.log('Data loaded:', { 
  socialMediaCount: data.socialMedia?.length, 
  experienceCount: data.experience?.length, 
  projectsCount: data.projects?.length 
});

export default data;

// Safe data access utility
export const getData = () => {
  try {
    // Validate data structure
    if (!data || typeof data !== 'object') {
      console.error('Data is not properly loaded');
      return {
        email: 'usmonhakimov1999@gmail.com',
        socialMedia: [],
        experience: [],
        projects: []
      };
    }

    // Validate required arrays
    if (!Array.isArray(data.socialMedia)) {
      console.error('socialMedia is not an array');
      data.socialMedia = [];
    }
    
    if (!Array.isArray(data.experience)) {
      console.error('experience is not an array');
      data.experience = [];
    }
    
    if (!Array.isArray(data.projects)) {
      console.error('projects is not an array');
      data.projects = [];
    }

    // Validate experience items
    if (data.experience.length > 0) {
      data.experience.forEach((exp, index) => {
        if (!exp.description || !exp.description.en || !exp.description.uz) {
          console.error(`Experience item ${index} is missing description data:`, exp);
        }
      });
    }

    // Validate project items
    if (data.projects.length > 0) {
      data.projects.forEach((project, index) => {
        if (!project.tech || !Array.isArray(project.tech)) {
          console.error(`Project item ${index} is missing tech array:`, project);
        }
      });
    }

    console.log('Data validation passed:', { 
      socialMediaCount: data.socialMedia?.length, 
      experienceCount: data.experience?.length, 
      projectsCount: data.projects?.length 
    });

    return data;
  } catch (error) {
    console.error('Error accessing data:', error);
    return {
      email: 'usmonhakimov1999@gmail.com',
      socialMedia: [],
      experience: [],
      projects: []
    };
  }
};