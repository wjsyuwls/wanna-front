import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { KakaoLogout } from '../../components/Login/Kakao/Kakao';
import $ from 'jquery';
import axios from 'axios';
import styles from './Main.module.css';

function Main() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.reducer.user);

    const withdraw = () => {
        const body = {
            id: user.email
        };
        axios.post('http://localhost:3001/withdraw', body)
            .then((res) => {
                console.log(res.data.message);
                if (res.data.message) {
                    KakaoLogout();
                }
            });
    };

    return (
        <div className={styles.container}>
            {/* 메인 */}
            <div className={styles.main_container}>
                {/* 메인 -> 헤더 */}
                <div className={styles.main_row1}>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>WANNA</div>
                    <img src='images/list.svg' style={{ width: "25px" }} onClick={() => {
                        $('.' + styles.user_container).removeClass(styles.user_before);
                        $('.' + styles.user_container).addClass(styles.user_after);
                    }} />
                </div>
                {/* 메인 -> 여행가기 */}
                <div className={styles.main_row2}>
                    <div>
                        <img src='images/search.svg' /><span style={{ marginRight: "5px", fontSize: "18px" }}>검색</span>
                        <input style={{ width: "50vw" }} />
                    </div>
                    <div className={styles.map}>
                        지도? 버튼?
                    </div>
                </div>
                <div className={styles.main_row3}>
                    TOKEN
                </div>
                <div className={styles.main_row4}>
                    EVENT SLIDE
                </div>
            </div>

            {/* 유저 */}
            <div className={styles.user_container}>
                <div className={styles.user}>
                    {/* 유저 -> 헤더 */}
                    <div className={styles.user_row1}>
                        <img src='images/x-lg.svg' style={{ width: "25px" }} onClick={() => {
                            $('.' + styles.user_container).removeClass(styles.user_after);
                            $('.' + styles.user_container).addClass(styles.user_before);
                        }} />
                        <img src='images/gear.svg' style={{ width: "25px" }} onClick={() => {
                            $('.' + styles.user_setting).removeClass(styles.user_setting_before);
                            $('.' + styles.user_setting).addClass(styles.user_setting_after);
                        }} />
                    </div>
                    {/* 유저 -> 프로필 */}
                    <div className={styles.user_row2}>
                        <div className={styles.user_name}>{user.name}</div>
                        <img src='images/default.svg' className={styles.user_photo} />
                        <div style={{ width: "100%" }}>
                            <div className={styles.user_level}>LEVEL</div>
                            <div className={styles.user_points}>POINTS</div>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div className={styles.user_address}>지갑주소</div>
                            <div className={styles.user_subAddress}>{user.address.substr(0, 5) + '.....' + user.address.substr(37)}</div>
                        </div>
                    </div>
                    {/* 유저 -> 활동 */}
                    <div className={styles.user_row3}>
                        <button className={styles.user_review}>
                            <div>내 리뷰</div>
                            <div>0</div>
                        </button>
                        <button className={styles.user_token}>
                            <div>토큰 내역?</div>
                            <div>?</div>
                        </button>
                    </div>
                    <div style={{ backgroundColor: "#efefef" }}>

                    </div>
                    {/* 유저 -> 로그아웃, 서비스탈퇴 */}
                    <div className={styles.user_row3} style={{ marginTop: "0" }}>
                        <button className={styles.user_logout} onClick={KakaoLogout}>
                            로그아웃
                        </button>
                        <button className={styles.user_withdraw} onClick={withdraw}>
                            회원탈퇴
                        </button>
                    </div>
                </div>

                {/* 유저 -> 설정 */}
                <div className={styles.user_setting}>
                    {/* 설정 -> 헤더 */}
                    <div className={styles.user_setting_row1}>
                        <img src='images/arrow-left.svg' style={{ width: "25px" }} onClick={() => {
                            $('.' + styles.user_setting).removeClass(styles.user_setting_after);
                            $('.' + styles.user_setting).addClass(styles.user_setting_before);
                        }} />
                        <div style={{ fontSize: "18px", marginLeft: "15px" }}>설정</div>
                    </div>
                    {/* 설정 -> 프로필 */}
                    <div className={styles.user_setting_row2}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;