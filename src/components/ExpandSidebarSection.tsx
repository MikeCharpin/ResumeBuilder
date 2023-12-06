import { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
    
import { Button } from "./ui/button"
import EducationForm from "./EducationForm"

export type ExpandSidebarSectionProps = {
    sectionName: string
    sectionState: any
    FormComponent: any
    handleSectionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
  

export default function ExpandSidebarSection({sectionName, sectionState, FormComponent, handleSectionChange}: ExpandSidebarSectionProps) {
    return(
        <div className="flex flex-col p-3 gap-3 border border-solid rounded-sm">
            <div className="flex font-bold">
                {sectionName}
            </div>
            <div className="border border-solid rounded-sm p-2">
               
                {sectionState.map((sectionBlockState) =>
                    <FormComponent
                        sectionBlockState={sectionBlockState}
                        onChange={handleSectionChange}
                    /> 
                )}
               
            </div>
            <Button variant="outline">Add {sectionName}</Button>
        </div>

    )
}

{/* <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion> */}
