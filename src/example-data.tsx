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
                projectTech: "React, Shadcn, TypeScript, TailwindCSS",
                projectStartDate: "September 2023",
                projectEndDate: "present",
                projectLink: "www.MichaelCharpin.com",
                projectDesc: "This is the project description",
                sectionBlockId: uuidv4(),
            }
        ],
        experienceInfo: [
            {
                title: "Project Manager",
                experienceBusinessName: "Miniature World",
                experienceStartDate: "July 2022",
                experienceEndDate: "July 2023",
                experienceDesc: "This is the jod description.",
                experienceLocation: "Staten Island, NY",
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
                title: "test",
                educationSchoolName: "test",
                educationEndDate: "2013",
                educationLocation: "Boston, MA",
                sectionBlockId: uuidv4(),
            },
        ], 
        involvementInfo: [
            {
                title: "Dungeon Master",
                involvementPosition: "After-School / Summer Camp Dungeons & Dragons",
                involvementStartDate: "March 2020",
                involvementEndDate: "present",
                involvementLink: "www.TheDeliberateMyth.com",
                involvementDesc: "This is the involvement description.",
                sectionBlockId: uuidv4(),
            }
        ] 
    }  
} 