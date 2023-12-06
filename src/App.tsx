import { useState } from "react"
import Resume from "./components/Resume"
import Sidebar from "./components/Sidebar"
import { exampleData } from "./example-data"



function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [sectionsState, setSectionsState] = useState(exampleData.sections)

  function handlePersonalInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { key } = e.target.dataset as {key: string}
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }

  
   
  // function handleSectionChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const { key }: DOMStringMap = e.target.dataset
  //   const inputValue = e.target.value
  //   const form = e.target.closest(".section-form") 
  //   const { id } = form
  //   const { sectionName } = form.dataset
  //   const sectionToChange = sectionsState[sectionName]
    
    
  //   setSectionsState({
  //     ...sectionsState,
  //     [sectionName]: sectionToChange.map((sectionBlock) => {
  //       if(sectionBlock.sectionBlockId === id) {
  //         return sectionBlock[key] = inputValue
          
  //       } 
        
  //       return sectionsState
  //     })
  //   })
  // }
function handleSectionChange(e: React.ChangeEvent<HTMLInputElement>) {
  const { key }: DOMStringMap = e.target.dataset;
  const inputValue: string = e.target.value;
  const form: HTMLDivElement | null = e.target.closest(".section-form");
  
  if (!form) {
    // Handle the case when the form is not found
    return;
  }

  const { id }: { id?: string } = form;
  const { sectionName }: { sectionName?: string } = form.dataset;
  
  if (!id || !sectionName) {
    // Handle the case when id or sectionName is missing
    return;
  }

  const sectionToChange = sectionsState[sectionName];

  setSectionsState({
    ...sectionsState,
    [sectionName]: sectionToChange.map((sectionBlock) => {
      if (sectionBlock.sectionBlockId === id) {
        // Use a new object to ensure immutability
        return { ...sectionBlock, [key!]: inputValue };
      }
      return sectionBlock;
    }),
  });
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
