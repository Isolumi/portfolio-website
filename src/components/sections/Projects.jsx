import { v4 as uuidv4 } from 'uuid'
import { projects } from '/src/data.js'
import Card from '/src/components/elements/Card'
import '/src/stylesheets/sections/Work.css'

const Projects = () => {
	return (
		<section className='Work section' id='projects'>
			<div className='container'>
				<h2 className='Work-h2 section-head'>Projects</h2>
				<div className='Work-wrapper'>
					{projects.map((c) => (
						<Card
							name={c.name}
							description={c.description}
							stack={c.stack}
							linkProject={c.linkProject}
							linkGithub={c.linkGithub}
							key={uuidv4()}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects;
