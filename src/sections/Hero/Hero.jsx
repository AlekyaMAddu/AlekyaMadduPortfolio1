import styles from './HeroStyles.module.css'
import heroImg from '../../assets/AlekyaMaddu_AI.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import codePenLight from '../../assets/codepen-light.svg'
import githubLight  from '../../assets/github-light.svg'
import LinkedinLight from '../../assets/linkedin-light.svg'
import codePenDark from '../../assets/codepen-dark.svg'
import githubDark  from '../../assets/github-dark.svg'
import LinkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/AlekyaMadduResume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme,toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const codePenIcon = theme === 'light' ? codePenLight : codePenDark;
    const githubIcon =theme === 'light' ? githubLight : githubDark;
    const LinkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;

    return (  
     <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture for Alekya Maddu" />
        <img src={themeIcon} alt="Color Mode Icon" className={styles.colorMode} onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>Alekya <br />Maddu</h1>
        <h2>Software Developer</h2>      
      <span>
        <a href="https://codepen.io/Alekya-the-solid" target="_blank">
        <img src={codePenIcon} alt="Codepen Icon"/></a>
        <a href="https://github.com/AlekyaMAddu" target="_blank">
        <img src={githubIcon} alt="GitHub Icon"/></a>
        <a href="https://www.linkedin.com/in/alekyamaddu/" target="_blank">
        <img src={LinkedinIcon} alt="Linkedin Icon"/></a>
      </span>
      <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses. 
          {/* Explore my digital playground! With over 4 years of experience in crafting seamless web applications, data-driven solutions, and cloud-powered innovations, I bring ideas to life with precision and creativity. From cutting-edge front-end designs to robust backend systems, discover my journey in tech and the impact I've created. Click to see how I can transform your vision into reality! */}
        </p>
      <a href={CV} download>
        <button className='hover'>Resume</button>
      </a>
      </div>
    </section>
    )
}
export default Hero;