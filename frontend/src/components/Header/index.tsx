import c from 'clsx'

import s from './style.module.scss'
import {useRouter} from "next/router";
import Link from 'next/link'
import {PATHS} from "../../util/paths";

type Props = {
  className?: string
}

const Index: React.FC<Props> = props => {
  const {className} = props
  const router = useRouter()

  return (
    <header className={c(s.header, className)}>
      <nav>
        <ul>
          <li>
            <Link href={PATHS.TOP}>ページ一覧</Link>
          </li>
          <li>
            <Link href={PATHS.SETTINGS}>設定</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Index
