import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Github, Mail, Menu, X,
  Code2, Layers3, Terminal, GraduationCap, Sparkles, ExternalLink,
  Smartphone, Utensils, Globe2, Phone, Rocket, Cpu
} from 'lucide-react'

const profile = {
  name: 'Sameer Gouda',
  email: 'sameergouda1020@gmail.com',
  phone: '8458026920',
  github: 'https://github.com/sameergouda1020-hue?tab=repositories',
  netlify: 'https://app.netlify.com/teams/sameersalil2006/projects',
  vercel: 'https://vercel.com/qlith7',
  intro: "I'm a B.Tech student and aspiring developer exploring web technologies, building practical projects, and turning ideas into clean, useful digital experiences."
}

const skills = [
  { name: 'HTML', short: 'HTML', className: 'html', note: 'Structure' },
  { name: 'CSS', short: 'CSS', className: 'css', note: 'Styling' },
  { name: 'JavaScript', short: 'JS', className: 'js', note: 'Interaction' },
  { name: 'React', short: '⚛', className: 'react', note: 'Components' },
  { name: 'Tailwind CSS', short: 'TW', className: 'tailwind', note: 'Utility UI' },
  { name: 'Git & GitHub', short: '⌘', className: 'git', note: 'Version control' },
  { name: 'VS Code', short: '</>', className: 'vscode', note: 'Development' },
  { name: 'Responsive UI', short: 'UI', className: 'ui', note: 'All screens' },
]

const projects = [
  {
    number: '01', name: 'Apple Store', category: 'E-COMMERCE EXPERIENCE',
    description: 'A product-focused storefront inspired by Apple, with a clean shopping interface and modern visual presentation.',
    stack: ['HTML', 'CSS', 'JavaScript'], url: 'https://wondrous-starship-cdc406.netlify.app/',
    icon: Smartphone, theme: 'apple'
  },
  {
    number: '02', name: 'FLAVORZ Store', category: 'FOOD & BRAND EXPERIENCE',
    description: 'A vibrant store experience built around food and flavour, bringing together bold visuals and a responsive layout.',
    stack: ['HTML', 'CSS', 'JavaScript'], url: 'https://melodic-basbousa-5e857c.netlify.app/',
    icon: Utensils, theme: 'flavor'
  }
]

function Reveal({ children, className = '' }) {
  const [show, setShow] = useState(false)
  const elementRef = useRef(null)
  useEffect(() => {
    const target = elementRef.current
    if (!target) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShow(true); observer.disconnect() }
    }, { threshold: 0.12 })
    observer.observe(target)
    return () => observer.disconnect()
  }, [])
  return <div ref={elementRef} className={`reveal reveal-pending ${show ? 'shown' : ''} ${className}`}>{children}</div>
}

