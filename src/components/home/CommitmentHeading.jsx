import clsx from 'clsx'
import { Reveal } from '../motion/Reveal'

function CommitmentHeading({
  title = 'A Commitment to Pure Water',
  description = 'By combining advanced purification systems with strict quality control, we aim to deliver water that is clean, balanced, and safe for everyday consumption.',
  titleClassName = '',
  descriptionClassName = '',
}) {
  return (
    <section className="mx-auto mb-10 mt-16 w-full max-w-[1920px] px-4 sm:mb-12 sm:mt-24 sm:px-6 md:mb-15 md:mt-33 md:px-10 lg:px-[121px]">
      <div className="mx-auto flex w-full max-w-[1396px] flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal className="w-full md:w-auto" delay={0} y={20}>
          <h2
            className={clsx(
              'max-w-full font-brand text-[clamp(1.875rem,5.5vw,3.5rem)] leading-[1.1] text-(--color-primary) sm:text-[clamp(2.25rem,5vw,4rem)] md:max-w-[540px] lg:text-[68px] lg:leading-[68px]',
              titleClassName,
            )}
          >
            {title}
          </h2>
        </Reveal>
        <Reveal className="w-full max-w-[566px] md:w-auto" delay={0.1} y={16}>
          <div className="w-full md:w-auto">
            <p
              className={clsx(
                'max-w-full py-2.5 text-left text-sm font-normal text-(--color-primary) md:max-w-[443px] md:text-right',
                descriptionClassName,
              )}
            >
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CommitmentHeading
