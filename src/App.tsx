import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import './globals.css';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className="flex h-screen">
    <Route>
      {/* public routes */}
      <Route element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SigninForm />}/>
        <Route path="/sign-up" element={<SignupForm />}/>
      </Route>
      
      
      {/* private routes */}
      <Route element={<RootLayout/>}>
      </Route>
      <Route index element ={<Home />} />
    </Route>
    </main>
  )
}

export default App
