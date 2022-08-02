import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyInfo() {
  let navigate = useNavigate();

  return (
    <div
      className="App box"
      style={{
        border: 'solid 1px',
        width: '360px',
        height: '640px',
        overflow: 'auto',
        scrollbarWidth: 'none',
        fontFamily: 'nanum',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* 뒤로가기  */}
        <img
          onClick={() => {
            navigate(-1);
          }}
          src="/img/back.png"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '70%',
          }}
        ></img>

        {/* 로고 */}
        <div>
          <h2
            style={{
              fontFamily: 'cafe',
              fontSize: '39px',
            }}
          >
            내 정보
          </h2>
        </div>

        {/* 네비게이션바 */}
        <button
          style={{
            border: 'none',
            backgroundColor: 'white',
          }}
        >
          <img
            style={{
              width: '40px',
              height: '40px',
            }}
            src="/img/menu.png"
          ></img>
        </button>
      </div>
    </div>
  );
}

export default MyInfo;
