import Resume from "./components/Resume"
import Sidebar from "./components/Sidebar"

function App() {


  return (
  <div className="flex items-start justify-between bg-slate-400 h-screen gap-4 p-4">
    <Sidebar />
    <Resume />
  </div>
  )
}

export default App
