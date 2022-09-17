import {useEffect, useState} from 'react'
import {useDispatch, useSelector,} from 'react-redux'

import {fetchUserById, fetchUsers, resetUser, updateUser} from '../../stores/user/actions'
import {useRouter} from "next/router";
import {isNumeric} from "../../util/number";
import {User, Users} from "types/src/domain/User";

export const useService = () => {
  const users: Users | undefined = useSelector(state => state.user.users)
  const user: User | undefined | null= useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const [invalidUserId, setInvalidUserId] = useState<boolean | undefined>(undefined)
  const back = () => router.back()

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [userId, setUserId] = useState<number | undefined>(undefined)
  const [name, setName] = useState<string | undefined>(undefined)
  const [age, setAge] = useState<number | undefined>(undefined)
  const [role, setRole] = useState<'Admin' | 'User' | string | undefined>(undefined)
  const [profile, setProfile] = useState<string | undefined>(undefined)
  const [avatar, setAvatar] = useState<string | undefined>(undefined)
  const [disableAddUserButton, setDisableAddUserButton] = useState<boolean>(true)
  const [isFetched, setIsFetched] = useState<boolean>(false)

  // クエリパラメータからuserIdを取得
  useEffect(() => {
    dispatch(resetUser())
    const {id} = router.query
    if (!isNumeric(id)) {
      setInvalidUserId(true)
      return
    }
    setInvalidUserId(false)

    setUserId(Number(id))
  }, [dispatch, router])

  // ユーザ情報取得
  useEffect(() => {
    if (isFetched) return
    console.log("userId:", userId)
    if (!isNumeric(userId) || userId === undefined) return
    dispatch(fetchUserById(userId))
    setIsFetched(true)
  }, [dispatch, userId])

  // ユーザ情報を取得できたらインプットフォームへ反映
  useEffect(() => {
    if (!isFetched) return
    setUserId(user?.id)
    setName(user?.name)
    setAge(user?.age)
    setRole(user?.role)
    setProfile(user?.profile)
    setAvatar(user?.avatar)
  }, [user, isFetched])

  // 入力チェック
  useEffect(() => {
    if (name === '' && age && age > 0) {
      setDisableAddUserButton(true)
      return
    }
    setDisableAddUserButton(false)

  }, [name, age])

  const buttonAction = () => {
    if (userId === undefined) return
    if (name === undefined) return
    if (age === undefined) return
    if (profile === undefined) return
    if (avatar === undefined) return
    if (role === undefined) return
    dispatch(updateUser({
      id: userId,
      name,
      age,
      profile,
      avatar,
      role,
    },
    !users ? [] : users))
    setIsShowModal(false)
    dispatch(fetchUsers())
    setIsFetched(false)
  }

  return {
    back,
    user,
    invalidUserId,
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
  }
}
