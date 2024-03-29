import { MapPinIcon, SmartphoneIcon, LinkedinIcon, SendIcon, GlobeIcon } from 'lucide-react';
import { EducationInfo, ExperienceInfo, PersonalInfo, InvolvementInfo, ProjectInfo, SectionData } from '../example-data';

type ResumeProps = {
    personalInfo: PersonalInfo
    sectionsState: SectionData
}

export default function Resume({ personalInfo, sectionsState }: ResumeProps) {
    return (
        <div>
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



function ResumeHeader({fullName, email, location, linkedin, website, phoneNumber}: PersonalInfo) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-2xl font-bold pb-2">
                {fullName}
            </div>
            <div className="flex">
                <ul className=" md:flex md:gap-4 grid lg:grid lg:gap-1 xl:flex xl:gap-4 gap-1 text-xs">
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


type ProjectSectionProps = {
  projectSection: ProjectInfo[];
};

function ProjectSection({ projectSection }: ProjectSectionProps) {
    return (
        <div className='w-full flex flex-col gap-3' >
            {projectSection.map((project: ProjectInfo) => 
            <div key={project.sectionBlockId}>
                    <div className="flex flex-wrap pt-2">
                        <div className='text-sm font-semibold'>
                            {project.title}
                        </div>
                        <div className='text-xs md:text-sm'>
                            &nbsp;| {project.projectTech}
                        </div>
                    </div>
                    <div className='text-xs flex flex-wrap'>
                        <div>{project.projectLink} </div> <div>| {project.projectStartDate} - {project.projectEndDate}</div>
                    </div>
                    <div className='text-xs whitespace-pre-line'>
                        {project.projectDesc}
                    </div>
                </div>
            )}
            
        </div>
)}


type ExperienceSectionProps = {
    experienceSection: ExperienceInfo[]
}

function ExperienceSection({experienceSection}: ExperienceSectionProps) {
    return (
        <div className='w-full flex flex-col pt-2 gap-3'>
            {experienceSection.map((experience: ExperienceInfo) => 
                <div key={experience.sectionBlockId}>
                    <div className="text-sm font-semibold">
                        {experience.title}
                    </div>
                    <div className='md:text-sm text-xs flex flex-wrap justify-between'>
                        <div>
                            {experience.experienceBusinessName}
                        </div>
                        <div className='flex flex-wrap'>
                            <div>{experience.experienceStartDate} - {experience.experienceEndDate}</div><div> | {experience.experienceLocation}</div>
                        </div>
                    </div>
                    <div className='text-xs whitespace-pre-wrap'>
                        {experience.experienceDesc}
                    </div>
                </div>
            )}
            
        </div>
    )
}

type EducationSectionProps = {
    educationSection: EducationInfo[]
}


function EducationSection({educationSection}: EducationSectionProps) {
    return (
        <div className='w-full flex flex-col pt-2 gap-3'>
            {educationSection.map((education: EducationInfo) =>
                <div key={education.sectionBlockId} >
                    <div className='text-sm font-semibold'>
                        {education.title}
                    </div>
                    <div className='text-xs flex flex-col md:flex-row'>
                        <div>{education.educationSchoolName}</div>
                         <div>&nbsp;- {education.educationLocation}</div>
                          <div>&nbsp; - {education.educationEndDate}</div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

type InvolvementSectionProps = {
    involvementSection: InvolvementInfo[]
}

function InvolvementSection({involvementSection}: InvolvementSectionProps) {
    return (
        <div className='w-full flex flex-col pt-2'>
            {involvementSection.map((involvement: InvolvementInfo) => 
                <div key={involvement.sectionBlockId}>
            <div className='flex flex-wrap' >
                <div className='text-sm font-semibold'>
                    {involvement.title}
                </div>
                <div className='text-sm'>
                   | &nbsp;{involvement.involvementPosition}
                </div>
            </div>
            <div className='text-xs pb-1 flex flex-wrap'>
                <div>{involvement.involvementLink}</div>
                 <div>| {involvement.involvementStartDate} - {involvement.involvementEndDate}</div>
            </div>
            <div className='text-xs whitespace-pre-wrap'>
                {involvement.involvementDesc}
            </div>
        </div>
            )}
        </div>
        
    )
}