interface SocialMedia {
    name: string;
    url: string;
}

interface Data {
    email: string;
    socialMedia: SocialMedia[];
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
            url: "https://www.facebook.com/profile.php?id=61559885794014",
        }, 
        {
            name: "Telegram",
            url: "https://t.me/usmonkul",
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/@usmonkul",
        }
    ]
};

export default data;