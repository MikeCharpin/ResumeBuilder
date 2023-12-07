import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "@/components/ui/textarea"



type ProjectsFormProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    sectionBlockState: any
}

export default function ProjectsForm({ onChange, sectionBlockState }: ProjectsFormProps) {


    return(
        <div  className="flex flex-col gap-1 p-3 border border-solid rounded-sm">
            <form 
                onSubmit={(e) => e.preventDefault()}
                id={sectionBlockState.sectionBlockId}
                data-section-name ="projectInfo"
                className="flex flex-col gap-3 section-form"
            >
                <div>
                    <Label>Project Title</Label>
                    <Input
                        id="title"
                        placeholder={`${sectionBlockState.title}`}
                        type="text"
                        value={sectionBlockState.title}
                        onChange={onChange}
                        data-key="title"
                    />
                </div>
                <div>
                    <Label>Project Tech</Label>
                    <Input
                        id="projectTech"
                        placeholder="projectTech"
                        type="text"
                        value={sectionBlockState.projectTech}
                        onChange={onChange}
                        data-key="projectTech"
                    />
                </div>      
                <div>
                    <Label>Start Date</Label>
                    <Input
                        id="projectStartDate"
                        placeholder="projectStartDate"
                        type="text"
                        value={sectionBlockState.projectStartDate}
                        onChange={onChange}
                        data-key="projectStartDate"
                    />
                </div>
                <div>
                    <Label>End Date</Label>
                    <Input
                        id="projectEndDate"
                        placeholder="projectEndDate"
                        type="text"
                        value={sectionBlockState.projectEndDate}
                        onChange={onChange}
                        data-key="projectEndDate"
                    />
                </div>
                <div>
                    <Label>Project Link</Label>
                    <Input
                        id="projectLink"
                        placeholder="projectLink"
                        type="text"
                        value={sectionBlockState.projectLink}
                        onChange={onChange}
                        data-key="projectLink"
                    />
                </div>
                <div>
                <Label>Description</Label>   
                <Textarea
                    id="projectDesc"
                    placeholder="projectDesc"
                    type="text"
                    value={sectionBlockState.projectDesc}
                    onChange={onChange}
                    data-key="projectDesc"
                />
                </div>        

            </form>
        </div>
    )
}