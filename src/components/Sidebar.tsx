import InputGroup from "./InputGroup"
import { PersonalInfoProps } from "../example-data"

type SidebarProps = {
    personalInfo: PersonalInfoProps
    onChange:( e: React.ChangeEvent<HTMLInputElement>) => void
}




export default function Sidebar({ onChange, personalInfo}: SidebarProps) {
    
  return (
    <div className="bg-white h-full w-1/4 p-2">
        <Template />
        <AddPersonalInfo
            onChange={onChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            location={personalInfo.location}
            linkedin={personalInfo.linkedin}
            website={personalInfo.website}
            phoneNumber={personalInfo.phoneNumber}
        />
        <AddProjectInfo />
        <AddExperienceInfo />
        <AddEducationInfo />
        <AddInvolvementInfo />

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
            <InputGroup 
                id="full-name"
                placeholder="name" 
                label="Full Name"
                type="text"
                value={fullName}
                onChange={handleChange}
                data-key="fullName"
            />
            <InputGroup
                id="email"
                placeholder="email"
                label="Email"
                type="text"
                value={email}
                onChange={handleChange}
                data-key="email"
            />
            <InputGroup
                id="phoneNumber"
                placeholder="phone number"
                label="Phone Number"
                type="text"
                value={phoneNumber}
                onChange={handleChange}
                data-key="phoneNumber"
            />            
            <InputGroup
                id="location"
                placeholder="location"
                label="Location"
                type="text"
                value={location}
                onChange={handleChange}
                data-key="location"
            />
            <InputGroup
                id="linkedin"
                placeholder="linkedin"
                label="Linkedin"
                type="text"
                value={linkedin}
                onChange={handleChange}
                data-key="linkedin"
            />
            <InputGroup
                id="website"
                placeholder="website"
                label="Website"
                type="text"
                value={website}
                onChange={handleChange}
                data-key="website"
            />            

            </form>
        </div>
    )
}

function AddProjectInfo() {
    return(
        <div>
            AddProjectInfo
        </div>
    )
}

function AddExperienceInfo() {
    return(
        <div>
            AddExperienceInfo
        </div>
    )
}

function AddEducationInfo() {
    return(
        <div>
            AddEducationInfo
        </div>
    )
}

function AddInvolvementInfo() {
    return(
        <div>
            AddInvolvementInfo
        </div>
    )
}