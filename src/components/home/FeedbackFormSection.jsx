import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { motion, useReducedMotion } from 'motion/react'
import { Stagger, StaggerItem } from '../motion/Reveal'

function Field({ id, label, type = 'text', value, onChange, multiline }) {
  const shared =
    'w-full border-0 border-b border-black/25 bg-transparent pb-2 text-base text-(--color-primary) outline-none transition-[border-color,color] duration-300 ease-out placeholder:text-black/25 focus:border-(--color-brand)'

  return (
    <div>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          aria-label={label}
          className={clsx(shared, 'min-h-[100px] resize-y')}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          aria-label={label}
          className={shared}
          autoComplete={type === 'email' ? 'email' : 'name'}
        />
      )}
    </div>
  )
}

function FeedbackFormSection({ className, onSubmit }) {
  const reduce = useReducedMotion()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onSubmit?.({ name, email, message })
    },
    [email, message, name, onSubmit],
  )

  return (
    <section className={clsx('bg-white pb-16 pt-4 sm:pb-24 md:pb-32', className)}>
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-10 lg:px-[121px]">
        <Stagger
          as="div"
          className="mx-auto grid w-full max-w-[1396px] gap-12 md:grid-cols-2 md:items-start md:gap-16 lg:gap-24"
          stagger={0.1}
          amount={0.12}
        >
          <StaggerItem className="py-2.5">
            <div className="font-brand text-[80px] leading-[68px] text-(--color-primary)">
              <div className="flex max-w-[553px] sm:flex-wrap w-full flex-wrap items-baseline gap-x-2">
                <div className="max-w-[553px] flex gap-4 flex-wrap">
                  <div className="inline-block">Have</div>
                  <div className="inline-block text-(--color-brand)">Feedback</div>
                </div>
                <span className="inline-block">for us?</span>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 md:pt-1">
              <Field id="feedback-name" label="Name" value={name} onChange={setName} />
              <Field id="feedback-email" label="Email" type="email" value={email} onChange={setEmail} />
              <Field id="feedback-message" label="Your Message" value={message} onChange={setMessage} multiline />

              <div className="pt-2">
                <motion.button
                  type="submit"
                  className="text-2xl font-medium text-(--color-primary) underline decoration-black/40 underline-offset-[6px] transition-[color,text-decoration-color,transform] duration-300 ease-out hover:decoration-(--color-brand) hover:text-(--color-brand)"
                  whileHover={reduce ? undefined : { x: 3 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  Send
                </motion.button>
              </div>
            </form>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}

export default FeedbackFormSection
