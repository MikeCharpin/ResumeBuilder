import InputGroup from "./InputGroup"
import { PersonalInfoProps } from "../App"

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
}

function AddPersonalInfo({ onChange, fullName }: AddPersonalInfoProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e as React.ChangeEvent<HTMLInputElement>)
    }
    return(
        <div className="flex flex-col gap-1 p-1 border border-solid rounded-sm">
            <div className="text-base font-semibold">
                Personal Details
            </div>
            <form>
            <InputGroup 
            id="full-name"
            placeholder="name" 
            label="Full Name"
            type="text"
            value={fullName}
            onChange={handleChange}
            data-key="fullName"
            optional
            />
            </form>


            <div className="flex flex-col">
                <div className="text-sm font-semibold">
                    &nbsp;Full Name
                </div>
                <input className="text-base border border-solid rounded-sm bg-slate-100" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold">
                    &nbsp;Email
                </div>
                <input className="text-base border border-solid rounded-sm bg-slate-100" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold">
                    &nbsp;Phone Number
                </div>
                <input className="text-base border border-solid rounded-sm bg-slate-100" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold">
                    &nbsp;Location
                </div>
                <input className="text-base border border-solid rounded-sm bg-slate-100" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold">
                    &nbsp;Linkedin
                </div>
                <input className="text-base border border-solid rounded-sm bg-slate-100" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold">
                    &nbsp;Website
                </div>
                <input className="text-base border border-solid rounded-sm bg-slate-100" />
            </div>


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