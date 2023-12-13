import { useState } from "react"
import Resume from "./components/Resume"
import Sidebar from "./components/Sidebar"
import { PersonalInfo, SectionData, exampleData, ProjectInfo, ExperienceInfo, InvolvementInfo, EducationInfo,  } from "./example-data"
import { v4 as uuidv4 } from 'uuid'

export type SectionBlock = ProjectInfo | ExperienceInfo | InvolvementInfo | EducationInfo
type SectionName = keyof SectionData

export default function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(exampleData.personalInfo)
  const [sectionsState, setSectionsState] = useState<SectionData>(exampleData.sections)

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
    const { sectionName }: { sectionName?: keyof SectionData } = form.dataset;
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
  <div className="flex flex-col justify-center items-center  bg-stone-100">
    <div className="text-center text-6xl p-6 md:pt-6 md:p-2 font-extralight bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-transparent bg-clip-text inline-block">Resume Builder React App</div>
    <div className="flex flex-col-reverse justify-center lg:flex-row  gap-1 p-2 md:p-6 max-w-screen-xl">
      <div className="lg:w-3/4 px-2 py-4 overflow-auto ">
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
      </div>
      <div className=" bg-white py-10 px-1 md:px-6">
        <Resume
          personalInfo={personalInfo}
          sectionsState={sectionsState}
        />
      </div>
    </div>
  </div>
  )
}

// scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-indigo-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full