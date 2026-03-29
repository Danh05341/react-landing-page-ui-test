import logoSvg from '../../assets/images/logo.svg'
import { Reveal } from '../motion/Reveal'

function LogoSlider() {
  const logos = Array.from({ length: 8 }).map((_, index) => ({
    key: `logo-${index}`,
    src: logoSvg,
    alt: `Ionix logo ${index + 1}`,
  }))

  const marqueeTrack = [
    ...logos,
    ...logos.map((logo, index) => ({
      ...logo,
      key: `${logo.key}-clone-${index}`,
    })),
  ]

  return (
    <Reveal as="section" className="bg-white py-3 sm:py-7 lg:py-10" y={16} amount={0.08}>
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="overflow-hidden">
          <div className="flex min-w-max items-center justify-start py-3 sm:py-5 md:gap-4 lg:gap-10 marquee-animation">
            {marqueeTrack.map((logo) => (
              <img
                key={logo.key}
                src={logo.src}
                alt={logo.alt}
                className="h-14 w-auto opacity-90 transition-[opacity,filter] duration-300 ease-out hover:opacity-100 hover:brightness-105"
              />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default LogoSlider
