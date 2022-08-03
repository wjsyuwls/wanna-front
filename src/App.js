import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { KakaoLogin, KakaoLogout } from './components/Login/Kakao/Auth';
//pages
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/MainPage/MainPage';
import MyInfo from './pages/Main/MyInfo/MyInfo';
import MapPage from './pages/Map/MapPage';
import Trip from './pages/Trip/Trip';
import StoreInfo from './pages/PlaceDetail/StoreInfo/StoreInfo';
import PlaceReview from './pages/PlaceReview/PlaceReview';

function App() {
  const user = useSelector((state) => state.reducer.user);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user.isLogin ? <Main /> : <Login />} />
        {/* 카카오 로그인, 로그아웃 */}
        <Route path="/oauth/kakao/callback/login" element={<KakaoLogin />} />
        <Route path="/oauth/kakao/callback/logout" element={<KakaoLogout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myInfo" element={<MyInfo />} />
        <Route path="/goTrip" element={<Trip />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/storeInfo" element={<StoreInfo />} />
        <Route path="/placereview" element={<PlaceReview />} />
      </Routes>
    </div>
  );
}

export default App;
