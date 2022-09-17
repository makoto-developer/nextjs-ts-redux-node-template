import {addUser, fetchUsers} from '../../stores/user/actions'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import {User} from "types/src/domain/user"
import {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import {PATHS} from "../../util/paths";

export const useService = () => {
  const users: Array<User> | undefined = useSelector(state => state.user.users)
  const dispatch = useDispatch()
  const router = useRouter()
  const back = () => router.back()
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(20)
  const [role, setRole] = useState<'Admin' | 'User'>('User')
  const [profile, setProfile] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const [disableAddUserButton, setDisableAddUserButton] = useState<boolean>(true)

  useEffect(() => {
    const allFormsInputed = [name, age, avatar].every(target => !!target)
    const ageIsValid = age > 0
    if (allFormsInputed && ageIsValid) {
      setDisableAddUserButton(false)
    }

  }, [name, age, avatar])

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const buttonAction = () => {
    if (users === undefined) return
    dispatch(addUser({name, age, role, profile, avatar}))
    setIsShowModal(false)
    dispatch(fetchUsers())
  }

  const toUserDetail = (id: number) =>{
    router.push(`${PATHS.ACCOUNT_DETAIL}?id=${id}`)
  }

  return {
    users,
    back,
    toUserDetail,
    buttonAction,
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
    setDisableAddUserButton
  }
}
