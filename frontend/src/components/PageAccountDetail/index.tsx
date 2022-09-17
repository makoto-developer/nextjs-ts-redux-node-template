import c from 'clsx'

import Image from '../Image'
import {useService} from './service'
import s from './style.module.scss'
import Button from "../Button";
import setting from '../../../public/svg/setting.svg'
import PageAccountUserAddModal from "../PageAccountUserAddModal";

type Props = {
  className?: string
}

const Index: React.FC<Props> = props => {
  const {className} = props
  const {
    invalidUserId,
    user,
    back,
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
    disableAddUserButton,
    buttonAction,
    userId,
  } = useService()

  if (invalidUserId) return <div>不正な操作です。</div>

  if (!user) return <div>初期化中...</div>

  return (
    <div className={c(s.root, className)}>
      <Button name={'戻る'} small={true} onClick={() => back()}/>
      <h3 className={s.title}>ユーザ詳細</h3>
      <div className={s.head}>
        <Image
          path={user.avatar}
          width={100}
          height={100}
          className={s.avatar}
        />
        <div className={s.info}>
          <div className={s.name}>
            名前 {user.name} {userId}
          </div>
          <div className={s.age}>
            年齢 {user.age}歳
          </div>
          <div className={s.role}>
            権限 {user.role}
          </div>
        </div>
        <div className={s.setting}>
          設定
          <button onClick={() => setIsShowModal(true)} className={s.settingWrap}>
            <Image
              path={setting}
              width={28}
              height={28}
              onClick={() => void(0)}
              className={s.gear}
            />
          </button>
        </div>
      </div>
      <h3 className={s.title}>プロフィール</h3>
      <div className={s.profile}>
        <div>
          {user.profile}
        </div>
      </div>
      {name && age && role && profile && avatar && <PageAccountUserAddModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        role={role}
        setRole={setRole}
        profile={profile}
        setProfile={setProfile}
        avatar={avatar}
        setAvatar={setAvatar}
        disableButton={disableAddUserButton}
        buttonAction={buttonAction}
        buttonLabel={'更新'}
      />}
    </div>
  )
}

export default Index
