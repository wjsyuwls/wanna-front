import { useHref, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './UpdateInfo.module.css';
import { KakaoLogout } from '../../../components/Login/Kakao/Kakao';
import apis from '../../../apis';

function UpdateInfo() {
  const user = useSelector((state) => state.reducer.user);
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [address, setAddress] = useState('');

  //db에서 user 데이터 가져오기
  useEffect(() => {
    const email = user.email;
    apis.get(`/api/user/getInfo/${email}`).then((res) => {
      console.log(res.data);
      setEmail(res.data.email);
      setNickname(res.data.nickname);
      setAddress(res.data.address);
    });
  }, []);

  return email ? (
    <Profile
      email={email}
      setEmail={setEmail}
      nickname={nickname}
      setNickname={setNickname}
      address={address}
      setAddress={setAddress}
      KakaoLogout={KakaoLogout}
    />
  ) : null;
}

function Profile({
  email,
  setEmail,
  nickname,
  setNickname,
  address,
  setAddress,
  KakaoLogout,
}) {
  const navigate = useNavigate();
  const [nicknameText, setNicknameText] = useState('');
  const [addressText, setAddressText] = useState('');

  // 닉네임 정규식에 맞을때 변경 가능
  function nicknameHandler(e) {
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    if (regex.test(nicknameText)) {
      alert('닉네임 변경 완료');
      setNickname(nicknameText);
      updateNickname();
    } else {
      alert('닉네임에 특수문자는 사용 불가합니다.');
    }
  }

  // 지갑주소 정규식에 맞을때만 입력되게끔
  function addressHandler(e) {
    const regex = /0x[0-9a-fA-F]{40}/;
    if (regex.test(addressText)) {
      alert('지갑주소 확인완료');
      setAddress(addressText);
      updateAddress();
    } else {
      alert('지갑주소를 확인하세요.');
    }
  }

  //db에서 user 닉네임 정보 업데이트
  function updateNickname() {
    const body = {
      email: email,
      nickname: nicknameText,
    };
    apis.post('/api/user/update/nickname', body).then((res) => {
      console.log(res);
    });
  }

  //db에서 user address 정보 업데이트
  function updateAddress() {
    const body = {
      email: email,
      address: addressText,
    };
    apis.post('/api/user/update/address', body).then((res) => {
      console.log(res);
    });
  }

  //유저 회원탈퇴 기능
  const withdraw = () => {
    const body = {
      email: email,
    };
    apis.post('/api/user/withdraw', body).then((res) => {
      console.log(res.data);
      if (res.data) {
        KakaoLogout();
      }
    });
  };

  return (
    // 헤더 부분
    <div className={styles.whole_container}>
      <div className={styles.nav_container}>
        <img
          className={styles.nav_back}
          onClick={() => {
            navigate(-1);
          }}
          src="/img/back.png"
        />
        <div>
          <h2 className={styles.nav_title}>정보수정</h2>
        </div>
        <img className={styles.nav_btn_img} src="/img/menu.png" />
      </div>

      {/* 프로필 바디부분 */}
      <div className={styles.profile_container}>
        <img className={styles.profile_img} src="./img/profile_sample.png" />
        <p>{nickname}</p>
        <div className={styles.addressShow}>{address}</div>
        <div className={styles.profile_update}>
          <p>이메일</p>
          <span style={{ fontSize: '20px' }}>{email}</span>

          <p>닉네임</p>
          {/* 닉네임 인풋 */}
          <input
            onChange={(e) => {
              setNicknameText(e.target.value);
            }}
            type="text"
            placeholder={nickname}
          />

          {/* 닉네임 수정버튼 */}
          <button
            onClick={(e) => {
              nicknameHandler(e);
            }}
            className={styles.updateButton}
          >
            수정하기
          </button>

          <p>지갑주소</p>
          {/* 지갑주소 인풋 */}
          <input
            onChange={(e) => {
              setAddressText(e.target.value);
            }}
            type="text"
            placeholder={address}
          ></input>

          {/* 지갑주소 수정버튼 */}
          <button
            className={styles.updateButton}
            onClick={(e) => {
              addressHandler(e);
            }}
          >
            수정하기
          </button>
        </div>

        {/* 로그아웃/회원탈퇴 바텀부분 */}
        <div className={styles.profile_delete}>
          <button
            className={styles.deleteButton}
            onClick={() => {
              KakaoLogout();
              event.stopPropagation();
            }}
          >
            로그아웃
          </button>
          <button
            onClick={() => {
              withdraw();
              event.stopPropagation();
            }}
            className={styles.deleteButton}
          >
            회원탈퇴
          </button>
          <button className={styles.deleteButton}>이용약관</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateInfo;
