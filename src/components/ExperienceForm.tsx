import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "@/components/ui/textarea"



type ExperienceFormProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    sectionBlockState: any
}

export default function ExperienceForm({ onChange, sectionBlockState }: ExperienceFormProps) {


    return(
        <div  className="flex flex-col gap-1 p-3 border border-solid rounded-sm">
            <form 
                onSubmit={(e) => e.preventDefault()}
                id={sectionBlockState.sectionBlockId}
                data-section-name ="experienceInfo"
                className="flex flex-col gap-3 section-form"
            >
                <div>
                    <Label>Job Title</Label>
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
                    <Label>Business Name</Label>
                    <Input
                        id="experienceBusinessName"
                        placeholder="experienceBusinessName"
                        type="text"
                        value={sectionBlockState.experienceBusinessName}
                        onChange={onChange}
                        data-key="experienceBusinessName"
                    />
                </div>      
                <div>
                    <Label>Start Date</Label>
                    <Input
                        id="experienceStartDate"
                        placeholder="experienceStartDate"
                        type="text"
                        value={sectionBlockState.experienceStartDate}
                        onChange={onChange}
                        data-key="experienceStartDate"
                    />
                </div>
                <div>
                    <Label>End Date</Label>
                    <Input
                        id="experienceEndDate"
                        placeholder="experienceEndDate"
                        type="text"
                        value={sectionBlockState.experienceEndDate}
                        onChange={onChange}
                        data-key="experienceEndDate"
                    />
                </div>
                <div>
                    <Label>Location</Label>
                    <Input
                        id="experienceLocation"
                        placeholder="experienceLocation"
                        type="text"
                        value={sectionBlockState.experienceLocation}
                        onChange={onChange}
                        data-key="experienceLocation"
                    />
                </div>
                <div>
                <Label>Description</Label>   
                <Textarea
                    id="experienceDesc"
                    placeholder="experienceDesc"
                    type="text"
                    value={sectionBlockState.experienceDesc}
                    onChange={onChange}
                    data-key="experienceDesc"
                />
                </div>        

            </form>
        </div>
    )
}