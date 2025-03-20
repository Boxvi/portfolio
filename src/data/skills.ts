import {
  type IconType,
  SiAndroid,
  SiAstro,
  SiBootstrap,
  SiCoffeescript,
  SiCss3,
  SiDocker,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiSass,
  SiSpringboot,
  SiTailwindcss,
  SiVite,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'vite', icon: SiVite },
        { skill: 'bootstrap', icon: SiBootstrap },
      ],
    },
    {
      field: 'Backend',
      skills: [
        { skill: 'nodejs', icon: SiNodedotjs },
        { skill: 'spring boot', icon: SiSpringboot },
        { skill: 'oracle', icon: SiOracle },
        { skill: 'postgresql', icon: SiPostgresql },
        { skill: 'mongodb', icon: SiMongodb },
        { skill: 'mysql', icon: SiMysql },
        { skill: 'nginx', icon: SiNginx },
        { skill: 'docker', icon: SiDocker },
      ],
    },
    {
      field: 'Lenguajes',
      skills: [
        { skill: 'python', icon: SiPython },
        { skill: 'php', icon: SiPhp },
        { skill: 'java', icon: SiCoffeescript },
      ],
    },
    {
      field: 'Mobile',
      skills: [
        { skill: 'android', icon: SiAndroid },
        { skill: 'flutter', icon: SiFlutter },
      ],
    },
  ]

export default SKILLS
