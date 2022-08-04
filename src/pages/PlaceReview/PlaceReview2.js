import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PlaceReview.module.css';
import { Table, Button, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import apis from '../../apis';

function Review2() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);

  // 서버

  const [verifyReview, setVerifyReview] = useState([]);
  const [notVerifyReview, setNotVerifyReview] = useState([]);

  useEffect(() => {
    apis.get('/api/getReview').then((res) => {
      const data = res.data;
      setVerifyReview(data.filter((d) => d.verify === 1));
      setNotVerifyReview(data.filter((d) => d.verify === 0));
    });
  }, []);

  console.log(verifyReview);
  return (
    <div className={styles.container} style={{ overflow: 'auto' }}>
      <div className={styles.main_container}>
        {/* 헤더 */}
        <div className={styles.main_row1}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
            style={{ height: '25px', fontSize: '50px', marginRight: '10px' }}
            onClick={() => {
              navigate('/goTrip');
            }}
          />
          <p style={{ fontSize: '30px', fontWeight: '600', margin: '5px 0' }}>
            리뷰게시판
          </p>
        </div>

        <div className={styles.main_row2}>
          <div className={styles.sub_row1}>
            <h3>등록된 리뷰</h3>
            {/* 필터버튼 */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3126/3126539.png"
              style={{
                height: '25px',
                fontSize: '50px',
                margin: '5px',
                position: 'relative',
                marginLeft: '200px',
              }}
            />
          </div>

          {/* 등록된 리뷰 게시글 */}

          <Table striped bordered hover size="sm">
            <thead style={{ background: 'skyblue', border: 1 }}>
              <tr>
                <th>장소명</th>
                <th>제목</th>
                <th>닉네임</th>
                <th>평점</th>
                <th>좋아요</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <Tables1
                verifyReview={verifyReview}
                setSelectedId={setSelectedId}
                selectedId={selectedId}
              />
            </tbody>
          </Table>
        </div>

        {/* 검증 중인 리뷰 */}
        <div className={styles.main_row3}>
          <div className={styles.sub_row1}>
            <h3>검증 중인 리뷰</h3>
            <Button
              onClick={() => {
                navigate('/Write');
              }}
              variant="primary"
              style={{ position: 'relative', marginLeft: '120px' }}
            >
              리뷰작성
            </Button>
          </div>
          <Table striped bordered hover size="sm">
            <thead style={{ background: 'cornflowerblue', border: 1 }}>
              <tr>
                <th>장소명</th>
                <th>제목</th>
                <th>닉네임</th>
                <th>평점</th>
                <th>좋아요</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <Tables2
                notVerifyReview={notVerifyReview}
                setSelectedId2={setSelectedId2}
                selectedId2={selectedId2}
              />
            </tbody>
          </Table>
        </div>

        {/* 리뷰내용 모달창 */}
        <div className={styles.main_row4}>
          {selectedId && (
            <div>
              <Modal1
                verifyReview={verifyReview}
                selectedId={selectedId}
              ></Modal1>
            </div>
          )}
          {selectedId2 && (
            <div>
              <Modal2
                notVerifyReview={notVerifyReview}
                selectedId2={selectedId2}
              ></Modal2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 컴포넌트

//

// 리뷰리스트1
function Tables1({ verifyReview, setSelectedId, selectedId }) {
  return verifyReview.map((verifyReview) => (
    <React.Fragment key={verifyReview.id}>
      <tr
        onClick={() => {
          if (selectedId === verifyReview.id) {
            setSelectedId(null);
          } else {
            setSelectedId(verifyReview.id);
          }
        }}
      >
        <td> {verifyReview.place_name} </td>
        <td> {verifyReview.title} </td>
        <td> {verifyReview.nickname} </td>
        <td> {verifyReview.score} </td>
        <td> {verifyReview._like} </td>
        <td> {verifyReview.date} </td>
      </tr>
    </React.Fragment>
  ));
}

// 리뷰리스트2
function Tables2({ notVerifyReview, setSelectedId2, selectedId2 }) {
  return notVerifyReview.map((notVerifyReview) => (
    <React.Fragment key={notVerifyReview.id}>
      <tr
        onClick={() => {
          if (selectedId2 === notVerifyReview.id) {
            setSelectedId2(null);
          } else {
            setSelectedId2(notVerifyReview.id);
          }
        }}
      >
        <td>{notVerifyReview.place_name}</td>
        <td>{notVerifyReview.title}</td>
        <td>{notVerifyReview.nickname}</td>
        <td>{notVerifyReview.score}</td>
        <td>{notVerifyReview._like}</td>
        <td>{notVerifyReview.date}</td>
      </tr>
    </React.Fragment>
  ));
}

// 등록된 리뷰 모달창
function Modal1({ verifyReview, selectedId }) {
  const verify = verifyReview.find((d) => d.id === selectedId);

  return (
    <Card style={{ width: '22.4rem' }}>
      <Card.Img variant="top" src={verify.img} />
      <Card.Body>
        <Card.Title>제목 : {verify.title}</Card.Title>
        <Card.Text>{verify.content}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          닉네임 : {verify.nickname}
          {/* <span style={{ color: 'blue', fontWeight: 'bold' }}></span> */}
        </ListGroup.Item>
        <ListGroup.Item>
          찬/반 결과
          <ProgressBar>
            <ProgressBar striped variant="info" now={70} key={1} />
            <ProgressBar striped variant="danger" now={40} key={3} />
          </ProgressBar>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

// 검증 중인 리뷰의 모달창
function Modal2({ notVerifyReview, selectedId2 }) {
  const notVerify = notVerifyReview.find((d) => d.id === selectedId2);
  const now = 27;
  return (
    <Card style={{ width: '22.4rem' }}>
      <Card.Img variant="top" src={notVerify.img} />
      <Card.Body>
        <Card.Title>제목 : {notVerify.title}</Card.Title>
        <Card.Text>{notVerify.content}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>닉네임 : {notVerify.nickname}</ListGroup.Item>
        <ListGroup.Item>
          진행도
          <ProgressBar now={now} label={`${now}%`} />
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            variant="primary"
            style={{ marginRight: '50px', width: '100px' }}
          >
            찬성
          </Button>
          <Button
            variant="danger"
            style={{ marginLeft: '50px', width: '100px' }}
          >
            반대
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Review2;
