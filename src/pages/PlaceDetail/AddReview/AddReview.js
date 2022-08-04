import React from 'react';
import './AddReview.css';

function AddReview() {
  return (
    <div>
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
        <img className="nav_btn_img" src="/img/menu.png"></img>
      </div>
    </div>
  );
}

export default AddReview;
