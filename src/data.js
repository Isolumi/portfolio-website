import * as icon  from 'react-icons/si'

const profile = {
	name: 'Hubert Xu',
	role: 'Software Developer',
	description: 'Computer Science Specialist at the University of Toronto',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/Isolumi' },
    { icon: icon.SiLinkedin, link: 'https://www.linkedin.com/in/~hx'}
];

const brand = 'HX'


const projects = [
	{
		name: 'Notely',
		description: 'Conditional GAN and OCR system built using PyTorch, to accurately replicate user handwriting styles and recognize text from images.',
		stack: [
			{ icon: icon.SiPytorch, name: 'PyTorch' },
			{ icon: icon.SiNumpy, name: 'Numpy' },
            { icon: icon.SiOpencv, name: 'OpenCV' },
			{ icon: icon.SiPython, name: 'Python' },
		],
		linkProject: 'https://github.com/Project-Notely/notely-ml',
		linkGithub: 'https://github.com/Project-Notely/notely-ml',
	},
	{
		name: 'UserThreads',
		description: 'User-level threading library for the Ubuntu Linux distribution with preemptive scheduling, utilizing a priority queue for efficient thread management.',
		stack: [
			{ icon: icon.SiC, name: 'C' },
		],
		linkProject: 'https://github.com/Isolumi/userthreads',
		linkGithub: 'https://github.com/Isolumi/userthreads',
	},
	{
		name: 'ClassLynk',
		description: 'Scheduling application, utilizing Google Maps Platform capabilities with precision-enhanced algorithms to create optimized class schedules.',
		stack: [
            { icon: icon.SiGooglecloud, name: 'Google Cloud' },
            { icon: icon.SiFirebase, name: 'Firebase' },
            { icon: icon.SiJava, name: 'Java' },
		],
		linkProject: 'https://github.com/Isolumi/ClassLynk',
		linkGithub: 'https://github.com/Isolumi/ClassLynk',
	},
	{
		name: 'Frontend Kevin',
		description: 'DEI-focused developer tool that enables non-coders to voice their ideas, transforming them into functional applications.',
		stack: [
			{ icon: icon.SiFirebase, name: 'Firebase' },
			{ icon: icon.SiReact, name: 'ReactJS' },
            { icon: icon.SiPython, name: 'Python' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
		],
		linkProject: 'https://github.com/Isolumi/Kevin',
		linkGithub: 'https://github.com/Isolumi/Kevin',
	},
]

const experiences = [
	{
		Company: "UofTHacks",
		Role: "Software Engineer",
		StartDate: "May 2024",
		EndDate: "Present",
		Description: [
			"Designed and maintained a responsive website using NextJS, improving interactivity and delivering a seamless experience for over 3000 UofTHacks applicants by resolving prioritized issues and ensuring continuous functionality.",
            "Developed a Python script using Pillow and Pandas to parse hacker data from CSV files and generate custom name-tags with QR codes for efficient identification during the event."
		],
		Location: "Toronto, ON",
		Icon: "/src/assets/uofthacks.svg"
	},
    {
        Company: "Loobo Inc.",
		Role: "Fullstack Developer",
        StartDate: "Apr 2023",
        EndDate: "Sep 2023",
        Description: [
			"Developed full-stack transaction management system which showcases data from a database. Built using Java with Spring MVC and Spring Data to handle server-side operations, React with Vite for frontend, and PostgreSQL for database.",
			"Conducted comprehensive QA testing utilizing Amazon Alexa Qualification Tool for automated device testing, enabling efficient verification of application features, compatibility, and performance.",
		],
        Location: "Richmond Hill, ON",
		Icon: "/src/assets/looboinc.svg"
    },
];


const stack = [
	{
		name: 'Languages',
		items: [
            { icon: icon.SiPython, name: 'Python'},
            { icon: icon.SiJava, name: 'Java'},
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap', },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiDeno, name: 'Deno' },
			{ icon: icon.SiMongodb, name: 'MongoDB', },
			{ icon: icon.SiFirebase, name: 'Firebase', },
		],
	},
]

const contact = {
	description: 'For any hiring opportunities or questions, please feel free to contact me. Looking to make an impact with you.',
	email: 'hubert.xu@mail.utoronto.ca'
}

export { profile, social, projects, experiences, stack, contact, brand }