function SectionTitle({ index, kicker, title, description }) {
  return <div className="section-title"><div><span className="section-index">{index} / {kicker}</span><h2>{title}</h2></div><p>{description}</p></div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (event) => setPointer({ x: (event.clientX / window.innerWidth - .5) * 12, y: (event.clientY / window.innerHeight - .5) * -12 })
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${profile.email}` }
  }
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <div className="noise" />
    <div className="aurora aurora-a" /><div className="aurora aurora-b" />
    <header className="header">
      <nav className="nav wrap">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-glyph">S</span><span>SAMEER<span className="brand-dot">.</span></span></a>
        <div className="nav-links">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
        <a className="nav-contact" href="#contact">Let's connect <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}<ArrowUpRight size={15}/></a>)}</div>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot"/> OPEN TO LEARNING & OPPORTUNITIES</div>
          <p className="hello">HELLO WORLD, I'M</p>
          <h1>Sameer <span>Gouda</span><i>.</i></h1>
          <div className="role-line"><span/> B.TECH STUDENT <b>✳</b> DEVELOPER</div>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a><a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div>
          <div className="hero-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><button onClick={copyEmail} aria-label="Copy email"><Mail/></button><span>{copied ? 'Email copied!' : 'Based in India · Building my next idea'}</span></div>
        </div>

        <div className="hero-stage" style={{ '--mx': `${pointer.x}px`, '--my': `${pointer.y}px` }}>
          <div className="stage-grid"/><div className="stage-ring ring-outer"/><div className="stage-ring ring-inner"/><div className="stage-ring ring-dash"/>
          <div className="stage-core"><div className="photo-aura"/><div className="photo-card"><img src="/sameer-photo.png" alt="Sameer Gouda"/><div className="photo-caption"><span>CREATOR / LEARNER</span><b>SG — 026</b></div></div></div>
          {skills.map((skill, i) => <div key={skill.name} className={`orbit-skill orbit-${i + 1} ${skill.className}`}><b>{skill.short}</b><span>{skill.name}</span></div>)}
          <div className="stage-label label-top"><span className="tiny-cross">✳</span> DIGITAL CRAFTSMANSHIP</div>
          <div className="stage-label label-bottom"><span/> CURIOUS BY DEFAULT</div>
          <div className="floating-coordinate">20°N<br/>85°E</div>
        </div>
        <a className="scroll-hint" href="#about"><span><ArrowDown size={15}/></span> SCROLL TO EXPLORE</a>
        <span className="hero-side-note">PORTFOLIO — 2026</span>
      </section>

      <section className="section wrap" id="about"><Reveal><SectionTitle index="01" kicker="ABOUT ME" title="Curiosity into creation." description="Learning the fundamentals, experimenting with ideas, and getting better with every build."/><div className="about-grid"><div className="about-statement"><span className="quote-mark">“</span><h3>I believe every great developer starts with a <em>curious mind</em> and the courage to build.</h3><p>I'm currently developing my skills in frontend development and programming. I enjoy creating responsive interfaces, exploring new tools, and solving small problems that make a real difference.</p></div><div className="about-facts"><div><span>01</span><section><b>Currently studying</b><p>B.Tech / Engineering</p></section><GraduationCap/></div><div><span>02</span><section><b>Focused on</b><p>Web development & programming</p></section><Code2/></div><div><span>03</span><section><b>My approach</b><p>Learn · Build · Improve</p></section><Rocket/></div></div></div></Reveal></section>

      <section className="section wrap skills-section" id="skills"><Reveal><SectionTitle index="02" kicker="MY TOOLKIT" title="The tools behind the ideas." description="A growing toolkit built around strong fundamentals and practical development."/><div className="skills-layout"><div className="skills-orbit-art"><div className="skill-orbit o1"/><div className="skill-orbit o2"/><div className="skill-orbit o3"/><div className="skill-center"><Cpu size={36}/><span>SKILLS<br/>CORE</span></div><span className="skill-star s1">✳</span><span className="skill-star s2">✦</span><span className="skill-star s3">+</span></div><div className="skill-cards">{skills.map((skill, i) => <div className="skill-row" key={skill.name}><span className={`skill-token ${skill.className}`}>{skill.short}</span><div><b>{skill.name}</b><small>{skill.note}</small></div><span className="skill-number">0{i + 1}</span></div>)}</div></div><div className="learning-note"><Sparkles size={21}/><div><span>ALWAYS IN PROGRESS</span><b>The next skill is always one project away.</b></div><ArrowUpRight size={20}/></div></Reveal></section>

      <section className="section wrap" id="projects"><Reveal><SectionTitle index="03" kicker="SELECTED WORK" title="A little work in progress." description="Two projects built while exploring modern web layouts and user experiences."/></Reveal><div className="projects-grid">{projects.map((project) => { const Icon = project.icon; return <Reveal className="project-reveal" key={project.number}><article className={`project-card ${project.theme}`}><a className="project-visual" href={project.url} target="_blank" rel="noreferrer"><div className="project-visual-top"><span>SG / PROJECT {project.number}</span><ExternalLink size={17}/></div><div className="project-art"><div className="art-orbit art-orbit-one"/><div className="art-orbit art-orbit-two"/><div className="art-icon"><Icon size={54}/></div><span className="art-plus plus-a">✳</span><span className="art-plus plus-b">+</span></div><span className="project-open">OPEN LIVE PROJECT <ArrowUpRight size={14}/></span></a><div className="project-details"><div className="project-kicker">{project.category}</div><div className="project-heading"><h3>{project.name}</h3><span>{project.number}</span></div><p>{project.description}</p><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div><a className="project-link" href={project.url} target="_blank" rel="noreferrer">View live project <ArrowUpRight size={16}/></a></div></article></Reveal>})}</div><div className="more-work"><span>MORE EXPERIMENTS & REPOSITORIES</span><a href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <Github size={17}/></a></div></section>

      <section className="section wrap platform-section"><Reveal><SectionTitle index="04" kicker="ELSEWHERE" title="Where I build & deploy." description="Find my code and deployment work across these platforms."/><div className="platform-grid"><a href={profile.github} target="_blank" rel="noreferrer"><Github/><span><small>CODE & REPOSITORIES</small><b>GitHub</b></span><ArrowUpRight/></a><a href={profile.netlify} target="_blank" rel="noreferrer"><Globe2/><span><small>DEPLOYMENTS</small><b>Netlify</b></span><ArrowUpRight/></a><a href={profile.vercel} target="_blank" rel="noreferrer"><Layers3/><span><small>DEPLOYMENTS</small><b>Vercel</b></span><ArrowUpRight/></a></div></Reveal></section>

      <section className="section wrap contact-section" id="contact"><Reveal><div className="contact-panel"><div className="contact-glow"/><div className="contact-copy"><span className="section-index">05 / SAY HELLO</span><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>Open to learning opportunities, collaboration, feedback, and connecting with people who love creating for the web.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17}/> Email Sameer <ArrowUpRight size={16}/></a><a className="button button-ghost" href={`tel:+91${profile.phone}`}><Phone size={16}/> Call me</a></div></div><div className="contact-details"><span>GET IN TOUCH</span><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={15}/></a><a href={`tel:+91${profile.phone}`}>+91 {profile.phone}<ArrowUpRight size={15}/></a><div className="contact-monogram">SG<span>.</span></div></div></div></Reveal></section>
    </main>

    <footer className="footer wrap"><a className="footer-brand" href="#home">SAMEER<span>.</span></a><p>© {new Date().getFullYear()} Sameer Gouda · Made with curiosity.</p><a href="#home">BACK TO TOP ↑</a></footer>
  </div>
}
