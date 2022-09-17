import c from 'clsx'

import s from './style.module.scss'

type Props = {
  className?: string
  path: string
  width: number
  height: number
  onClick?: any
}

const Image: React.FC<Props> = props => {
  const {
    className,
    path,
    width,
    height,
    onClick,
  } = props

  return <img
    className={c(s.root, className)}
    height={height}
    src={path}
    width={width}
    onClick={() => !!onClick && onClick()}
  />
}

export default Image
