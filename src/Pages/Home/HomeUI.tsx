import { Progress } from '@chakra-ui/react'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { InfoUI } from '../../Components/Info/InfoUI'
import { NavbarUI } from '../../Components/Navbar/NavbarUI'
import { appContext } from '../../context/context'
import { ErrorUI } from '../Error/ErrorUI'
import './Home.css'

export const HomeUI = () => {
  const { state } = useContext(appContext)
  return (
    <>
      {state?.error && (
        <>
          <ErrorUI />
        </>
      )}
      {state?.fetching && <Progress size="xs" isIndeterminate />}

      {state?.success && (
        <div className="HomeUI">
          <div className="container-fluid">
            <div className="item1">
              <NavbarUI />
            </div>
            <div className="item2">
              <InfoUI />
            </div>

            <div className="item3">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
