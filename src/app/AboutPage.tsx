/* AboutPage 
 * Bio, work experience, and education page
 */

import React, { useState } from 'react'
import clsx from 'clsx'
import css from '@styles/app/about.module.css'
import { AnimateFadeIn, IconButton, Spacer } from '@components'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useBooking } from '@context/BookingContext'

// Work/Education/Project Card Component
const ExperienceCard = ({
    logo,
    title,
    link,
    subtitle,
    date,
    description,
    details,
    past = false,
    logoCircle = false
}: {
    logo?: string,
    title: string,
    link?: string,
    subtitle: string,
    date?: string,
    description?: string,
    details?: string[],
    past?: boolean
    logoCircle?: boolean
}) => (
    <div className={clsx(
        css.about__card,
        past && css['about__card--past']
    )}>
        <div className={clsx(css.about__card_logo, logoCircle && css['about__card_logo--circle'])}>
            {logo ? <img src={logo} alt={title} /> : <div className={css.about__card_logo_placeholder}>{title[0]}</div>}
        </div>
        <div className={css.about__card_content}>
            <div className={css.about__card_header}>
                <h3 className={css.about__card_title}>
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {title} <i className="bi bi-box-arrow-up-right" />
                        </a>
                    ) : title}
                </h3>
            </div>
            <div className={css.about__card_subtitle}>{subtitle}</div>
        </div>
    </div>
)

// Personal Project Card Component
const ProjectCard = ({
    title,
    heroImage,
    description,
    techStack,
    githubUrl,
    wwwUrl
}: {
    title: string,
    heroImage?: string,
    description: string,
    techStack: string[],
    githubUrl?: string,
    wwwUrl?: string
}) => (
    <div className={css.about__project_card}>
        {heroImage && <div className={css.about__project_hero}>
            <img src={heroImage} alt={title} />
        </div>}
        <div className={css.about__project_content}>
            <h3 className={css.about__project_title}>{title}</h3>
            <p className={css.about__project_description}>{description}</p>
            <div className={css.about__project_tech}>
                {techStack.map(tech => (
                    <span key={tech} className={css.about__project_tech_chip}>{tech}</span>
                ))}
            </div>
            <div className={css.about__project_links}>
                {wwwUrl && (
                    <a href={wwwUrl} target="_blank" rel="noopener noreferrer" className={css.about__project_link}>
                        <i className="bi bi-globe" /> visit site
                    </a>
                )}
                {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={css.about__project_link}>
                        <i className="bi bi-github" /> view source
                    </a>
                )}
            </div>
        </div>
    </div>
)

