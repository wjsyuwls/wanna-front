import styles from './Kakao.module.css';

function KakaoLogin() {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI_LOGIN;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div>
            <button className={styles.kakao} onClick={() => { window.location.href = KAKAO_AUTH_URL }}>카카오 로그인</button>
        </div>
    );
};

function KakaoLogout() {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI_LOGOUT;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${REDIRECT_URI}`;

    window.location.href = KAKAO_AUTH_URL;

    return null;
};

export { KakaoLogin, KakaoLogout };