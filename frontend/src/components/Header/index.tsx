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
            <Link href={PATHS.TOP}><a>ページ一覧</a></Link>
          </li>
          <li>
            <Link href={PATHS.SETTINGS}><a>設定</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Index
