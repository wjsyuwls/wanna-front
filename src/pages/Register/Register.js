/*eslint-disable*/
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addStatus } from '../../reducers/userSlice';
import $ from 'jquery';
import axios from 'axios';
import styles from './Register.module.css';
import apis from '../../apis/index.js';

function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.reducer.user);
    const [address, setAddress] = useState('');

    const connectMetamask = async () => {
        if (typeof window.ethereum !== 'undefined') {
        } else {
            window.open('https://metamask.io/download.html');
        }
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            connectAddressHandler(account);
        } catch (error) {
            console.error(error);
        };
    };

    // https://docs.kaikas.io/02_api_reference/01_klaytn_provider?q=activate 참조
    const connectKaikas = async () => {
        if (typeof window.klaytn !== 'undefined') {
            const provider = window['klaytn']
        } else {
            window.open('https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=ko');
        }
        try {
            const accounts = await window.klaytn.enable();
            const account = accounts[0];
            connectAddressHandler(account);
        } catch (error) {
            console.error(error)
        };
    };

    //지갑연결 핸들러
    const connectAddressHandler = (account) => {
        setAddress(account);
        if (account.length === 42) {
            $('.' + styles.submit).css(
                {
                    "background-color": "rgb(79, 141, 247)",
                    "pointer-events": "initial",
                    "cursor": "pointer"
                }
            );
        } else {
            $('.' + styles.submit).css(
                {
                    "background-color": "lightgray",
                    "pointer-events": "none"
                }
            );
        }
    };

    //주소입력(input태그) 핸들러
    const addressHandler = (e) => {
        setAddress(e.target.value);
        if (e.target.value.length === 42) {
            $('.' + styles.submit).css(
                {
                    "background-color": "rgb(79, 141, 247)",
                    "pointer-events": "initial",
                    "cursor": "pointer"
                }
            );
        } else {
            $('.' + styles.submit).css(
                {
                    "background-color": "lightgray",
                    "pointer-events": "none"
                }
            );
        }
    };

    const submitHandler = () => {
        const body = {
            id: user.email,
            name: user.name,
            address: address // 공백 문자 이슈
        };
        apis.post('/api/register', body)
            .then((result) => {
                if (result.data.message) {
                    dispatch(addStatus({
                        address: address,
                        isLogin: true
                    }));
                    navigate('/');
                }
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                <div>지갑 주소 등록</div>
            </div>
            <div className={styles.row2}>
                <div style={{ width: "100%" }}>
                    <div className={styles.label}>이메일 주소</div>
                    <div className={styles.email}>{user.email}</div>
                </div>
                <div style={{ width: "100%" }}>
                    <div className={styles.label}>개인지갑주소</div>
                    <input type='text' placeholder='address' spellCheck='false' className={styles.input} value={address}
                        onChange={(e) => { addressHandler(e); }} />
                </div>
                <div style={{ width: "100%" }}>
                    <div className={styles.label}>불러오기</div>
                    <div className={styles.button}>
                        <button className={styles.metamask} onClick={connectMetamask}>connect metamask</button>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.kaikas} onClick={connectKaikas}>connect kaikas</button>
                    </div>
                </div>
            </div>
            <div className={styles.row3}>
                <div>
                    <button className={styles.submit} onClick={submitHandler}>등록</button>
                </div>
            </div>
        </div>
    );
};

export default Register;