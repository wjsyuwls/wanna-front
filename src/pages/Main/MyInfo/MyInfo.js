import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyInfo.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function MyInfo() {
  let navigate = useNavigate();

  return (
    <div className="App box whole_container">
      <div className="nav_container">
        {/* 뒤로가기  */}
        <img
          className="nav_back"
          onClick={() => {
            navigate(-1);
          }}
          src="/img/back.png"
        ></img>

        {/* 타이틀 */}
        <div>
          <h2 className="nav_title">내 정보</h2>
        </div>

        {/* 네비게이션바 */}
        <button
          style={{
            border: 'none',
            backgroundColor: 'white',
          }}
        >
          <img className="nav_btn_img" src="/img/menu.png"></img>
        </button>
      </div>
      {/* body */}
      <div>
        <div className="profile_container">
          <div className="img_name_container">
            <img className="profile_img" src="./img/profile_sample.png"></img>
            <h4>닉네임</h4>
          </div>
          <div className="info_table_container">
            <table>
              <tr>
                <th className="table_margin">여행자 Lv: </th>
                <td className="font_small table_center">3</td>
              </tr>
              <tr>
                <th className="table_margin">큐레이터 Lv: </th>
                <td className="font_small table_center">2</td>
              </tr>
              <tr>
                <th className="table_margin">보유 토큰 (WNN): </th>
                <td className="font_small table_center">532</td>
              </tr>
              <tr>
                <th className="table_margin">획득한 칭호: </th>
                <td className="font_small table_center">
                  <h5 className="font_small">5개</h5>
                  <a href="https://www.naver.com">보러가기</a>
                </td>
              </tr>
              <tr>
                <th className="table_margin">왔나 여행 횟수 </th>
                <td className="font_small table_center">
                  &nbsp;&nbsp;24회&nbsp;&nbsp;
                </td>
              </tr>
            </table>
            <AwesomeButton type="primary">정보 수정</AwesomeButton>
          </div>
        </div>
      </div>
      {/* carrier */}
      <div>
        <div>
          <h2>착용중인 캐리어</h2>
        </div>
        <div className="carrier_container">
          <div className="carrier_profile_container">
            <img className="carrier_img" src="/img/carrier2_sample.png"></img>
            <h4>캐리어 이름</h4>
          </div>
          <div className="carrier_table_container">
            <table>
              <tr>
                <th className="table_margin">캐리어 Lv: </th>
                <td className="font_small table_center">3</td>
              </tr>
              <tr>
                <th className="table_margin">경험치: </th>
                <td className="font_small table_center">25/350</td>
              </tr>
              <tr>
                <th className="table_margin">행운: </th>
                <td className="font_small table_center">54</td>
              </tr>
              <tr>
                <th className="table_margin">용기: </th>
                <td className="font_small table_center">15</td>
              </tr>
              <tr>
                <th className="table_margin">지혜: </th>
                <td className="font_small table_center">64</td>
              </tr>
              <tr>
                <th className="table_margin">
                  <pre className="font_cafe">획득한 지역뱃지: </pre>
                </th>
                <a href="https://www.naver.com">보러 가기</a>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div>
        <h2>보유중인 캐리어</h2>

        <img className="carriers_img" src="/img/carrier1_sample.png"></img>
        <img className="carriers_img" src="/img/carrier3_sample.png"></img>
        <img className="carriers_img" src="/img/carrier4_sample.png"></img>
      </div>
    </div>
  );
}

export default MyInfo;
