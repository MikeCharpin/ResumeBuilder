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
    sectionInfo: any
}
  

export default function ExpandSidebarSection({sectionName, sectionInfo}: ExpandSidebarSectionProps) {
    return(
        <div className="flex flex-col p-3 gap-3 border border-solid rounded-sm">
            <div className="flex font-bold">
                {sectionName}
            </div>
            <div className="border border-solid rounded-sm p-2">
                {sectionInfo.map((section) =>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{section.educationSchoolName}</AccordionTrigger>
                            <AccordionContent>
                                <EducationForm
                                    educationInfo={section}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )}
            </div>
            <Button variant="outline">Add {sectionName}</Button>
        </div>

    )
}