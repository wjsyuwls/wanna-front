import React, { useState, useEffect } from 'react';
import './AddReview.css';
import apis from '../../../apis';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function AddReview() {
  const navigate = useNavigate();

  const [files, setFiles] = useState('');

  const onLoadFile = (e) => {
    const file = e.target.files;
    setFiles(file);
    console.log(file);
  };

  useEffect(() => {
    imgPreview();

    return () => imgPreview();
  });

  //사진 미리보기
  const imgPreview = () => {
    if (!files) return false;
    const reader = new FileReader();
    const imgEL = document.querySelector('.img_box');
    reader.onload = () => {
      console.log('이미지 reader', reader.result);
      imgEL.src = reader.result;
      // console.log(url(${reader.result}));
      // debugger;
    };
    reader.readAsDataURL(files[0]);
  };

  //server에 보낼 객체
  const [review, setReview] = useState({
    title: '',
    score: '',
    content: '',
  });

  const { title, score, content } = review; //비구조화 할당을 통해 값을 추출 한다

  //input값 입력시 state 변경
  const onChangeReview = (e) => {
    let { name, value } = e.target; //e.target에서 해당 값들을 추출

    setReview({
      ...review, //기존의 객체 복사(spread 문법)
      [name]: value, //name 키를 가진 값을 value로 설정한다
    });
    console.log('불러온 데이터', review);
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
        <form enctype="multipart/form-data">
          <div className="factor">제목</div>
          <input
            name="title"
            onChange={onChangeReview}
            value={title}
            className="input_box"
            type="text"
          ></input>
          <div className="factor">별점(5점 만점)</div>
          <input
            type="number"
            placeholder="0~5사이의 점수만 입력해 주세요."
            name="score"
            onChange={onChangeReview}
            value={score}
            className="input_box"
          ></input>
          <div className="factor">내용</div>
          <textarea
            name="content"
            onChange={onChangeReview}
            value={content}
            className="input_box input_text_box"
          ></textarea>
          <div>
            <div className="factor">사진 첨부</div>
            <input
              type="file"
              name="img"
              id="img"
              onChange={onLoadFile}
            ></input>
            <img src="" className="img_box"></img>
            {/* <input
              name="img"
              type="file"
              id="file"
              onChange={(e) => {
                handleChangeFile(e);
              }}
            /> */}
            {/* {imgBase64 && <img src={imgBase64} className="view_img" />} */}
            <div>
              <Button
                className="input_button"
                variant="outline-primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  let formData = new FormData();
                  let imagefile = document.querySelector('#img');
                  if (imagefile.files && imagefile.files.length > 0) {
                    let imgURL = imagefile.files[0];
                    console.log('이미지 url', imgURL);
                    formData.append('img', imgURL);
                  }
                  formData.append('title', review.title);
                  formData.append('score', review.score);
                  formData.append('content', review.content);
                  formData.append('place_name', '가게 상호 넣을거에요');
                  formData.append('nickname', '유저닉네임');

                  console.log('보낼 이미지', imagefile);

                  apis
                    .post('/api/review/add', formData, {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    })
                    .then((err) => {
                      console.log('에러입니다', err);
                    });
                }}
              >
                제출 하기
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReview;