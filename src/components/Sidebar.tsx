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
    <div className="flex flex-col gap-4 bg-white h-full w-1/4 p-2 overflow-auto">
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
            FormIcon={GraduationCapIcon}
            createForm={createEducationForm}
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
            sectionState={sectionsState.projectInfo}
            sectionName="Projects"
            FormComponent={ProjectsForm}
            FormIcon={ FolderRootIcon }
            createForm={createProjectForm}

        />
        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.involvementInfo}
            sectionName="Involvement"
            FormComponent={InvolvementForm}
            FormIcon={ HeartHandshakeIcon }
            createForm={createInvolvementForm}

        />
        <Button variant={"secondary"} onClick={templateData}><FileSpreadsheetIcon />&nbsp;Reset Template
        </Button>
        <Button onClick={clearResume} variant={"destructive"}><Trash2Icon />&nbsp;Clear Resume</Button>
    </div>
  )
}
