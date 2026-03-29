import clsx from 'clsx'
import { Stagger, StaggerItem } from '../motion/Reveal'

function Heading({
  title = 'Our Pure Origin',
  description = 'From sourcing and filtration to packaging and delivery, every step is carefully managed to ensure that the water reaching your home meets our highest standards.',
  textClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  return (
    <section className="mx-auto w-full max-w-[1920px] px-4 pb-12 sm:px-6 sm:pb-16 md:px-10 md:pb-20 lg:px-[121px]">
      <Stagger as="div" className={clsx('mx-auto w-full max-w-[830px] text-center sm:mt-2 md:mt-4 lg:mt-8', textClassName)}>
        <StaggerItem>
          <h2
            className={clsx(
              'my-4 font-brand text-[clamp(2.25rem,7vw,4.5rem)] leading-[1.08] text-(--color-primary) sm:my-5 md:my-6 lg:text-[80px] lg:leading-none',
              titleClassName,
            )}
          >
            {title}
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className={clsx('mx-auto max-w-[541px] px-1 py-2.5 text-sm font-normal sm:px-0', descriptionClassName)}>{description}</p>
        </StaggerItem>
      </Stagger>
    </section>
  )
}

export default Heading
