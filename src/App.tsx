import { Routes, Route } from 'react-router-dom';

import './globals.css';

const App = () => {
  return (
    <main className="flex h-screen">
    <Route>
      {/* public routes */}
      <Route path="/sign-in" element={<SigninForm />}/>
      
      {/* private routes */}
      <Route index element ={<Home />} />
    </Route>
    </main>
  )
}

export default App
