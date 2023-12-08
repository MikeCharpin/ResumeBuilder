
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
    
import { Button } from "./ui/button"
import EducationForm from "./EducationForm"
import { PlusIcon } from "lucide-react"

export type ExpandSidebarSectionProps = {
    sectionName: string
    sectionState: any
    FormComponent: any
    FormIcon: any
    createForm: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSectionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
  

export default function ExpandSidebarSection({sectionName, sectionState, FormComponent, handleSectionChange, FormIcon, createForm}: ExpandSidebarSectionProps) {
    return(
        <div className="flex flex-col p-3 gap-3 border border-solid rounded-sm">
            <div className="flex font-bold">
               <FormIcon /> &nbsp; {sectionName}
            </div>
            <div className="border border-solid rounded-sm p-2">
            <Accordion type="multiple" >
                {sectionState.map((sectionBlockState) => 
                    <AccordionItem value={sectionBlockState.sectionBlockId}>
                    <AccordionTrigger>{sectionBlockState.title}</AccordionTrigger>
                    <AccordionContent>
                        <FormComponent
                            sectionBlockState={sectionBlockState}
                            onChange={handleSectionChange}
                        /> 
                    </AccordionContent>
                </AccordionItem>
                )}
            </Accordion>

                
               
            </div>
            <Button variant="outline" onClick={createForm}><PlusIcon />Add {sectionName}</Button>
        </div>

    )
}



