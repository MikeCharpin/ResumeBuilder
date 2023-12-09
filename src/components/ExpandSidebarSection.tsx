
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
    
import { Button } from "./ui/button"
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
        <div className="flex flex-col p-4 gap-3  rounded-xl bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
            <div className="flex font-bold">
               <FormIcon /> &nbsp; {sectionName}
            </div>
            <div className=" rounded-sm ">
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
            <Button variant="secondary" onClick={createForm} ><PlusIcon />Add {sectionName}</Button>
        </div>

    )
}



