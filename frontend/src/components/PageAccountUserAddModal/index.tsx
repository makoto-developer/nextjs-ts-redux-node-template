import c from 'clsx'

import s from './style.module.scss'
import Button from "../Button"
import Modal from "../Modal";
import Image from '../Image'
import closeIcon from '../../../public/svg/close.svg'

type Props = {
  className?: string
  isShowModal: boolean
  setIsShowModal: (show: boolean) => void
  name: string
  setName: (name: string) => void
  age: number
  setAge: (age: number) => void
  role: string
  setRole: (role: 'Admin' | 'User' | string | any) => void
  profile: string
  setProfile: (profile: string) => void
  avatar: string
  setAvatar: (avatar: string) => void
  disableButton: boolean
  buttonAction: VoidFunction
  buttonLabel: string
}

const Index: React.FC<Props> = props => {
  const {
    className,
    isShowModal,
    setIsShowModal,
    name,
    setName,
    age,
    setAge,
    role,
    setRole,
    profile,
    setProfile,
    avatar,
    setAvatar,
    disableButton,
    buttonAction,
    buttonLabel
  } = props

  return (
    <Modal isShow={isShowModal} className={c(s.modal, className)}>
      <div className={s.modalHeader}>
        <h1 className={s.modalTitle}>ユーザ追加</h1>
        <Image height={20} path={closeIcon} width={20} onClick={() => setIsShowModal(false)}/>
      </div>
      <div>
        <label className={s.formBlock}>
          名前
          <input
            type={'text'}
            className={s.form}
            placeholder={'name'}
            value={name}
            onChange={e => setName(e.currentTarget.value)}/>
        </label>
        <label className={s.formBlock}>
          年齢
          <input
            type={'number'}
            className={s.form}
            placeholder={'age'}
            value={age}
            onChange={e => setAge(Number(e.currentTarget.value))}/>
        </label>
        <label className={s.formBlock}>
          ロール
          <select
            className={s.form}
            value={role}
            onChange={e => setRole(e.currentTarget.value)}
          >
            <option value={'User'} selected={role === 'User'}>一般ユーザ</option>
            <option value={'Admin'} selected={role === 'Admin'}>管理者</option>
          </select>
        </label>
        <label className={s.formBlock}>
          プロフィール
          <br/>
          <textarea
            className={c(s.modalProfile, s.form)}
            placeholder={'プロフィールを入力してください。(省略可能です。)'}
            value={profile}
            onChange={e => setProfile(e.currentTarget.value)}/>
        </label>
        <label className={s.formBlock}>
          アバター
          <div className={s.modalAvatar}>
            <input
              type={'url'}
              className={c(s.form, s.modalAvatarInput)}
              placeholder={'url'}
              value={avatar}
              onChange={e => setAvatar(e.currentTarget.value)}
            />
          </div>
          <a href={'https://pickaface.net/explore/avatars.html'} target='_blank'
            rel='noopener noreferrer'>アバターサンプル</a>
        </label>
      </div>
      <Button
        disabled={disableButton}
        name={buttonLabel}
        onClick={() => buttonAction()}
        autoWidth={true}
        className={s.addButton}
      />
    </Modal>
  )
}

export default Index
