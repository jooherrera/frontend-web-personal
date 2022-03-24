import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutUI } from '../../Pages/About/AboutUI'
import { ContactUI } from '../../Pages/Contact/ContactUI'
import { ErrorUI } from '../../Pages/Error/ErrorUI'
import { HomeUI } from '../../Pages/Home/HomeUI'
import { ResumeUI } from '../../Pages/Resume/ResumeUI'
import { WorkUI } from '../../Pages/Works/WorkUI'
import { CvUI } from '../CV/CvUI'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeUI />}>
          <Route path="about" element={<AboutUI />} />
          <Route path="resume" element={<ResumeUI />} />
          <Route path="works" element={<WorkUI />} />
          <Route path="contact" element={<ContactUI />} />
        </Route>

        <Route path="/cv" element={<CvUI />} />
        <Route path="/*" element={<ErrorUI />} />
      </Routes>
    </BrowserRouter>
  )
}
