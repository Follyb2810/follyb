import {FaGithub,FaTelegram,FaDiscord,FaTwitter, FaLinkedin} from 'react-icons/fa'
import {GitHub} from '@mui/icons-material';
import * as IMG  from './../Asset/images/images'
const data=[
    {
       HeroData:
        {
                 content:`Am Folorunsho a front-end developer with 
                a passion for creating beautiful, user-friendly interfaces.
                I love to bring ideas to life with code, and I thrive on the 
                challenge of creating the best possible user experience`,
                hero:IMG.Folly,
                link:'/stake'
        }   
    },
    {
        navItem:[
            {
                id:0,
                name:'About',
                path:'#about'
            },
            {
                id:1,
                name:'Service',
                path:'#service'
            },
            {
                id:2,
                name:'Project',
                path:'#project'
            },
            {
                id:3,
                name:'MarketPlace',
                path:'/follyhome'
            },
        ]
    },
    {
         footData: [
            {
                social:'Github',
                path:'https://github.com/Follyb2810',
                icon:<FaGithub color='blue' size='20'/>
            },
            {
                social:'Twiter',
                path:'https://x.com/Babatunde2810?t=&s=09',
                icon:<FaTwitter color='blue' size='20'/>
            },
            {
                social:'Telegram',
                path:'https://t.me/Follyb2810',
                icon:<FaTelegram color='blue' size='20'/>
            },
            {
                social:'Discord',
                path:'',
                icon:<FaDiscord color='blue' size='20'/>
            },
            {
                social:'Linkedin',
                path:'https://www.linkedin.com/in/babatunde-yusuf-folorunsho-390869215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                icon:<FaLinkedin color='blue' size='20'/>
            },
        ]
    },
    {
        AboutData:[
            {
                head:'About me',
                aboutme:`Folly B is a dedicated Frontend Developer and seasoned Web3 expert, 
                boasting a proven track record of crafting exceptional web user interfaces.
                My forte lies in interpreting Figma designs and seamlessly translating them into 
                functional web applications, creating a harmonious blend of design and code in the world of web development.`,
                path:'/Babatunde_Yusuf_Folorunsho.pdf',
                link:'/staking'
                
            }
        ]
    },
    {
        serviceData:[
            {
                head:'Service Offer',
                serviceDetails:[
                    {
                        title:'Frontend Development',
                        serviceImg:IMG.frondendDev,
                        expert:[
                            'Expert in crafting exceptional web user interfaces.',
                            'Proficient in translating Figma designs into functional web applications.',
                            'Seamless integration of design and code for superior user experiences.'
                        ]
                    },
                    {
                        title:'Frontend Technologies',
                        serviceImg:IMG.frondendTech,
                        expert:[
                            'Mastery of HTML, CSS, and JavaScript and Leading CSS Frameworks.',
                            'Proficient in popular frontend frameworks: React, Vue, Next.js, and Angular.',
                            'Implementation of clean and modern design principles for an enhanced user experience'
                        ]
                    },
                    {
                        title:'Full Stack Development',
                        serviceImg:IMG.fullstack,
                        expert:[
                            'Versatility in frontend and backend technologies.',
                            'Backend proficiency in Node.js, Express, MongoDB, and other relevant libraries'
                        ]
                    },
                    {
                        title:'Web3 Development:',
                        serviceImg:IMG.Web3,
                        expert:[
                            'Expertise in blockchain technologies using web3js, EtherJS, Wagmi, RainbowKit, and Solidity.',
                            'Crafting intuitive interfaces and navigating the intricacies of blockchain technologies.'
                        ]
                    },
                    {
                        title:'Mobile App Development:',
                        serviceImg:IMG.Web3,
                        expert:[
                            'Specialized in mobile app development using React Native.',
                            'Creating cross-platform applications with a native look and feel.'
                        ]
                    },
                    {
                        title:'SEO Optimization',
                        serviceImg:IMG.SEO,
                        expert:[
                            'Commitment to SEO optimization for superb functionality and high search engine rankings.',
                            'Elevating web development projects to new heights through technical proficiency.'
                                ]
                    },
                ]
            }
        ]
    },
    {
        projectData:[
            {
                head:'Project Work On',
                projecDetails:[
                    {
                        id:0,
                        name:'Staking App ',
                        path:'https://staking-react-gray.vercel.app/',
                        description:'',
                        projectImg:IMG.staking
                    },
                    {
                        id:1,
                        name:'Defi Connect Credit',
                        path:'https://deficonnect.credit',
                        description:'',
                        projectImg:IMG.defi
                    },
                    {
                        id:2,
                        name:'Dyleum',
                        path:'https://dyleum.com',
                        description:'',
                        projectImg:IMG.dyleum   
                    },
                    {
                        id:3,
                        name:'SolakGpt',
                        path:'https://solakgpt.vercel.app/',
                        description:'',
                        projectImg:IMG.solak
                    },
                    {
                        id:4,
                        name:'Presentation Ai',
                        path:'https://presentation-drab-xi.vercel.app/',
                        description:'',
                        projectImg:IMG.present
                    },
                    {
                        id:5,
                        name:'Dyleum Testnet',
                        path:'https://dyleum-henna.vercel.app/',
                        description:'',
                        projectImg:IMG.dyleumTestnet
                    },
                    {
                        id:6,
                        name:'Airdrop Calculator',
                        path:'https://statuesque-buttercream-87d3fb.netlify.app/',
                        description:'',
                        projectImg:IMG.Airdrop
                    },
                    {
                        id:7,
                        name:'Food Website',
                        path:'https://food-beta-peach.vercel.app/',
                        description:'',
                        projectImg:IMG.food
                    },
                    {
                        id:8,
                        name:'Folly Car Hub',
                        path:'https://follyhub-jsmastery-i3bx.vercel.app/',
                        description:'',
                        projectImg:IMG.follyhub
                    },
                ]
            }
        ]
    },
    {
        faqData:[
            {
                head:'Frequently Ask Question',
                faqDetails:[
                    {
                        question:'What services do you offer in terms of Frontend Development?',
                        answer:'I offer Frontend Development services with expertise in crafting exceptional web user interfaces. My proficiency includes translating Figma designs into functional web applications and ensuring a seamless integration of design and code for superior user experiences.'
                    },
                    {
                        question:'What are the key aspects of your Frontend Technologies services?',
                        answer:'In Frontend Technologies, I have mastery in HTML, CSS, and JavaScript, including leading CSS frameworks. Additionally, I am proficient in popular frontend frameworks such as React, Vue, Next.js, and Angular. My approach involves implementing clean and modern design principles to enhance the user experience.'
                    },
                    {
                        question:'Can you highlight the key features of your Full Stack Development services?',
                        answer:'My Full Stack Development services offer versatility in both frontend and backend technologies. I possess backend proficiency in Node.js, Express, MongoDB, and other relevant libraries to deliver comprehensive and efficient solutions.'
                    },
                    {
                        question:'What sets your Web3 Development services apart?',
                        answer:'In Web3 Development, I bring expertise in blockchain technologies using web3js, EtherJS, Wagmi, RainbowKit, and Solidity. My focus includes crafting intuitive interfaces and navigating the intricacies of blockchain technologies.'
                    },
                    {
                        question:'How do you approach Mobile App Development, particularly with React Native?',
                        answer:'For Mobile App Development, I specialize in using React Native. I focus on creating cross-platform applications with a native look and feel, providing a seamless and efficient user experience.'
                    },
                    {
                        question:'What makes your SEO Optimization services stand out?',
                        answer:'My commitment to SEO optimization ensures superb functionality and high search engine rankings for web development projects. I leverage technical proficiency to elevate projects to new heights in terms of visibility and performance.'
                    },
                ]
            }
        ]
    }

]


export{ data}