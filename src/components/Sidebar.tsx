import { BriefcaseIcon, FolderRootIcon, GraduationCapIcon, HeartHandshakeIcon } from "lucide-react"
import ExpandSidebarSection from "./ExpandSidebarSection"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import ProjectsForm from "./ProjectsForm"
import InvolvementForm from "./InvolvementForm"
import AddPersonalInfo from "./AddPersonalInfo"


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
            FormIcon={GraduationCapIcon}
        />
        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.experienceInfo}
            sectionName="Experience"
            FormComponent={ExperienceForm}
            FormIcon={ BriefcaseIcon }
        />
        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.projectInfo}
            sectionName="Projects"
            FormComponent={ProjectsForm}
            FormIcon={ FolderRootIcon }
        />
        <ExpandSidebarSection
            handleSectionChange={handleSectionChange}
            sectionState={sectionsState.involvementInfo}
            sectionName="Involvement"
            FormComponent={InvolvementForm}
            FormIcon={ HeartHandshakeIcon }

        />
        

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

