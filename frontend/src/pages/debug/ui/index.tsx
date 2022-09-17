import PageDebugUI from '../../../components/PageDebugUI'

import type { NextPage } from 'next'

// TODO anyをやめたい
// {style: string}が渡される
type PageTopProps = any

const Page: NextPage = (props: PageTopProps) => {
  const { style } = props

  return (
    <div className={style}>
      <PageDebugUI />
    </div>
  )
}

export default Page
