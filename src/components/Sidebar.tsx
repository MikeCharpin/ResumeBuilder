import InputGroup from "./InputGroup"
import { PersonalInfoProps } from "../example-data"
import { GraduationCapIcon } from "lucide-react"
import ExpandSidebarSection from "./ExpandSidebarSection"
import { Input } from "./ui/input"
import { Label } from "@radix-ui/react-label"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"

type SidebarProps = {
    personalInfo: any
    sectionsState: any
    handlePersonalInfoChange:(e: React.ChangeEvent<HTMLInputElement>) => void
    handleSectionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}




export default function Sidebar({ handlePersonalInfoChange, personalInfo, handleSectionChange, sectionsState}: SidebarProps) {
    
  return (
    <div className="flex flex-col gap-4 bg-white h-full w-1/4 p-2 overflow-auto">
        <Template />
        <AddPersonalInfo
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            location={personalInfo.location}
            linkedin={personalInfo.linkedin}
            website={personalInfo.website}
            phoneNumber={personalInfo.phoneNumber}
        />

        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.educationInfo}
            sectionName="Education"
            FormComponent={EducationForm}
        />
        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.experienceInfo}
            sectionName="Experience"
            FormComponent={ExperienceForm}
        />
        {/* <ExpandSidebarSection
            onChange={onChangeSection}
            sectionInfo={sectionsState.projectInfo}
            sectionName="Projects"
        />
        <ExpandSidebarSection
            onChange={onChangeSection}
            sectionInfo={sectionsState.involvementInfo}
            sectionName="Involvement"
        /> */}
        
       

        {/* <AddProjectInfo />
        <AddExperienceInfo />
        <AddEducationInfo />
        <AddInvolvementInfo /> */}

    </div>
  )
}

function Template() {
    return(
        <div>
            Template
        </div>
    )
}

type AddPersonalInfoProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    fullName: string
    email: string
    location: string
    linkedin: string
    website: string
    phoneNumber: string
}

function AddPersonalInfo({ onChange, fullName, email, phoneNumber, location, linkedin, website }: AddPersonalInfoProps) {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e as React.ChangeEvent<HTMLInputElement>)
    }
    return(
        <div className="flex flex-col gap-1 p-3 border border-solid rounded-sm">
            <div className="text-base font-semibold">
                Personal Details
            </div>
            <form className="flex flex-col gap-3">
                <div>
                    <Label>Full Name</Label>
                    <Input
                        id="full-name"
                        placeholder="full name"
                        type="text"
                        value={fullName}
                        onChange={handleChange}
                        data-key="fullName"
                    />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input
                        id="email"
                        placeholder="email"
                        type="text"
                        value={email}
                        onChange={handleChange}
                        data-key="email"
                    />
                </div>
                <div>
                    <Label>Phone Number</Label>
                    <Input
                        id="phoneNumber"
                        placeholder="phone number"
                        type="text"
                        value={phoneNumber}
                        onChange={handleChange}
                        data-key="phoneNumber"
                    />
                </div>      
                <div>
                    <Label>Location</Label>
                    <Input
                        id="location"
                        placeholder="location"
                        type="text"
                        value={location}
                        onChange={handleChange}
                        data-key="location"
                    />
                </div>
                <div>
                    <Label>Linkedin</Label>
                    <Input
                        id="linkedin"
                        placeholder="linkedin"
                        type="text"
                        value={linkedin}
                        onChange={handleChange}
                        data-key="linkedin"
                    />
                </div>
                <div>
                    <Label>Website</Label>
                    <Input
                        id="website"
                        placeholder="website URL"
                        type="text"
                        value={website}
                        onChange={handleChange}
                        data-key="website"
                    />
                </div>          

            </form>
        </div>
    )
}

// function AddProjectInfo() {
//     return(
//         <div>
//             AddProjectInfo
//         </div>
//     )
// }

// function AddExperienceInfo() {
//     return(
//         <div>
//             AddExperienceInfo
//         </div>
//     )
// }

// function AddEducationInfo() {
//     return(
//         <div className="flex gap-1 p-3 border border-solid rounded-sm">
//             <GraduationCapIcon />
//         </div>
//     )
// }

// function AddInvolvementInfo() {
//     return(
//         <div>
//             AddInvolvementInfo
//         </div>
//     )
// }

