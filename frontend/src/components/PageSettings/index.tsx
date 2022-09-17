import c from 'clsx'
import { useRouter } from 'next/router'

import Button from '../Button'

import s from './style.module.scss'

type Props = {
  className?: string
}

const Index: React.FC<Props> = props => {
  const { className } = props
  const router = useRouter()

  return (
    <div className={c(s.root, className)}>
      <Button name={'戻る'} small={true} onClick={() => router.back()} />
      <div>
        設定ページ
      </div>
    </div>
  )
}

export default Index
