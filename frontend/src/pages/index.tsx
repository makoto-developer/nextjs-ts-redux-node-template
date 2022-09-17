import PageTop from '../components/PageTop'

import type { NextPage } from 'next'

// TODO anyをやめたい
// {style: string}が渡される
type PageTopProps = any

const Page: NextPage = (props: PageTopProps) => {
  const { style } = props

  return (
    <div className={style}>
      <PageTop />
    </div>
  )
}

export default Page
