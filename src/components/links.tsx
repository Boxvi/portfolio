import {
  IconType,
  SiFacebook,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:hola@boxvisoft.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/Boxvi',
    },

  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
/*
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/boris-quizhpe',
    },
    {
      icon: SiFacebook,
      href: 'https://www.facebook.com/BoxviSoft',
    },
    {
      icon: SiWhatsapp,
      href: 'https://wa.me/593996474990?text=Hola%20Boris,%20%C2%BFc%C3%B3mo%20te%20encuentras%20el%20d%C3%ADa%20de%20hoy?',
    },*/
