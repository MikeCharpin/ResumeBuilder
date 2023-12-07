import { Label } from "./ui/label"
import { Input } from "./ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { UserCircleIcon } from "lucide-react"


type AddPersonalInfoProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    fullName: string
    email: string
    location: string
    linkedin: string
    website: string
    phoneNumber: string
}

export default function AddPersonalInfo({ onChange, fullName, email, phoneNumber, location, linkedin, website }: AddPersonalInfoProps) {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e as React.ChangeEvent<HTMLInputElement>)
    }
    return(
        <div className="flex flex-col gap-1 p-3 border border-solid rounded-sm">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <div className="flex items-center">
                    <UserCircleIcon />&nbsp;<AccordionTrigger className="text-base font-semibold">Personal Details &nbsp;</AccordionTrigger>
                </div>
                <AccordionContent>
                        <form className="flex flex-col gap-3">
                        <div>
                            <Label>Full Name</Label>
                            <Input
                                id="full-name"
                                placeholder="full name"
                                type="text"
                                value={fullName}
                                onChange={handleChange}
                                data-key="fullName"
                            />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input
                                id="email"
                                placeholder="email"
                                type="text"
                                value={email}
                                onChange={handleChange}
                                data-key="email"
                            />
                        </div>
                        <div>
                            <Label>Phone Number</Label>
                            <Input
                                id="phoneNumber"
                                placeholder="phone number"
                                type="text"
                                value={phoneNumber}
                                onChange={handleChange}
                                data-key="phoneNumber"
                            />
                        </div>      
                        <div>
                            <Label>Location</Label>
                            <Input
                                id="location"
                                placeholder="location"
                                type="text"
                                value={location}
                                onChange={handleChange}
                                data-key="location"
                            />
                        </div>
                        <div>
                            <Label>Linkedin</Label>
                            <Input
                                id="linkedin"
                                placeholder="linkedin"
                                type="text"
                                value={linkedin}
                                onChange={handleChange}
                                data-key="linkedin"
                            />
                        </div>
                        <div>
                            <Label>Website</Label>
                            <Input
                                id="website"
                                placeholder="website URL"
                                type="text"
                                value={website}
                                onChange={handleChange}
                                data-key="website"
                            />
                        </div>          
                    </form>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    )
}