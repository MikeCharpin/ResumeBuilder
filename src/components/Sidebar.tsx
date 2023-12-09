import { BriefcaseIcon, FileSpreadsheetIcon, FolderRootIcon, GraduationCapIcon, HeartHandshakeIcon, Trash2Icon } from "lucide-react"
import ExpandSidebarSection from "./ExpandSidebarSection"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import ProjectsForm from "./ProjectsForm"
import InvolvementForm from "./InvolvementForm"
import AddPersonalInfo from "./AddPersonalInfo"
import { Button } from "./ui/button"


type SidebarProps = {
    personalInfo: any
    sectionsState: any
    handlePersonalInfoChange:(e: React.ChangeEvent<HTMLInputElement>) => void
    handleSectionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    createEducationForm: (e: React.ChangeEvent<HTMLInputElement>) => void
    createExperienceForm: (e: React.ChangeEvent<HTMLInputElement>) => void
    createProjectForm: (e: React.ChangeEvent<HTMLInputElement>) => void
    createInvolvementForm: (e: React.ChangeEvent<HTMLInputElement>) => void
    clearResume: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    templateData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

}




export default function Sidebar({ 
    handlePersonalInfoChange, 
    personalInfo, 
    handleSectionChange, 
    sectionsState, 
    createEducationForm,
    createExperienceForm,
    createProjectForm,
    createInvolvementForm,
    clearResume,
    templateData,
}: SidebarProps) {
    
  return (
    <div className="flex flex-col  gap-4 h-full w-1/4 px-2 py-4 overflow-auto scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-indigo-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
    <div className="flex gap-2">
        <Button onClick={templateData} variant={"secondary"} className="rounded-xl bg-gradient-to-r from-indigo-100 via-pink-100 to-pink-100">
            <FileSpreadsheetIcon />&nbsp;Reset Template
        </Button>
        <Button onClick={clearResume} variant={"destructive"} className="rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-pink-500">
            <Trash2Icon />&nbsp; Clear Resume
        </Button>
    </div>
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
            sectionState={sectionsState.projectInfo}
            sectionName="Projects"
            FormComponent={ProjectsForm}
            FormIcon={ FolderRootIcon }
            createForm={createProjectForm}
        />
        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.experienceInfo}
            sectionName="Experience"
            FormComponent={ExperienceForm}
            FormIcon={ BriefcaseIcon }
            createForm={createExperienceForm}
        />
        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.involvementInfo}
            sectionName="Involvement"
            FormComponent={InvolvementForm}
            FormIcon={ HeartHandshakeIcon }
            createForm={createInvolvementForm}
        />
        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.educationInfo}
            sectionName="Education"
            FormComponent={EducationForm}
            FormIcon={GraduationCapIcon}
            createForm={createEducationForm}
        />


    </div>
  )
}
