import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ReviewBoard.css';
import { Table, Button, ProgressBar } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import apis from '../../apis';
import vote from './Vote';
import * as Swal from 'sweetalert2';

function ReviewBoard() {
  // 장소 상세정보 페이지에서 장소 이름 받을꺼임 임시로
  const { place_name } = useParams();

  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);

  const [verifyReview, setVerifyReview] = useState([]);
  const [notVerifyReview, setNotVerifyReview] = useState([]);

  // review verify filter
  useEffect(() => {
    apis.get(`/api/review/${place_name}`).then((res) => {
      let data = res.data;
      // setVerifyReview(data.filter((d) => d.verify == 1));
      setNotVerifyReview(data.filter((d) => d.verify == 0));
    });
    apis.get(`/api/review/verify/${place_name}`).then((res) => {
      setVerifyReview(res.data);
    });
  }, []);

  return (
    <div
      className="whole_container"
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* header */}
      <div className="head_container">
        {/* 뒤로가기  */}
        <img
          className="head_back"
          onClick={() => {
            navigate(-1);
          }}
          src="/img/back.png"
        />
        {/* title */}
        <div>
          <h2 className="head_title">리뷰 게시판</h2>
        </div>
        {/* navbar */}
        <img className="head_menu_img" src="/img/menu.png" />
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

        {/* verify review list */}

        <Table striped bordered hover size="sm">
          <thead
            style={{
              background: 'skyblue',
              border: 1,
              fontSize: '16px',
              alignContent: 'center',
            }}
          >
            <tr>
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
                  <td> {verifyReview.like} </td>
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

      {/* not verify review list */}
      <div>
        <div className="font_small">
          <h3 className="font_small ">투표 중인 리뷰들</h3>
          <AwesomeButton
            action={() => {
              navigate(`/AddReview/${place_name}`);
            }}
            type="secondary"
          >
            리뷰 쓰기
          </AwesomeButton>
        </div>
        <Table striped bordered hover size="sm">
          <thead
            style={{
              background: 'skyblue',
              border: 1,
              fontSize: '16px',
              alignContent: 'center',
            }}
          >
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>평점</th>
              <th>좋아요</th>
              <th>작성일</th>
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
            vote={vote}
          />
        </div>
      )}
    </div>
  );
}

// 컴포넌트

// 등록된 리뷰 모달창
function Modal1({ verifyReview, selectedId }) {
  const verify = verifyReview.find((d) => d.id === selectedId);

  return (
    <div className="modal_container">
      <div>
        <h2 className="modal_title">{verify.title}</h2>
      </div>
      <div>
        <h3 className="modal_writer">{verify.nickname}</h3>
      </div>
      <img className="modal_img" variant="top" src={verify.img} />
      <div>
        <h4 className="modal_content">{verify.content}</h4>
      </div>
      <div style={{ margin: '10px' }}>COMPLETE</div>
      <ProgressBar style={{ marginBottom: '10px' }}>
        <ProgressBar striped variant="info" now={100} key={1} />
      </ProgressBar>
    </div>
  );
}

// 검증 중인 리뷰의 모달창
function Modal2({ notVerifyReview, selectedId2, vote }) {
  const notVerify = notVerifyReview.find((d) => d.id === selectedId2);
  // 굳이 진행도를 찬반으로 나누어야 할까? 물타기 이슈
  // 11 -> count * 10
  // test  3 -> count * 33.3
  const agree = notVerify.Agree.length * 33.3;
  const disagree = notVerify.Disagree.length * 33.3;

  useEffect(() => {
    notVerify.Count == 3 &&
      Swal.fire({
        icon: 'error',
        title: 'Oops... 검증에 실패해 곧 삭제될 리뷰입니다.',
        text: 'delete soon...',
      });
  }, []);

  return (
    <div className="modal_container">
      <div>
        <h2 className="modal_title">{notVerify.title}</h2>
      </div>
      <div>
        <h3 className="modal_writer">{notVerify.nickname}</h3>
      </div>
      <img className="modal_img" variant="top" src={notVerify.img} />
      <div>
        <h4 className="modal_content">{notVerify.content}</h4>
      </div>

      <div className="modal_progress">
        <div style={{ margin: '10px' }}>진행도</div>
        <ProgressBar style={{ marginBottom: '20px' }}>
          <ProgressBar striped variant="info" now={agree} />
          <ProgressBar striped variant="danger" now={disagree} />
        </ProgressBar>
      </div>
      <div className="modal_vote">
        <Button
          variant="primary"
          style={{ marginRight: '50px', width: '100px', marginBottom: '10px' }}
          onClick={() => {
            event.stopPropagation();
            vote(selectedId2, true, notVerify);
          }}
        >
          찬성
        </Button>
        <Button
          variant="danger"
          style={{ marginLeft: '50px', width: '100px', marginBottom: '10px' }}
          onClick={() => {
            event.stopPropagation();
            vote(selectedId2, false, notVerify);
          }}
        >
          반대
        </Button>
      </div>
    </div>
  );
}

export default ReviewBoard;
