import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import Home from './components/Home/Home'
// import Page2 from './components/Page2/Page2'
// import Page3 from './components/Page3/Page3'
// import Page4 from './components/Page4/Page4'
// import BottomNav from './components/BottomNav/BottomNav'
import Landing from '../src/pages/Landing'
// import Logo from '../src/assets/'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        {/* <Route path='/page2' element={<Page2/>} />
        <Route path='/page3' element={<Page3/>} />
        <Route path='/page4' element={<Page4/>} /> */}
      </Routes>
      {/* <BottomNav/> */}
    </BrowserRouter>
  )
}

export default App
