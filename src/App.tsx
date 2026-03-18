import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage      from './pages/Landing'
import ModulesPage   from './pages/Modules'
import WorkflowsPage from './pages/Workflows'
import PricingPage   from './pages/PricingPage'
import BlogPage      from './pages/Blog'
import ContactPage   from './pages/Contact'
import FAQPage       from './pages/FAQPage'
import SecurityPage  from './pages/SecurityPage'
import LoginPage     from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/"          element={<HomePage />} />
      <Route path="/modules"   element={<ModulesPage />} />
      <Route path="/workflows" element={<WorkflowsPage />} />
      <Route path="/pricing"   element={<PricingPage />} />
      <Route path="/blog"      element={<BlogPage />} />
      <Route path="/contact"   element={<ContactPage />} />
      <Route path="/faq"       element={<FAQPage />} />
      <Route path="/security"  element={<SecurityPage />} />
      <Route path="/login"     element={<LoginPage />} />
      {/* legacy redirect so old /landing links still work */}
      <Route path="/landing"   element={<Navigate to="/" replace />} />
      <Route path="*"          element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
