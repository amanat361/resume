import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <div className="flex flex-col gap-4 col-span-2 justify-between">
            <div className="gap-2">
                <h1 className="font-bold text-6xl">Samin Amanat</h1>
                <p className="font-light text-4xl">Full Stack Engineer</p>
            </div>
            <Icons />
        </div>
    );
}

function Icon( { brand } ) {
    return <Image src={`/${brand}.svg`} width={70} height={70} alt={brand} />
}

function Bio() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <Image src="/sam.png" width={200} height={200} alt="picture of myself" className="border-2 rounded-full" />
        </div>
    );
}

function Icons() {
    return (
        <div className="flex flex-row gap-4 w-full justify-evenly items-center">
            <Icon brand="next" />
            <Icon brand="react" />
            <Icon brand="tailwind" />
            <Icon brand="vercel" />
            <Icon brand="supabase" />
        </div>
    );
}

function Project( { image } ) {
    return <Image className="rounded-lg shadow-lg w-full object-cover h-44" src={`/${image}`} width={1000} height={1000} alt={image} />
}

function Gallery() {
    return (
        <div className="grid grid-cols-3 gap-2">
            <Project image="python" />
            <Project image="python" />
            <Project image="python" />
        </div>
    );
}

function Contact() {
    return (
        <div className="grid grid-cols-3 w-full">
            <div className="font-medium text-slate-800 flex gap-4 items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="w-8 h-8 text-emerald-700"/>
                <p>(925) 451 - 2502</p>
            </div>
            <div className="font-medium text-slate-800 flex gap-4 items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 text-emerald-700"/>
                <p>sam@firewave.dev</p>
            </div>
            <div className="font-medium text-slate-800 flex gap-4 items-center justify-center">
                <FontAwesomeIcon icon={faLink} className="w-8 h-8 text-emerald-700"/>
                <p>https://firewave.dev</p>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div className="flex flex-col gap-4">
            <Project image="backend.png" />
            <p className="font-bold text-xl">Founder of Firewave</p>
            <ul>
                <li>* Optimized server infrastructure</li>
                <li>* Implemented continuous integration</li>
                <li>* Managed and scaled cloud resources</li>
            </ul>
            <Project image="teaching.jpg" />
            <p className="font-bold text-xl">Lead Instructor at theCoderSchool</p>
            <ul>
                <li>* Taught foundational coding skills</li>
                <li>* Developed and refined curriculum</li>
                <li>* Mentored students on real-world projects</li>
            </ul>
        </div>
    );
}

function Education() {
    return (
        <div className="flex flex-col gap-4">
            <Project image="dvc.jpg" />
            <p className="font-bold text-xl">Associates in Computer Science</p>
            <ul>
                <li>* Honors student with 4.0 GPA</li>
                <li>* Member of Pi Theta Kappa Honors Society</li>
                <li>* Member of Google Developers Club</li>
            </ul>
            <Project image="aws.jpg" />
            <p className="font-bold text-xl">AWS Certified Cloud Practitioner</p>
            <ul>
                <li>* Containerized continuous integration</li>
                <li>* Customized SMTP email server</li>
                <li>* Cloud functions with Lambda</li>
            </ul>
        </div>
    );
}

function Footer() {
    return (
        <div className="flex justify-between">
            <p className="font-bold">Looking forward to the unique connections <span className="text-emerald-600">TechCrunch Disrupt</span> brings. Let's turn a brief introduction into lasting collaboration.</p>
            <Icon brand="techcrunch" />
        </div>
    );
}

export default function Resume() {
    return (
        <main className="flex flex-col gap-4 p-4 w-full max-w-6xl">
            <div className="grid grid-cols-3 w-full gap-4">
                <Header />
                <Bio />
            </div>
            <hr/>
            <Contact />
            <hr/>
            <div className="grid grid-cols-2 w-full gap-4">
                <Experience />
                <Education />
            </div>
            <hr/>
            <Footer />
        </main>
    );
}