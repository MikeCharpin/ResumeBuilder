import { useState } from "react"
import Resume from "./components/Resume"
import Sidebar from "./components/Sidebar"
import { PersonalInfo, SectionData, exampleData, ProjectInfo, ExperienceInfo, InvolvementInfo, EducationInfo,  } from "./example-data"
import { v4 as uuidv4 } from 'uuid'

export type SectionBlock = ProjectInfo | ExperienceInfo | InvolvementInfo | EducationInfo
type SectionName = keyof SectionData

type SectionsState = {
  projectInfo: ProjectInfo[]
  experienceInfo: ExperienceInfo[]
  involvementInfo: InvolvementInfo[]
  educationInfo: EducationInfo[]
}

export default function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(exampleData.personalInfo)
  const [sectionsState, setSectionsState] = useState<SectionsState>(exampleData.sections)

  function handlePersonalInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { key } = e.target.dataset as {key: keyof PersonalInfo}
    setPersonalInfo((prevPersonalInfo) => ({ ...prevPersonalInfo, [key]: e.target.value }))
  }

  function handleSectionChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) {
    const { key } = e.target.dataset as {key: keyof SectionBlock};
    const inputValue: string = e.target.value;
    const form: HTMLDivElement | null = e.target.closest(".section-form");
    if (!form) {
      return;
    }
    const { id }: { id?: string } = form;
    const { sectionName }: { sectionName?: keyof SectionsState } = form.dataset;
    if (!id || !sectionName) {
      return;
    }
    const sectionToChange = sectionsState[sectionName];

    setSectionsState((prevSectionState) => ({
      ...prevSectionState,
      [sectionName]: sectionToChange.map((sectionBlock: SectionBlock) => {
        if (sectionBlock.sectionBlockId === id) {
          return { ...sectionBlock, [key!]: inputValue };
        }
        return sectionBlock;
      }),
    }));
  }

  

  function createForm(sectionName: SectionName, newSectionBlock: SectionBlock) {
    const sectionClone = [...sectionsState[sectionName]]
    sectionClone.push(newSectionBlock as SectionBlock)
    setSectionsState({...sectionsState, [sectionName]: sectionClone})
  }

  function createEducationForm() {
    createForm("educationInfo", {
      title: "",
      educationSchoolName: "",
      educationEndDate: "",
      educationLocation: "",
      sectionBlockId: uuidv4(),
    })
  }

    function createExperienceForm() {
    createForm("experienceInfo", {
      title: "",
      experienceBusinessName: "",
      experienceStartDate: "",
      experienceEndDate: "",
      experienceDesc: "",
      experienceLocation: "",
      sectionBlockId: uuidv4(),
    })
  }

    function createProjectForm() {
    createForm("projectInfo", {
      title: "",
      projectTech: "",
      projectStartDate: "",
      projectEndDate: "",
      projectLink: "",
      projectDesc:"",
      sectionBlockId: uuidv4(),
    })
  }

    function createInvolvementForm() {
    createForm("involvementInfo", {
      title: "",
      involvementPosition: "",
      involvementStartDate: "",
      involvementEndDate: "",
      involvementLink: "",
      involvementDesc: "",
      sectionBlockId: uuidv4(),
    })
  }

    function clearResume() {
      setSectionsState({
        projectInfo:[],
        experienceInfo:[],
        educationInfo:[],
        involvementInfo:[]
      })
      setPersonalInfo({
        fullName: "",
        email: "",
        location: "",
        linkedin: "",
        website: "",
        phoneNumber: ""
    })
    }

    function templateData(){
      setSectionsState(exampleData.sections),
      setPersonalInfo(exampleData.personalInfo)
    }

  return (
  <div className="flex items-start justify-between bg-stone-100 h-screen gap-4 p-4">
    <Sidebar
      handlePersonalInfoChange={handlePersonalInfoChange}
      handleSectionChange={handleSectionChange}
      createEducationForm={createEducationForm}
      createExperienceForm={createExperienceForm}
      createProjectForm={createProjectForm}
      createInvolvementForm={createInvolvementForm}
      personalInfo={personalInfo}
      sectionsState={sectionsState}
      clearResume={clearResume}
      templateData={templateData}
    />
    <Resume
      personalInfo={personalInfo}
      sectionsState={sectionsState}
    />
  </div>
  )
}
