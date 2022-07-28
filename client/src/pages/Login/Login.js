import styles from './Login.module.css';
//components
import GoogleLogin from '../../components/Login/Google/Google';
import { KakaoLogin } from '../../components/Login/Kakao/Kakao';

function Login() {

    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                WANNA
            </div>
            <div className={styles.row2}>

            </div>
            <div className={styles.row3}>
                <GoogleLogin />
                <KakaoLogin />
            </div>
        </div>
    );
};

export default Login;