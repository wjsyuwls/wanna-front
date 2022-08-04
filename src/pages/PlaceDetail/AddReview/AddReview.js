import React, { useState } from 'react';
import './AddReview.css';
import Button from 'react-bootstrap/Button';

//객체 input값 처리법 : https://bgeun2.tistory.com/23

function AddReview() {
  let [review, setReview] = useState({
    place_name: '',
    title: '',
    nickname: '',
    score: '',
    img: '',
    content: '',
  });

  const { title, score, content } = review; //비구조화 할당을 통해 값을 추출 한다

  let onChangeReview = (e) => {
    let { name, value } = e.target; //e.target에서 해당 값들을 추출

    setReview({
      ...review, //기존의 객체 복사(spread 문법)
      [name]: value, //name 키를 가진 값을 value로 설정한다
    });
    console.log(review);
  };

  let onReset = () => {
    setReview({
      title: '',
      score: '',
      img: '',
      content: '',
    });
  };

  return (
    <div className="whole_container">
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
          <h2 className="nav_title">리뷰 쓰기</h2>
        </div>

        {/* 네비게이션바 */}
        <img className="nav_btn_img" src="/img/menu.png"></img>
      </div>
      <div>가게 이름</div>
      <div>
        <form>
          <div className="factor">제목</div>
          <input
            name="title"
            onChange={onChangeReview}
            value={title}
            className="input_box"
            type="text"
          ></input>
          <div className="factor">별점</div>
          <input
            name="score"
            onChange={onChangeReview}
            value={score}
            className="input_box"
          ></input>
          <div className="factor" type="text">
            내용
          </div>
          <input
            name="content"
            onChange={onChangeReview}
            value={content}
            className="input_box"
          ></input>
          <div className="factor">사진 업로드</div>
          <img className="add_img_button" src="/img/add.png"></img>
          <Button
            className="input_button"
            variant="outline-primary"
            type="submit"
          >
            제출 하기
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddReview;
