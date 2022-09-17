import c from 'clsx'
import {ReactNode, useState} from 'react'

import Button from '../Button'

import s from './style.module.scss'
import Modal from "../Modal";
import {ToastProvider, useToast} from "../../hooks/useToast";

type Props = {
  className?: string
}

const Index: React.FC<Props> = props => {
  const { className, children } = props
  const showToast = useToast();

  const Slide = ({
    text,
    children: slideChildren
  }: { text: string, children?: ReactNode}) => {
    return <div className={s.slide}>
      <div className={s.slideTitle}>{text}</div>
      {slideChildren}
    </div>
  }

  /** モーダル */
  const [isModalShow, setIsModalShow] = useState<boolean>(false)

  return (
    <div className={c(s.root, className)}>
      Debugページ
      <Slide text={'ボタン'}>
        <div>
          <Button
            onClick={() => console.log('text')}
            autoWidth={true}
            buttonType={'primary'}
            className={s.button}
            name={'テキスト'}
          />
        </div>
        <div>
          <Button
            onClick={() => console.log('text')}
            buttonType={'primary'}
            className={s.button}
            name={'テキスト'}
          />
        </div>
        <div>
          <Button
            onClick={() => console.log('text')}
            buttonType={'secondary'}
            className={s.button}
            name={'テキスト'}
          />
        </div>
        <div>
          <Button
            onClick={() => console.log('text')}
            buttonType={'secondary'}
            className={s.button}
            small={false}
            name={'テキスト'}
          />
        </div>
      </Slide>
      <Slide text={'Modal'}>
        <Button name={'オープン'} onClick={() => setIsModalShow(true)} />
        <Modal isShow={isModalShow}>
          <div>
            <Button name={'クローズ'} onClick={() => setIsModalShow(false)} />
            モーダル
          </div>
        </Modal>
      </Slide>
      <Slide text={'Toast'}>
        <ToastProvider>test</ToastProvider>
        <Button name={'Toast Open'} onClick={() => showToast({text: "ボタンが押されました"})} />
      </Slide>
      <Slide text={'Image'} />
      <Slide text={'Loading'} />
      <Slide text={'Pagination'} />
      <Slide text={'form'} >
        <div>
          Form controls
        </div>
        <div>
          Input group
        </div>
        <div>
          Floating labels
        </div>
        <div>
          Select
        </div>
        <div>
          checkbox&radio
        </div>
        <div>
          Range
        </div>
        <div>
          Form controls
        </div>
      </Slide>
      <Slide text={'Typography'} >
        <h1>テキスト</h1>
        <h2>テキスト</h2>
        <h3>テキスト</h3>
        <h4>テキスト</h4>
        <h5>テキスト</h5>
        <h6>テキスト</h6>
      </Slide>
      <Slide text={'table'} />
      <Slide text={'table'} />
    </div>
  )
}

export default Index
