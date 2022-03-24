import { useNavigate } from 'react-router-dom'

export const Error = () => {
  const navigate = useNavigate()

  const onBack = () => {
    navigate('/')
  }
  return {
    onBack,
  }
}
