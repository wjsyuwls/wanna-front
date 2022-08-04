import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewBoard.css';
import { Table, Button, ProgressBar } from 'react-bootstrap';
import apis from '../../apis';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
function ReviewBoard() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);

  // 서버
  const [verifyReview, setVerifyReview] = useState([]);
  const [notVerifyReview, setNotVerifyReview] = useState([]);

  //모든 리뷰를 조회하여 검증 여부를 필터로 판단
  useEffect(() => {
    apis.get('/api/getReview').then((res) => {
      let data = res.data;
      setVerifyReview(data.filter((d) => d.verify == 1));
      setNotVerifyReview(data.filter((d) => d.verify == 0));
    });
  }, []);

  console.log(verifyReview);
  console.log(notVerifyReview);
  return (
    <div>
      <div className="whole_container">
        {/* header */}
        <div className="head_container">
          {/* 뒤로가기  */}
          <img
            className="head_back"
            onClick={() => {
              navigate(-1);
            }}
            src="/img/back.png"
          ></img>
          {/* 타이틀 */}
          <div>
            <h2 className="head_title">리뷰 게시판</h2>
          </div>
          {/* 네비게이션바 */}
          <img className="head_menu_img" src="/img/menu.png"></img>
        </div>

        {/* body */}
        <div>
          <div className="review_head font_small">
            <h3 className="font_small">검증된 리뷰들</h3>

            {/* 필터버튼 */}
            <img
              className="filter_img"
              src="https://cdn-icons-png.flaticon.com/512/3126/3126539.png"
            />
          </div>

          {/* 등록된 리뷰 리스트 */}

          <Table striped bordered hover size="sm">
            <thead style={{ background: 'skyblue', border: 1 }}>
              <tr className="content_center">
                <th>제목</th>
                <th>작성자</th>
                <th>평점</th>
                <th>좋아요</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody className="review_body">
              {verifyReview.map((verifyReview) => (
                <React.Fragment key={verifyReview.id}>
                  <tr
                    onClick={() => {
                      setSelectedId2(null);
                      if (selectedId === verifyReview.id) {
                        setSelectedId(null);
                      } else {
                        setSelectedId(verifyReview.id);
                      }
                    }}
                  >
                    <td> {verifyReview.title} </td>
                    <td> {verifyReview.nickname} </td>
                    <td> {verifyReview.score} </td>
                    <td> {verifyReview._like} </td>
                    <td> {verifyReview.date} </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>
          {selectedId && (
            <div>
              <Modal1
                verifyReview={verifyReview}
                notVerifyReview={notVerifyReview}
                selectedId={selectedId}
              ></Modal1>
            </div>
          )}
        </div>

        {/* 검증 중인 리뷰 리스트 */}
        <div>
          <div className="font_small">
            <h3 className="font_small ">투표 중인 리뷰들</h3>
            <AwesomeButton
              action={() => {
                navigate('/AddReview');
              }}
              type="secondary"
            >
              리뷰 쓰기
            </AwesomeButton>
          </div>
          <Table striped bordered hover size="sm">
            <thead style={{ background: 'skyblue', border: 1 }}>
              <tr>
                <th content_center>제목</th>
                <th content_center>작성자</th>
                <th content_center>평점</th>
                <th content_center>좋아요</th>
                <th content_center>작성일</th>
              </tr>
            </thead>
            <tbody className="review_body">
              {notVerifyReview.map((notVerifyReview) => (
                <React.Fragment key={notVerifyReview.id}>
                  <tr
                    onClick={() => {
                      setSelectedId(null);
                      if (selectedId2 === notVerifyReview.id) {
                        setSelectedId2(null);
                      } else {
                        setSelectedId2(notVerifyReview.id);
                      }
                    }}
                  >
                    <td>{notVerifyReview.title}</td>
                    <td>{notVerifyReview.nickname}</td>
                    <td>{notVerifyReview.score}</td>
                    <td>{notVerifyReview._like}</td>
                    <td>{notVerifyReview.date}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </div>
        {selectedId2 && (
          <div>
            <Modal2
              verifyReview={verifyReview}
              notVerifyReview={notVerifyReview}
              selectedId2={selectedId2}
            ></Modal2>
          </div>
        )}
      </div>
    </div>
  );
}

// 컴포넌트

// 등록된 리뷰 모달창
function Modal1({ verifyReview, selectedId }) {
  const verify = verifyReview.find((d) => d.id === selectedId);

  return (
    <div className="modal_container">
      <img className="modal_img" variant="top" src={verify.img} />
      <div>
        <h2 className="modal_title">제목: {verify.title}</h2>
      </div>
      <div>
        <h3 className="modal_writer">닉네임: {verify.nickname}</h3>
      </div>
      <div>
        <h4 className="modal_content">{verify.content}</h4>
      </div>
      찬/반 결과
      <ProgressBar>
        <ProgressBar striped variant="info" now={70} key={1} />
        <ProgressBar striped variant="danger" now={40} key={3} />
      </ProgressBar>
    </div>
  );
}

// 검증 중인 리뷰의 모달창
function Modal2({ notVerifyReview, selectedId2 }) {
  const notVerify = notVerifyReview.find((d) => d.id === selectedId2);
  const now = 27;
  return (
    <div className="modal_container">
      <img className="modal_img" variant="top" src={notVerify.img} />
      <div>
        <h2 className="modal_title">제목: {notVerify.title}</h2>
      </div>
      <div>
        <h3 className="modal_writer">닉네임: {notVerify.nickname}</h3>
      </div>
      <div>
        <h4 className="modal_content">{notVerify.content}</h4>
      </div>

      <div className="modal_progress">
        진행도
        <ProgressBar now={now} label={`${now}%`} />
      </div>
      <div className="modal_vote">
        <Button
          variant="primary"
          style={{ marginRight: '50px', width: '100px' }}
        >
          찬성
        </Button>
        <Button variant="danger" style={{ marginLeft: '50px', width: '100px' }}>
          반대
        </Button>
      </div>
    </div>
  );
}

export default ReviewBoard;