export default function AboutPage() {
    const [isWorkCollapsed, setIsWorkCollapsed] = useState(true);
    const [isProjectsCollapsed, setIsProjectsCollapsed] = useState(false);
    const { openModal } = useBooking();

    return (
        <AnimateFadeIn ReactDOMElement={
            <div className={clsx('app', 'app--text')}>
                <div className={clsx(css.about)}>
                    <section className={css.about__content}>
                        <div className={css.about__bio}>
                            <h2 className={css.about__section_title_left}>Hello!</h2>
                            <p>
                                I'm Andrew, a photographer based in New York City. Outside of portraits & events, I shoot photos for some of the many running races in the city, often for my own team (the Dashing Whippets!).
                            </p>
                            <p>
                                This website is a personal project built in React to show both my professional work, and photos taken around the world in my personal time.
                            </p>
                            <Spacer size="xs" />
                            <h2 className={css.about__section_title_left}>Book with me</h2>
                            <p>
                                Whether you're looking to get portraits done or have an event, reach out with the details and we can work together! If you're interested in prints / usage rights, message me via email or Instagram – I'm responsive on both channels.
                            </p>
                            <Spacer size="m" />
                        </div>

                        {/* BOOKING LINK */}
                        <IconButton
                            icon={<i className="bi bi-calendar-check"></i>}
                            onClick={() => openModal()}
                            label="contact me to book!"
                            variant="booking"
                        />
                        <Spacer size="m" />


                        {/* PERSONAL PROJECTS */}
                        <h2
                            className={clsx(css.about__section_title, css['about__section_title--collapsible'])}
                            onClick={() => setIsProjectsCollapsed(!isProjectsCollapsed)}
                        >
                            personal projects
                            <i className={clsx("bi bi-chevron-down", css.about__section_title_icon, !isProjectsCollapsed && css['about__section_title_icon--open'])}></i>
                        </h2>

                        <AnimatePresence initial={false}>
                            {!isProjectsCollapsed && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <div className={css.about__cards}>
                                        <ProjectCard
                                            title="Tiffany Wang: Author Website"
                                            heroImage="/tiff-website.png"
                                            description="React-based personal website for writing & book inquiries."
                                            techStack={["React", "TypeScript", "Framer Motion", "CSS Modules"]}
                                            wwwUrl="https://tiffanyjwang.com"
                                            githubUrl="https://github.com/andrew-cui/tiffanyjwang-website/"
                                        />
                                        <ProjectCard
                                            title="Photography Portfolio"
                                            description="Ongoing personal photography portfolio website updates."
                                            techStack={["React", "TypeScript", "S3", "R2"]}
                                            githubUrl="https://github.com/andrewcui/photography-portfolio"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* INTERESTS */}
                        <h2 className={clsx(css.about__section_title)}>
                            side quests
                        </h2>
                        <div className={css.about__interests}>
                            {[
                                {
                                    label: "6x marathoner",
                                    icon:
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path d="M352.5 32C383.4 32 408.5 57.1 408.5 88C408.5 118.9 383.4 144 352.5 144C321.6 144 296.5 118.9 296.5 88C296.5 57.1 321.6 32 352.5 32zM219.6 240C216.3 240 213.4 242 212.2 245L190.2 299.9C183.6 316.3 165 324.3 148.6 317.7C132.2 311.1 124.2 292.5 130.8 276.1L152.7 221.2C163.7 193.9 190.1 176 219.6 176L316.9 176C345.4 176 371.7 191.1 386 215.7L418.8 272L480.4 272C498.1 272 512.4 286.3 512.4 304C512.4 321.7 498.1 336 480.4 336L418.8 336C396 336 375 323.9 363.5 304.2L353.5 287.1L332.8 357.5L408.2 380.1C435.9 388.4 450 419.1 438.3 445.6L381.7 573C374.5 589.2 355.6 596.4 339.5 589.2C323.4 582 316.1 563.1 323.3 547L372.5 436.2L276.6 407.4C243.9 397.6 224.6 363.7 232.9 330.6L255.6 240L219.7 240zM211.6 421C224.9 435.9 242.3 447.3 262.8 453.4L267.5 454.8L260.6 474.1C254.8 490.4 244.6 504.9 231.3 515.9L148.9 583.8C135.3 595 115.1 593.1 103.9 579.5C92.7 565.9 94.6 545.7 108.2 534.5L190.6 466.6C195.1 462.9 198.4 458.1 200.4 452.7L211.6 421z" />
                                        </svg>

                                },
                                {
                                    label: "ironman 70.3 training",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
                                        <circle cx="50" cy="25" r="20" />
                                        <path d="M10 50 h80 v45 h-25 l-15 -20 l-15 20 h-25 z" />
                                    </svg>
                                },
                                {
                                    label: "cycling",
                                    icon: <i class="bi bi-bicycle" style={{ fontSize: "20px" }}></i>
                                },
                                {
                                    label: "skiing",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -120 640 640">
                                        <path d="M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48 21.5 48 48 48zm73 356.1c-9.4-9.4-24.6-9.4-33.9 0-12.1 12.1-30.5 15.4-45.1 8.7l-135.8-70.2 49.2-73.8c12.7-19 10.2-44.5-6-60.6L293 215.7l-107-53.1c-2.9 19.9 3.4 40 17.7 54.4l75.1 75.2-45.9 68.8L35 258.7c-11.7-6-26.2-1.5-32.3 10.3-6.1 11.8-1.5 26.3 10.3 32.3l391.9 202.5c11.9 5.5 24.5 8.1 37.1 8.1 23.2 0 46-9 63-26 9.3-9.3 9.3-24.5 0-33.8zM120 91.6l-11.5 22.5c14.4 7.3 31.2 4.9 42.8-4.8l47.2 23.4c-.1.1-.1.2-.2.3l114.5 56.8 32.4-13 6.4 19.1c4 12.1 12.6 22 24 27.7l58.1 29c15.9 7.9 35 1.5 42.9-14.3 7.9-15.8 1.5-35-14.3-42.9l-52.1-26.1-17.1-51.2c-8.1-24.2-40.9-56.6-84.5-39.2l-81.2 32.5-62.5-31c.3-14.5-7.2-28.6-20.9-35.6l-11.1 21.7h-.2l-34.4-7c-1.8-.4-3.7.2-5 1.7-1.9 2.2-1.7 5.5.5 7.4l26.2 23z" /></svg>
                                }
                            ].map(interest => (
                                <IconButton
                                    key={interest.label}
                                    icon={interest.icon}
                                    label={interest.label}
                                    onClick={() => { }}
                                />
                            ))}
                        </div>


                        {/* WORK & EDUCATION */}
                        <h2
                            className={clsx(css.about__section_title, css['about__section_title--collapsible'])}
                            onClick={() => setIsWorkCollapsed(!isWorkCollapsed)}
                        >
                            work & education
                            <i className={clsx("bi bi-chevron-down", css.about__section_title_icon, !isWorkCollapsed && css['about__section_title_icon--open'])}></i>
                        </h2>
                        <AnimatePresence initial={false}>
                            {!isWorkCollapsed && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <div className={css.about__cards}>
                                        <ExperienceCard
                                            title="Titan"
                                            logo="https://media.licdn.com/dms/image/v2/D560BAQG7pj22xuxP6Q/company-logo_200_200/B56ZYC63PSH0AQ-/0/1743805707460/titanmsp_logo?e=2147483647&v=beta&t=yxLH4eiy4uKgg6COuStdTzyb9-g3jtPruhrVYPtxn-c"
                                            link="https://www.titanmsp.ai"
                                            subtitle="Product"
                                            date="2026 -"
                                        />
                                        <ExperienceCard
                                            title="Attentive"
                                            logo="https://appexchange.salesforce.com/image_host/e817eb37-23fb-4a14-8bf6-660d9b85b141.png"
                                            logoCircle={true}
                                            link="https://attentive.com"
                                            subtitle="Product Manager"
                                            date="2022 - 2026"
                                            past
                                        />
                                        <ExperienceCard
                                            title="McKinsey & Co."
                                            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZYc4fc0k0HXNIt08VQNhV4p0uun_vyehPw&s"
                                            link="https://mckinsey.com"
                                            subtitle="Consultant"
                                            date="2020 - 2022"
                                            past
                                        />
                                        <ExperienceCard
                                            title="University of Pennsylvania"
                                            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/500px-UPenn_shield_with_banner.svg.png"
                                            subtitle="B.S. Engineering / B.S. Economics"
                                            date="c/o 2020"
                                            past
                                        />
                                    </div>
                                    <Spacer size="s" />
                                </motion.div>
                            )}
                        </AnimatePresence>


                    </section>

                    <footer className={css.about__footer}>
                        <a href="mailto:hello@andrewcui.com" className={css.about__contact}>
                            <i className="bi bi-envelope" /> hello@andrewcui.com
                        </a>
                    </footer>
                </ div>
            </div>
        } />
    )
}
