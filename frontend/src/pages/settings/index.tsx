import type { NextPage } from 'next'
import Settings from "../../components/PageSettings";

// TODO anyをやめたい
// {style: string}が渡される
type PageTopProps = any

const Page: NextPage = (props: PageTopProps) => {
  const { style } = props

  return (
    <div className={style}>
      <Settings />
    </div>
  )
}

export default Page
