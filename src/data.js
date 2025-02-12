import * as icon  from 'react-icons/si'

const profile = {
	name: 'Hubert Xu',
	role: 'Software Engineer',
	description: 'Computer Science Specialist at the University of Toronto',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/Isolumi' },
    { icon: icon.SiLinkedin, link: 'https://www.linkedin.com/in/~hx'}
];

const brand = 'HX'


const work = [
	{
		name: 'Notely',
		description: 'Phasellus metus mi, scelerisque eu volutpat non, posuere et massa. Nunc hendrerit, augue non fringilla mattis.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Pokedex',
		description: 'Etiam eget volutpat risus. Nam magna bibendum a metus dignissim, id eleifend libero luctus molestie eget.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'E-Commerce',
		description: 'Nullam id mauris auctor, sollicitudin sapien id, sagittis turpis proin et nunc sempe, venenatis erat.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Twitter clon',
		description: 'Cras leo mauris, gravida vel lectus ac, congue luctus odio. Sed varius varius est eget convallis sagittis sit amet.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
]

const experiences = [
	{
		Company: "Shopify",
		Role: "Software Engineer - Backend",
		StartDate: "September 2024",
		EndDate: "December 2024",
		Description: [
			"Developed a Rails geolocation service and refactored Action View components for the Shopify portal.",
			"Improved Kafka topic processing and erasure job SQL query generation to support BigQuery table redactions indexed by cookie IDs, increasing PII erasure coverage from 22% to 100%.",
			"Provisioned GCP Dataplex resources with Terraform and implemented a Rake task in GitHub Actions to synchronize and standardize SQL table metadata and schemas across 250+ applications.",
			"Built a pipeline failure notifier job in Ruby with GitHub issues and Slackbot integration, cutting SEV-3 incident response times across 78 services and improving observability."
		],
		Location: "Toronto, ON",
		Icon: "./images/shopify.png"
	},
    {
        Company: "Sparklease",
		Role: "Full Stack Developer",
        StartDate: "January 2024",
        EndDate: "August 2024",
        Description: [
			"Architected and implemented a C# Redis caching layer for microservices, integrated with an edge CDN and Azure Blob Storage, optimizing API response times from 1.5s to 0.3s for high-traffic services.",
			"Engineered a payment and subscription gateway using ASP.NET Core MVC and Stripe webhooks, processing $30k/month, as well as an analytics dashboard to boost financial reporting efficiency.",
            "Spearheaded a 100% codebase migration from .NET Core 2.0 to 6.0, improving performance and package compatibility."
		],
        Location: "Toronto, ON",
		Icon: "./images/sparklease.jpeg"
    },
	{
        Company: "Royal Bank of Canada",
		Role: "Software Engineer - Infrastructure Security",
        StartDate: "May 2023",
        EndDate: "August 2023",
        Description: [
			"Built and deployed a containerized service update anomaly job for Azure/AWS cloud services with Python using machine learning and web scraping, resulting in over $7000 saved per service reviewed.",
			"Established CI/CD pipelines with Jenkins on AKS integrated with 10+ control tools; configured Kubernetes clusters for security following internal DevSecOps standards.",
			"Implemented robust Terraform IaC for Azure AKS clusters, enabling optimized connections to external OpenAI instances and saving developer hours."
		],
        Location: "Toronto, ON",
		Icon: "./images/RBC.png"
    },
    {
        Company: "Royal Bank of Canada",
		Role: "Software Developer - Developer Tools",
        StartDate: "July 2022",
        EndDate: "August 2022",
        Description: [
			"Collaborated with 2 teams in an Agile environment to develop features for an internal application that allows over 4000 RBC developers to view and contribute to enterprise-level InnerSource projects.",
			"Facilitated the addition of various UI/UX interfaces through the creation of SCSS data themes and reactive Angular components using NgRx.",
			"Streamlined the implementation of a backend data pipeline by adding a Elasticsearch engine web crawler as FastAPI service - dynamic threading and a custom router logic flow were used to reduce load times by up to 50x.",
		],
        Location: "Toronto, ON",
		Icon: "./images/RBC.png"
    },
    {
        Company: "Immerse Education",
		Role: "Student Researcher",
        StartDate: "July 2021",
        EndDate: "August 2021",
        Description: [
			"Compiled and augmented financial transactions data from Kaggle datasets and trained NB, DT, LR, and CNN models in R with the collected data for the classification of financial fraud (CNN model was 24% more accurate than conventional classifiers proposed by other papers).",
			"Wrote a paper documenting the project under the mentorship of professor Giovanna Maria Dimitri who has a Cambridge computer science PhD.",
		],
        Location: "Cambridge, England",
		Icon: "./images/Immerse.jpg"
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
	description: 'Tenetur laudantium? Aliquid ipsum perferendis blanditiis non. Adipisci eos numquam reiciendis, rerum, quo similique reprehenderit. Adipisci eos numquam reiciendis',
	email: 'example@email.com'
}

export { profile, social, work, experiences, stack, contact, brand }