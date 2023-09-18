import c from 'clsx'

import {User, UserRole} from "types/src/domain/user";
import {useService} from './service'
import s from './style.module.scss'
import Button from "../Button"
import PageAccountUserAddModal from "../PageAccountUserAddModal";

type Props = {
  className?: string
}

const Index: React.FC<Props> = props => {
  const {className} = props

  // TODO この辺りを改良したい
  const {
    users,
    back,
    toUserDetail,
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
  } = useService()

  if (users === undefined) return <div>初期化中...</div>
  return (
    <div className={c(s.root, className)}>
      <Button name={'戻る'} small={true} onClick={() => back()}/>
      ユーザ管理ページ
      <Button
        name={'ユーザ追加'}
        onClick={() => setIsShowModal(true)}
        autoWidth={true}
        className={s.addButton}
      />
      <table className={s.userList}>
        <thead>
          <tr>
            <th>アバター</th>
            <th>名前</th>
            <th>年齢</th>
            <th>権限</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => {
            return (<tr key={user.id} onClick={() => toUserDetail(user.id)}>
              <td>
                <img height={50} width={50} src={user.avatar} alt={''} className={s.avatar}/>
              </td>
              <td>
                {user.name}
              </td>
              <td>
                {user.age}
              </td>
              <td>
                {user.role}
              </td>
            </tr>)
          })}
        </tbody>
      </table>
      <PageAccountUserAddModal
        className={s.modal}
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
        buttonLabel={'ユーザ追加'}
      />
    </div>
  )
}

export default Index
