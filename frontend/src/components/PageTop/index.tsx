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
    <div className={c(s.top, className)}>
      トップページ

      <div>
        <Button
          onClick={() => router.push('/debug/ui')}
          buttonType={'primary'}
          className={s.toDebugPage}
          name={'デバックページへ'}
        />
        <Button
          onClick={() => router.push('/account')}
          buttonType={'primary'}
          className={s.toDebugPage}
          name={'ユーザ管理ページへ'}
        />
      </div>
    </div>
  )
}

export default Index
