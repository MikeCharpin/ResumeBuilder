import { v4 as uuidv4 } from 'uuid'

export type PersonalInfoProps = {
    fullName: string
    email: string
    location: string
    linkedin: string
    website: string
    phoneNumber: string
  }


export const exampleData = {
    personalInfo: {
        fullName: "Mike Charpin",
        email: "Michael.Charpin@gmail.com",
        location: "Brooklyn, NY",
        linkedin: "michael-charpin",
        website: "MichaelCharpin.com",
        phoneNumber: "555-555-1234"
    },
    
    sections: {
        projectInfo: [
            {
                title: "Task Prioritization",
                projectTech: "React, NextJS, Typescript, Shadcn, TailwindCSS",
                projectStartDate: "September 2023",
                projectEndDate: "present",
                projectLink: "www.MichaelCharpin.com",
                projectDesc: "• Led the architecture and development of a project prioritization application using NextJS, React, Shaden-ui, TailwindCSS, Dndkit, and Firebase. \n• Conducted comprehensive discovery sessions and wireframing to optimize user experience (UX) and alleviate decision paralysis.\n• Designed and implemented a robust data structure and algorithm for efficient storage and calculation of project priorities.",
                sectionBlockId: uuidv4(),
            },
            {
                title: "Resume Creation",
                projectTech: "React, Vite, Typescript, Shadcn, TailwindCSS",
                projectStartDate: "December 2023",
                projectEndDate: "December 2023",
                projectLink: "www.MichaelCharpin.com",
                projectDesc: "•  Implemented a modular React component architecture for a dynamic resume-building application, ensuring efficient code organization and ease of maintenance. \n• Conducted comprehensive discovery sessions and wireframing to optimize user experience (UX) and alleviate decision paralysis.\n• Designed and implemented a robust data structure and algorithm for efficient storage and calculation of project priorities.",
                sectionBlockId: uuidv4(),
            },
            {
                title: "Portfolio Website",
                projectTech: "React, NextJS, TailwindCSS, Framer Motion",
                projectStartDate: "July 2023",
                projectEndDate: "July 2023",
                projectLink: "www.MichaelCharpin.com",
                projectDesc: "- Achieved a remarkable 90 Google Lighthouse score through expert image optimization with Next.JS, ensuring fast loading times and superior website performance. \n- Utilized Tailwind CSS and Framer Motion for a visually appealing and responsive design across diverse screen sizes.\n- Implemented a sophisticated dark mode functionality, showcasing adaptability to user preferences and contemporary design trends.",
                sectionBlockId: uuidv4(),
            }
        ],
        experienceInfo: [
            {
                title: "Project Manager",
                experienceBusinessName: "Miniature World",
                experienceStartDate: "July 2022",
                experienceEndDate: "July 2023",
                experienceDesc: "- Supervised a diverse team of 40 model makers in the creation and development of an expansive model train exhibit showcasing intricate replicas of global regions. \n - Leveraged strong interpersonal and leadership skills to achieve a 30% increase in productivity through effective delegation, clear goal setting, and regular feedback. \n Mitigated high-risk factors across 12 projects by simplifying project scope in order to avoid potential delays. \n -  Utilized technical expertise and creative problem-solving to contribute to the development of 3 captivating mechanical animations, adding a dynamic element to the exhibit.",
                experienceLocation: "Staten Island, NY",
                sectionBlockId: uuidv4(),
            },
                        {
                title: "Team Lead",
                experienceBusinessName: "Union Garage",
                experienceStartDate: "December 2020",
                experienceEndDate: "July 2022",
                experienceDesc: "- Systematically synchronized 7,000+ inventory items between the in-store POS Lightspeed and the e-commerce Shopify site, ensuring seamless transactions and inventory management. \n - Overhauled order processing workflows leading to a 30% increase in order fulfillment accuracy. \n - Maintained an average customer review rating of 4.9/5, enhancing brand reputation and influencing purchasing decisions by communicating clear guidance to the sales team, enabling them to excel in their roles and exceed customer expectations.",
                experienceLocation: "Brooklyn, NY",
                sectionBlockId: uuidv4(),
            },
                        {
                title: "Senior Industrial Designer",
                experienceBusinessName: "Proteus Motion",
                experienceStartDate: "January 2017",
                experienceEndDate: "August 2020",
                experienceDesc: "-  Spearheaded the rapid creation of 6 fully functional handle prototypes, a critical step in showcasing the viability of the Proteus fitness machine to early-stage investors. \n - Conducted user-centered research, implemented design changes based on user feedback resulting in the successful introduction of product designs that captured emerging consumer preferences and led to a 100% sales increase. \n - Developed an innovation pipeline that generated 6 patent applications, contributing to intellectual property growth and technological leadership.",
                experienceLocation: "Queens, NY",
                sectionBlockId: uuidv4(),
            }
        ],
        educationInfo: [
            {
                title: "Bachelor of Science in Industrial Design",
                educationSchoolName: "Wentworth Insitute of Technology",
                educationEndDate: "2013",
                educationLocation: "Boston, MA",
                sectionBlockId: uuidv4(),
            },
            {
                title: "Javascript Certificate",
                educationSchoolName: "Learn Javascript Online",
                educationEndDate: "2022",
                educationLocation: "Remote",
                sectionBlockId: uuidv4(),
            },
        ], 
        involvementInfo: [
            {
                title: "Dungeon Master",
                involvementPosition: "After-School / Summer Camp Dungeons & Dragons for Kids",
                involvementStartDate: "March 2020",
                involvementEndDate: "present",
                involvementLink: "www.TheDeliberateMyth.com",
                involvementDesc: "• Designed age-appropriate D&D campaigns and scenarios that engaged children in interactive storytelling and problem-solving, promoting teamwork and imagination. \n • Encouraged positive behavior and conflict resolution among participants, creating a supportive atmosphere for learning and personal growth. \n • Ran D&D sessions in Bryant Park for the public, introducing kids and parents to the rules and mechanics of the game in an accessible and engaging manner, making it easy for newcomers to learn and enjoy.", 
                sectionBlockId: uuidv4(),
            }
        ] 
    }  
} 