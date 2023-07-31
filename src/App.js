import React, {  useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/Sidebar/Sidebar';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import LoginScreen from './Screen/loginScreen/LoginScreen'
import {Route, Routes, useNavigate} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './_app.scss';
import { useSelector } from 'react-redux';
import WatchScreen from './Screen/watchScreen/WatchScreen';
import SearchScreen from './Screen/screen';

const Layout =({children})=>{
    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => toggleSidebar((value) => !value);
    return (
  <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="app__container">
          <SideBar
            sidebar={sidebar}
            handleToggleSidebar={handleToggleSidebar}
          />
          <Container fluid className="app_main ">
            {children}
          </Container>
        </div>
      </>
    )
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: (
//           <Layout>
//             <HomeScreen />
//           </Layout>
//         ),
//       },
//       { path: "/auth", element: <LoginScreen /> },
//       {
//         path: "/search",
//         element: (
//           <Layout>
//             <h1>Search</h1>
//           </Layout>
//         ),
//       },
//     ],
//   },
// ]);

const App =()=>{
    const {accessToken,loading}=useSelector(state => state.auth);
    const navigate = useNavigate();
    useEffect(()=>{
      if(!loading && !accessToken)
      {
          navigate("/auth"); 
      }
    },[accessToken,loading,navigate])
    
    
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        ></Route>
        <Route path="/auth" element={<LoginScreen />}></Route>

        <Route
          path="/search/:query"
          element={
            <Layout>
              <SearchScreen />
            </Layout>
          }
        ></Route>
        
        <Route
          path="/watch/:id"
          element={
            <Layout>
              <WatchScreen />
            </Layout>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        ></Route>
      </Routes>
    );
}

export default App;