import useReveal from '../hooks/useReveal.js'

/** Fades/slides its children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, zoom = false, className = '', style, children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`${zoom ? 'reveal-zoom' : 'reveal'} ${className}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
