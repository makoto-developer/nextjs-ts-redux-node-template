import c from 'clsx'

import s from './style.module.scss'

type Props = {
  className?: string
  name: string
  onClick: VoidFunction
  buttonType?: 'primary' | 'secondary'
  small?: boolean
  autoWidth?: boolean,
  disabled?: boolean
}

const Button: React.FC<Props> = props => {
  const {
    className,
    name,
    onClick,
    buttonType,
    small,
    autoWidth,
    disabled
  } = props

  const styleButtoType = buttonType === 'primary' ? s.primary : s.secondary

  let disableColor = ''
  if (disabled) {
    disableColor = s.disableColor
    console.log("disableColor:", disableColor)
  }

  let width = ''
  if (autoWidth) {
    width= s.widthAutoWidth
  }

  let size = ''
  if (small) {
    size = s.small
  } else {
    size = ''
  }

  return <button
    className={c(
      s.button,
      className,
      styleButtoType,
      size,
      width,
      disableColor
    )}
    disabled={disabled}
    onClick={() => onClick()}
  >
    {name}
  </button>
}

Button.defaultProps = {
  name: 'text',
  buttonType: 'primary',
  onClick: () => console.log('debug'),
  small: false,
  autoWidth: false,
  disabled: false
}

export default Button
