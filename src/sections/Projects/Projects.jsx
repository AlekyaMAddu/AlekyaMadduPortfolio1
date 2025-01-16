import styles from './ProjectsStyles.module.css';
import DrAppointment from '../../assets/Dr.Appointment.png';
import DrAssist from '../../assets/Dr. Assist.png';
import Friendster from '../../assets/Friendster.png';
import Todo from '../../assets/Todo App.png'
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <>
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
            src={DrAppointment}
            link="https://github.com/AlekyaMAddu/Doctor-Appointment"
            h3="Dr Consult"
            p="Doctor Appointment Booking App"
            />
            <ProjectCard
            src={Todo}
            link="https://github.com/AlekyaMAddu/TodoApp"
            h3="Todo App"
            p="Todo App"
            />
            <ProjectCard
            src={Friendster}
            link="https://github.com/AlekyaMAddu/Friendster"
            h3="Friendster"
            p="Social Media App"
            />
            <ProjectCard
            src={DrAssist}
            link="https://github.com/AlekyaMAddu/Dr.Assist"
            h3="Dr Assist"
            p="Fitness Check App"
            />
        </div>
    </section>
    </>
    
  )
}

export default Projects
