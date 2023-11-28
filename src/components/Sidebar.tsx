import { useState } from "react"
import InputGroup from "./InputGroup"
import exampleData from "../example-data"


export default function Sidebar() {
    const [personInfo, setPersonalInfo] = useState(exampleData.personInfo)

    function handlePersonalInfoChange(e) {
        const { key } = e.target.dataset
        setPersonalInfo({ ...AddPersonalInfo, [key]: e.target.value })
    }
  return (
    <div className="bg-white h-full w-1/4 p-2">
        <Template />
        <AddPersonalInfo
            
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

type PersonalInfo = {
    email: string
    fullName: string
    phoneNumber: number
    address: string
}

function AddPersonalInfo({ onChange, email, fullName, phoneNumber, address }: PersonalInfo) {
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
            onChange={onChange}
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