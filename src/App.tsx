import { useState } from "react"
import Resume from "./components/Resume"
import Sidebar from "./components/Sidebar"
import { exampleData } from "./example-data"
import { v4 as uuidv4 } from 'uuid'




function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [sectionsState, setSectionsState] = useState(exampleData.sections)
  const [prevState, setPrevState] = useState(null)

  function handlePersonalInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { key } = e.target.dataset as {key: string}
    setPersonalInfo((prevPersonalInfo) => ({ ...prevPersonalInfo, [key]: e.target.value }))
  }

  function handleSectionChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) {
    const { key }: DOMStringMap = e.target.dataset;
    const inputValue: string = e.target.value;
    const form: HTMLDivElement | null = e.target.closest(".section-form");
    if (!form) {
      return;
    }
    const { id }: { id?: string } = form;
    const { sectionName }: { sectionName?: string } = form.dataset;
    if (!id || !sectionName) {
      return;
    }
    const sectionToChange = sectionsState[sectionName];

    setSectionsState((prevSectionState) => ({
      ...prevSectionState,
      [sectionName]: sectionToChange.map((sectionBlock) => {
        if (sectionBlock.sectionBlockId === id) {
          return { ...sectionBlock, [key!]: inputValue };
        }
        return sectionBlock;
      }),
    }));
  }

  function createForm(sectionName, newSectionBlock) {
    setPrevState(null)
    const sectionClone = structuredClone(sectionsState[sectionName])
    sectionClone.push(newSectionBlock)
    setSectionsState({...sectionsState, [sectionName]: sectionClone})
    console.log(sectionsState)
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
      projectSchoolName: "",
      projectEndDate: "",
      projectLocation: "",
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




  return (
  <div className="flex items-start justify-between bg-slate-400 h-screen gap-4 p-4">
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
    />
    <Resume
      personalInfo={personalInfo}
      sectionsState={sectionsState}
    />
  </div>
  )
}

export default App
