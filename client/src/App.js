/*eslint-disable*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { KakaoLogin, KakaoLogout } from './components/Login/Kakao/Auth';
//pages
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Trip from './pages/Trip/Trip';
import Map from './pages/Map/Map';

function App() {

  const user = useSelector((state) => state.reducer.user);

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user.isLogin ? <Main /> : <Login />} />
        {/* 카카오 로그인, 로그아웃 */}
        <Route path='/oauth/kakao/callback/login' element={<KakaoLogin />} />
        <Route path='/oauth/kakao/callback/logout' element={<KakaoLogout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/trip' element={<Trip />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </div>
  );
};

export default App;