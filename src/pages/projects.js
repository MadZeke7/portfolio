import styles from "@/styles/Projects.module.css"
import {AiOutlineGithub} from 'react-icons/ai'
import {GrDeploy} from 'react-icons/gr'

const projects=[
    {
        image : { src : '/jersey-shop.png', alt : 'Jersey Shop Screenshot'},
        title : "Shopping Site",
        desc : "Shopping app for Football Jerseys built with React.",
        gh_link : "https://github.com/Warstilide49/jersey-shop",
        deployement_link : "https://warstilide49.github.io/jersey-shop"

    },
    {
        image : { src : '/memory-game.png', alt : 'Memory Game Screenshot'},
        title : "Memory Game",
        desc : "Simple game to test your memory skills. Made with React.",
        gh_link : "https://github.com/Warstilide49/memory-game",
        deployement_link : "https://warstilide49.github.io/memory-game"

    },
    {
        image : { src : '/cv-project.png', alt : 'CV Project Screenshot'},
        title : "CV Project",
        desc : "Helps to create a CV with the information provided. Built with ReactJS.",
        gh_link : "https://github.com/Warstilide49/cv-project",
        deployement_link : "https://warstilide49.github.io/cv-project"

    },
    {
        image : { src : '/battleship.png', alt : 'Battleship Project Screenshot'},
        title : "Battleship",
        desc : "Classic battleship game built as part of the Odin Project",
        gh_link : "https://github.com/Warstilide49/battleship",
        deployement_link : "https://warstilide49.github.io/battleship"

    },
]
export default function Projects(){
    return(
        <div className={styles.projects}>
            <h1>Highlighted Work</h1>
            <div className={styles.projectContainer}>
                {projects.map((item, index) =>  
                    <div className={styles.project} key={index}>
                        <div className={styles.banner}>
                            <img src={item.image.src} alt={item.image.alt} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <div className={styles.links}>
                            <a href={item.gh_link} target="_blank" rel='noreferrer'> <AiOutlineGithub /></a>
                            <a href={item.deployement_link} target="_blank" rel='noreferrer'> <GrDeploy /></a>

                        </div>
                    </div>
                )}
            </div>
        </div>);
}