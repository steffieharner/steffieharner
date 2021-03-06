const siteMetadata = {
    title: `STEFFIE HARNER | Tokyo-based cyberpunk model & software engineer`,
    siteUrl: `https://steffieharner.netlify.com`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    headshot: `/images/headshot.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `tokyo-based model | concept artist | developer`,
    description: `Tokyo-based cyberpunk-obsessed, freelance model & software engineer. \n\n よろしくお願いします。`,
    author: `@steffieharner`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "home",
            url: "/"
        },
        {
            name: "about",
            url: "/about"
        },
        // {
        //     name: "blog",
        //     url: "/blog"
        // },
        {
            name: "portfolio",
            url: "/portfolio"
        },
        {
            name: "bookings",
            url: "https://ko-fi.com/steffieharner/commissions"
        },
        {
            name: "support",
            url: "https://ko-fi.com/steffieharner"
        }
    ],
    footerLinks: [
        // {
        //     name: "PRIVACY POLICY",
        //     url: "/privacy-policy"
        // }
    ],
    social: [
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/steffieharner"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://www.twitter.com/steffieharner"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/steffieharner"
        },
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/steffieharner"
        },
        {
            name: "Github",
            icon: "/images/Github.svg",
            url: "https://www.github.com/steffieharner"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "",
        description: `for model rates, business inquiries, collaboration requests ー by email only please! `,
        mail: "hi@steffieharner.com"
    }
    // this is optional. you can uncomment this if you use disqus
    // disqus: `your-disqus-shortname`
};

const plugins = [
    {
        resolve: `gatsby-plugin-sharp`,
        options: {
            useMozJpeg: false,
            stripMetadata: true,
            defaultQuality: 75,
            duotone: true
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                "gatsby-remark-copy-linked-files",
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        linkImagesToOriginal: false,
                        maxWidth: 1280,
                        tracedSVG: {
                            color: "#f36fda",
                            turnPolicy: "TURNPOLICY_MAJORITY"
                        }
                    }
                }
            ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `contents`,
            path: `${__dirname}/contents/`
        }
    },
    {
        resolve: `gatsby-plugin-less`,
        options: {
            strictMath: true
        }
    }
];

if (siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: siteMetadata.disqus
        }
    });
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: plugins
};
