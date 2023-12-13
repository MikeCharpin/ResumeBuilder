import { ExperienceInfo } from "@/example-data"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "@/components/ui/textarea"



export type ExperienceFormProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    sectionBlockState: ExperienceInfo
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ onChange, sectionBlockState }) => {


    return(
        <div  className="flex flex-col gap-1 border border-solid rounded-sm">
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
                        placeholder="What's the name of your role at this job? (recommend using industry standard naming)"
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
                        placeholder="What's the name of the business you were apart of?"
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
                        placeholder="When did you start working? "
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
                        placeholder="When did you leave this position?"
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
                        placeholder="Where was this position located?"
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
                    placeholder="What did you accomplish in this role?"
                    value={sectionBlockState.experienceDesc}
                    onChange={onChange}
                    data-key="experienceDesc"
                />
                </div>        

            </form>
        </div>
    )
}