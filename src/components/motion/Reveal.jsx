import { motion, useReducedMotion } from 'motion/react'
import { EASE_OUT, viewportOnce } from '../../lib/motion-presets'

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  ul: motion.ul,
  li: motion.li,
  footer: motion.footer,
  header: motion.header,
}

export function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
  y = 22,
  amount = 0.15,
  duration = 0.55,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motionTags[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewportOnce(amount)}
      transition={{
        duration: reduce ? 0 : duration,
        ease: EASE_OUT,
        delay: reduce ? 0 : delay,
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

const staggerContainer = (reduce, stagger, delayChildren) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduce ? 0 : stagger,
      delayChildren: reduce ? 0 : delayChildren,
    },
  },
})

const staggerItemVariants = (reduce) => ({
  hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0 : 0.45, ease: EASE_OUT },
  },
})

export function Stagger({
  as = 'div',
  className,
  children,
  stagger = 0.09,
  delayChildren = 0.05,
  amount = 0.12,
}) {
  const reduce = useReducedMotion()
  const MotionTag = motionTags[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce(amount)}
      variants={staggerContainer(reduce, stagger, delayChildren)}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({ as = 'div', className, children, ...rest }) {
  const reduce = useReducedMotion()
  const MotionTag = motionTags[as] ?? motion.div

  return (
    <MotionTag className={className} variants={staggerItemVariants(reduce)} {...rest}>
      {children}
    </MotionTag>
  )
}
