import { useState } from "react"
import Resume from "./components/Resume"
import Sidebar from "./components/Sidebar"
import { exampleData } from "./example-data"



function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [sectionsState, setSectionsState] = useState(exampleData.sections)

  function handlePersonalInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { key } = e.target.dataset as {key: string}
    setPersonalInfo((prevPersonalInfo) => ({ ...prevPersonalInfo, [key]: e.target.value }))
  }

  
   

  function handleSectionChange(e: React.ChangeEvent<HTMLInputElement>) {
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




  return (
  <div className="flex items-start justify-between bg-slate-400 h-screen gap-4 p-4">
    <Sidebar
      handlePersonalInfoChange={handlePersonalInfoChange}
      handleSectionChange={handleSectionChange}
      personalInfo={personalInfo}
      sectionsState={sectionsState}
    />
    <Resume
      personalInfo={personalInfo}
      sectionsState={sectionsState}
    />
  </div>
  )
}

export default App
