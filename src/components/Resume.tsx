import { MapPinIcon, SmartphoneIcon, LinkedinIcon, SendIcon, GlobeIcon } from 'lucide-react';

export default function Resume() {
    return (
        <div className="bg-white w-3/4 h-full p-4">
            <ResumeHeader />
            <ProjectSection />
            <ExperienceSection />
            <EducationSection />
            <InvolvementSection />
        </div>
    )
} 

function ResumeHeader() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-xl">
                Mike Charpin
            </div>
            <div className="flex">
                <ul className="flex gap-1.5 text-xs">
                    <div className='flex items-center justify-center gap-0.5'>
                        <MapPinIcon className='w-1' />
                        <li>Brooklyn, NY</li>
                    </div>
                    <div className='flex items-center justify-center gap-0.5'>
                        <SendIcon className='w-1' />
                        <li>Michael.Charpin@gmail.com</li>
                    </div>
                    <div className='flex items-center justify-center gap-0.5'>
                        <SmartphoneIcon className='w-1' />
                        <li>555-555-1234</li>
                    </div>
                    <div className='flex items-center justify-center gap-0.5'>
                        <LinkedinIcon className='w-1' />
                        <li>/michael-charpin</li>
                    </div>
                    <div className='flex items-center justify-center gap-0.5'>
                        <GlobeIcon className='w-1' />
                        <li>MichaelCharpin.com</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

function ProjectSection() {
    return (
        <div className='w-full flex flex-col'>
            <div className='text-sm font-bold'>
                PROJECTS
            </div>
        </div>
    )
}
function ExperienceSection() {
    return (
        <div>
            ExperienceSection
        </div>
    )
}

function EducationSection() {
    return (
        <div>
            EducationSection
        </div>
    )
}

function InvolvementSection() {
    return (
        <div>
            InvolvementSection
        </div>
    )
}