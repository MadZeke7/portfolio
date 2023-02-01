import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {AiOutlineMail, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'

export default function Home() {
	return (
		<>
		<Head>
			<title>Portfolio</title>
			<meta name="description" content="Portfolio made by Warstilide49 using create next app" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<h1 className={styles.name}>Evin Daniel Renji</h1>
		<div className={styles.content}>
			<p>Hey, I am Evin, an Analyst at Deloitte Consulting USI where I work primarily as a Frontend Engineer.</p>
			<div className={styles.desc}>
				A dedicated, organised and methodical individual who has good interpersonal skills, is an excellent team worker and is very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach to work and getting things done.
			</div>
			<div className={styles.socials}>
				<a href="mailto:erenji.deloitte.com"> <AiOutlineMail /> Evin Daniel Renji</a>  
				<a href="https://www.twitter.com/evinrenji" target="_blank" rel='noreferrer'> <AiOutlineTwitter /> Evin Renji</a>
				<a href="https://github.com/Warstilide49" target="_blank" rel='noreferrer'> <AiOutlineGithub /> Warstilide49</a>
			</div>
		</div>
		</>
	)
}
