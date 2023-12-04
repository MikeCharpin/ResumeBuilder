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
    projectInfo: {
        projectTitle: "Task Prioritization",
        projectStartDate: "September 2023",
        projectEndDate: "present",
        projectDesc: "This is the project description"
    },
    sections: {
        experienceInfo: [
            {
                experienceTitle: "Project Manager",
                experienceBusinessName: "Miniature World",
                experienceStartDate: "July 2022",
                experienceEndDate: "July 2023",
                experienceDesc: "This is the jod description.",
                experienceLocation: "Staten Island, NY"
            }
        ],
        educationInfo: [
            {
                educationTitle: "Bachelor of Science in Industrial Design",
                educationSchoolName: "Wentworth Insitute of Technology",
                educationEndDate: "2013",
                educationLocation: "Boston, MA"
            },
        ], 
        involvementInfo: [
            {
                involvementTitle: "Dungeon Master",
                involvementPosition: "After-School / Summer Camp Dungeons & Dragons",
                involvementStartDate: "March 2020",
                involvementEndDate: "present",
                involvementDesc: "This is the involvement description.",
            }
        ] 
    }  
}