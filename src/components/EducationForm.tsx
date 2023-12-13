import { EducationInfo } from "@/example-data"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export type EducationFormProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    sectionBlockState: EducationInfo
}

export const EducationForm: React.FC<EducationFormProps> = ({ onChange, sectionBlockState }) => {
    return(
        <div  className="flex flex-col gap-1 border border-solid rounded-sm">
            <form 
                onSubmit={(e) => e.preventDefault()}
                id={sectionBlockState.sectionBlockId}
                data-section-name ="educationInfo"
                className="flex flex-col gap-3 section-form"
            >
                <div>
                    <Label>Degree / Certificate Title</Label>
                    <Input
                        id="title"
                        placeholder="What's the title of your degree or certificate?"
                        type="text"
                        value={sectionBlockState.title}
                        onChange={onChange}
                        data-key="title"
                    />
                </div>
                <div>
                    <Label>School Name</Label>
                    <Input
                        id="educationSchoolName"
                        placeholder="What's the name of the school or course your took?"
                        type="text"
                        value={sectionBlockState.educationSchoolName}
                        onChange={onChange}
                        data-key="educationSchoolName"
                    />
                </div>      
                <div>
                    <Label>Completion Date</Label>
                    <Input
                        id="educationEndDate"
                        placeholder="What year did you complete your education?"
                        type="text"
                        value={sectionBlockState.educationEndDate}
                        onChange={onChange}
                        data-key="educationEndDate"
                    />
                </div>
                <div>
                    <Label>Location</Label>
                    <Input
                        id="educationLocation"
                        placeholder="Where did you go for your education? (example: New York, NY or remote)"
                        type="text"
                        value={sectionBlockState.educationLocation}
                        onChange={onChange}
                        data-key="educationLocation"
                    />
                </div>        
            </form>
        </div>
    )
}