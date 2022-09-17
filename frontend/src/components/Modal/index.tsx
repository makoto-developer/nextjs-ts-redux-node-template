import c from 'clsx'

import s from './style.module.scss'

type Props = {
  className?: string
  isShow: boolean
}

const Index: React.FC<Props> = props => {
  const {className, children, isShow} = props

  if (!isShow) return <></>

  return (
    <div id={'overlay'} className={c(s.root, className)}>
      <div className={s.content}>
        {children}
      </div>
    </div>
  )
}

export default Index
