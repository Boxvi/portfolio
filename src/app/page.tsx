import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">BORIS QUIZHPE</h1>
      <p className="mt-2 text-lg sm:text-xl">DESARROLLADOR DE SOFTWARE</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hola, soy Boris Quizhpe, un Desarrollador de Software Junior FullStack con base en Ecuador</p>
        <br />
        <p>Un gusto poder conocerte</p>
        <br />

        <a href='public/cv_boris_quizhpe_romero.pdf' download="cv_boris_quizhpe_romero.pdf">
          <button className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
            Descargar CV</button>
        </a>

      </div>

      <Links />
    </div>
  )
}
