import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Informacion</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
        ¡Hola! Soy Boris, desarrollador de software independiente con formación en el Tecnológico del Azuay. Disfruto de la resolución creativa de problemas y tengo un enfoque proactivo hacia la tecnología. Creo que la inteligencia artificial transformará nuestro futuro. ¡Estoy listo para sumar valor a tu equipo! ¡Hablemos y descubre cómo puedo contribuir a tu proyecto!
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
