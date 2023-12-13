import { InvolvementInfo } from "@/example-data"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "@/components/ui/textarea"



export type InvolvementFormProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    sectionBlockState: InvolvementInfo
}

export const InvolvementForm: React.FC<InvolvementFormProps> = ({ onChange, sectionBlockState }) => {


    return(
        <div  className="flex flex-col gap-1 p-3 border border-solid rounded-sm">
            <form 
                onSubmit={(e) => e.preventDefault()}
                id={sectionBlockState.sectionBlockId}
                data-section-name ="involvementInfo"
                className="flex flex-col gap-3 section-form"
            >
                <div>
                    <Label>Involvement Title</Label>
                    <Input
                        id="title"
                        placeholder="What was your title?"
                        type="text"
                        value={sectionBlockState.title}
                        onChange={onChange}
                        data-key="title"
                    />
                </div> 
                <div>
                    <Label>Start Date</Label>
                    <Input
                        id="involvementStartDate"
                        placeholder="When did you start?"
                        type="text"
                        value={sectionBlockState.involvementStartDate}
                        onChange={onChange}
                        data-key="involvementStartDate"
                    />
                </div>
                <div>
                    <Label>End Date</Label>
                    <Input
                        id="involvementEndDate"
                        placeholder="When did you leave the position?"
                        type="text"
                        value={sectionBlockState.involvementEndDate}
                        onChange={onChange}
                        data-key="involvementEndDate"
                    />
                </div>
                <div>
                    <Label>Involvement Link</Label>
                    <Input
                        id="involvementLink"
                        placeholder="What is the URL of the organization?"
                        type="text"
                        value={sectionBlockState.involvementLink}
                        onChange={onChange}
                        data-key="involvementLink"
                    />
                </div>
                <div>
                    <Label>Description</Label>   
                    <Textarea
                        id="involvementDesc"
                        placeholder="What did you accomplish in this position?"
                        value={sectionBlockState.involvementDesc}
                        onChange={onChange}
                        data-key="involvementDesc"
                    />
                </div>        

            </form>
        </div>
    )
}