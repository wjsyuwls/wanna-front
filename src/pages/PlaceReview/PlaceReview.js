import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PlaceReview.module.css';
import { Table, Button, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import { table1, table2, modal1, modal2 } from './table1';

function Review2() {
  const navigate = useNavigate();
  let [tables1] = useState(table1);
  let [tables2] = useState(table2);
  let [modals1] = useState(modal1);
  let [modals2] = useState(modal2);
  const [model1Id, setModel1Id] = useState(-1);
  const [model2Id, setModel2Id] = useState(-1);

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
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>평점</th>
                <th>작성자Lv</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {tables1.map(function (a, i) {
                return (
                  <tr
                    onClick={() => {
                      if (model1Id === i) {
                        setModel1Id(-1);
                      } else {
                        setModel1Id(i);
                      }
                    }}
                  >
                    <Tables1 tables1={tables1[i]} />
                  </tr>
                );
              })}
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
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>평점</th>
                <th>투표인원</th>
                <th>남은 시간</th>
              </tr>
            </thead>
            <tbody>
              {tables2.map(function (a, i) {
                return (
                  <tr
                    onClick={() => {
                      if (model2Id === i) {
                        setModel2Id(-1);
                      } else {
                        setModel2Id(i);
                      }
                    }}
                  >
                    <Tables2 tables2={tables2[i]} />
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* 게시글 누르면 자세히보기 */}
        <div className={styles.main_row4}>
          {model1Id >= 0 && <Modal1 modals1={modals1[model1Id]} />}
          {model2Id >= 0 && <Modal2 modals2={modals2[model2Id]} />}
        </div>
      </div>
    </div>
  );
}

// 컴포넌트
// 테이블
function Tables1(props) {
  return (
    <>
      <th>{props.tables1.num}</th>
      <th>{props.tables1.title}</th>
      <th>{props.tables1.writer}</th>
      <th>{props.tables1.grade}</th>
      <th>{props.tables1.Lv}</th>
      <th>{props.tables1.date}</th>
    </>
  );
}

function Tables2(props) {
  return (
    <>
      <th>{props.tables2.num}</th>
      <th>{props.tables2.title}</th>
      <th>{props.tables2.writer}</th>
      <th>{props.tables2.grade}</th>
      <th>{props.tables2.participants}</th>
      <th>{props.tables2.time}</th>
    </>
  );
}

// 등록된 리뷰 모달창
function Modal1(props) {
  return (
    <Card style={{ width: '22.4rem' }}>
      <Card.Img variant="top" src={props.modals1.img} />
      <Card.Body>
        <Card.Title>{props.modals1.title}</Card.Title>
        <Card.Text>{props.modals1.text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {props.modals1.writer}{' '}
          <span style={{ color: 'blue', fontWeight: 'bold' }}>
            {props.modals1.Lv}
          </span>
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
function Modal2(props) {
  const now = 27;
  return (
    <Card style={{ width: '22.4rem' }}>
      <Card.Img variant="top" src={props.modals2.img} />
      <Card.Body>
        <Card.Title>{props.modals2.title}</Card.Title>
        <Card.Text>{props.modals2.text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {props.modals2.writer}{' '}
          <span style={{ color: 'blue', fontWeight: 'bold' }}>
            {props.modals2.Lv}
          </span>
        </ListGroup.Item>
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
