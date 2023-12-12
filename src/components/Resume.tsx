import { MapPinIcon, SmartphoneIcon, LinkedinIcon, SendIcon, GlobeIcon } from 'lucide-react';
import { PersonalInfoProps } from '../example-data';

type ResumeProps = {
    personalInfo: any
    sectionsState: any
}

export default function Resume({ personalInfo, sectionsState }: ResumeProps) {
    return (
        <div className="bg-white w-3/4 h-full py-10 px-6">
            <ResumeHeader
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                location={personalInfo.location}
                linkedin={personalInfo.linkedin}
                website={personalInfo.website}
                phoneNumber={personalInfo.phoneNumber}

            />
            <div className='w-full flex flex-col gap-4 p-4'>
                <div className='pb-1'>
                    <div className='text-sm font-thin'>
                        PROJECTS
                    </div>
                    <div className='border border-solid w-full border-slate-300 rounded-full' />
                    <ProjectSection
                        projectSection={sectionsState.projectInfo}    
                    />
                </div>
                <div className='pb-1'>
                    <div className='text-sm font-thin'>
                        EXPERIENCE
                    </div>
                    <div className='border border-solid w-full border-slate-300 rounded-full' />
                    <ExperienceSection
                        experienceSection={sectionsState.experienceInfo}
                    />
                </div>
                <div className='pb-1'>
                    <div className='text-sm font-thin'>
                        INVOLVEMENT
                    </div>
                    <div className='border border-solid w-full border-slate-300 rounded-full' />
                    <InvolvementSection
                        involvementSection={sectionsState.involvementInfo}
                    />
                </div>
                <div className='pb-1'>
                    <div className='text-sm font-thin'>
                        EDUCATION
                    </div>
                    <div className='border border-solid w-full border-slate-300 rounded-full' />
                    <EducationSection
                        educationSection={sectionsState.educationInfo}
                    />
                </div>

            </div>
        </div>
    )
} 

type ResumeHeaderProps = PersonalInfoProps

function ResumeHeader({fullName, email, location, linkedin, website, phoneNumber}: ResumeHeaderProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-2xl font-bold">
                {fullName}
            </div>
            <div className="flex">
                <ul className="flex gap-4 text-xs">
                    <div className='flex items-center justify-center gap-1'>
                        <MapPinIcon className='w-3' />
                        <li>{location}</li>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <SendIcon className='w-3' />
                        <li>{email}</li>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <SmartphoneIcon className='w-3' />
                        <li>{phoneNumber}</li>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <LinkedinIcon className='w-3' />
                        <li>in/{linkedin}</li>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <GlobeIcon className='w-3' />
                        <li>{website}</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}






function ProjectSection({projectSection}: any) {
    return (
        <div className='w-full flex flex-col gap-3' >
            {projectSection.map((project: any) => 
            <div>
                    <div className="flex pt-2">
                        <div className='text-sm font-semibold'>
                            {project.title}
                        </div>
                        <div className='text-sm'>
                            &nbsp;| {project.projectTech}
                        </div>
                    </div>
                    <div className='text-xs'>
                        {project.projectLink}   | {project.projectStartDate} - {project.projectEndDate}
                    </div>
                    <div className='text-xs whitespace-pre-line'>
                        {project.projectDesc}
                    </div>
                </div>
            )}
            
        </div>
)}

function ExperienceSection({experienceSection}: any) {
    return (
        <div className='w-full flex flex-col pt-2 gap-3'>
            {experienceSection.map((sectionBlock: any) => 
                <div>
                    <div className="text-sm font-semibold">
                        {sectionBlock.title}
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div>
                            {sectionBlock.experienceBusinessName}
                        </div>
                        <div>
                            {sectionBlock.experienceStartDate} - {sectionBlock.experienceEndDate} | {sectionBlock.experienceLocation}
                        </div>
                    </div>
                    <div className='text-xs whitespace-pre-wrap'>
                        {sectionBlock.experienceDesc}
                    </div>
                </div>
            )}
            
        </div>
    )
}

type EducationSectionProps ={
    educationSection: any
}

function EducationSection({educationSection}: EducationSectionProps) {
    return (
        <div className='w-full flex flex-col pt-2 gap-3'>
            {educationSection.map((education: any) =>
                <div>
                    <div className='text-sm font-semibold'>
                        {education.title}
                    </div>
                    <div className='text-xs'>
                        {education.educationSchoolName} - {education.educationLocation} - {education.educationEndDate}
                    </div>
                </div>
            )}
            
        </div>
    )
}

function InvolvementSection({involvementSection}: any) {
    return (
        <div>
            {involvementSection.map((involvement) => 
                <div className='w-full flex flex-col pt-2'>
            <div className='flex'>
                <div className='text-sm font-semibold'>
                    {involvement.title} |
                </div>
                <div className='text-sm'>
                    &nbsp;{involvement.involvementPosition}
                </div>
            </div>
            <div className='text-xs pb-1'>
                {involvement.involvementLink} | {involvement.involvementStartDate} - {involvement.involvementEndDate}
            </div>
            <div className='text-xs whitespace-pre-wrap'>
                {involvement.involvementDesc}
            </div>
        </div>
            )}
        </div>
        
    )
}