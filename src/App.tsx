import { useState } from "react"
import Resume from "./components/Resume"
import Sidebar from "./components/Sidebar"
import { exampleData } from "./example-data"



function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  function handlePersonalInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { key } = e.target.dataset as {key: string}
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }
  const [experienceInfo, setExperienceInfo] = useState(exampleData.section.experienceInfo)
  function handleExperienceInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { key } = e.target.dataset as {key:string}
    setExperienceInfo({...experienceInfo, [key]: e.target.value})
  }


  return (
  <div className="flex items-start justify-between bg-slate-400 h-screen gap-4 p-4">
    <Sidebar
      onChange={handlePersonalInfoChange}
      personalInfo={personalInfo}
    />
    <Resume
      personalInfo={personalInfo}
    />
  </div>
  )
}

export default App
