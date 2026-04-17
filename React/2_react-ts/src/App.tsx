import './App.css'
import { Link } from 'react-router'

function App() {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// import { BrowserRouter, Link, Route, Routes } from 'react-router';
// import Dynamic from './Dynamic';
// import ErrorPage from './ErrorPage';
// import DefaultProfile from './DefaultProfile';
// import Popeye from './Popeye';
// import Spinach from './Spinach';
// import Profile from './Profile';
// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="profile" element={<Profile />}>
//         <Route path="spinach" element={<Spinach />} />
//         <Route path="popeye" element={<Popeye />} />
//         <Route index element={<DefaultProfile />} />
//       </Route>
//       <Route path="dynamic/:name" element={<Dynamic />} />
//       <Route path="*" element={<ErrorPage />} />
//     </Routes>
//   </BrowserRouter>
// );

export default App;
