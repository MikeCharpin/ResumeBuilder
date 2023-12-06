import { Input } from "./ui/input"
import { Label } from "./ui/label"


type EducationFormProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    sectionBlockState: any
}

export default function EducationForm({ onChange, sectionBlockState }: EducationFormProps) {


    return(
        <div  className="flex flex-col gap-1 p-3 border border-solid rounded-sm">
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
                        placeholder={`${sectionBlockState.title}`}
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
                        placeholder="educationSchoolName"
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
                        placeholder="educationEndDate"
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
                        placeholder="educationLocation"
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