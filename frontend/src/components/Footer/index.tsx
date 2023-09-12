import c from 'clsx'

import s from './style.module.scss'

type Props = {
  className?: string
}

const Index: React.FC<Props> = props => {
  const { className } = props

  return (
    <footer className={c(s.footer, className)}>
      2020-2023@makoto-developer
    </footer>
  )
}

export default Index
