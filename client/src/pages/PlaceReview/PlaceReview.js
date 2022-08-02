import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PlaceReview.module.css';
import { Table, Button, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import { table1, table2, modal1, modal2 } from './table1';

function Review2() {
  const navigate = useNavigate();
  //    let [고기, set고기] = useState(false);
  //    let [샌드, set샌드] = useState(false);
  //    let [여수, set여수] = useState(false);
  //    let [타코, set타코] = useState(false);
  //    let [디저트, set디저트] = useState(false);

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
              navigate('/Trip');
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
          <span style={{ color: 'blue', fontWeight: 'bold' }}>Lv.7</span>
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

// function Modal샌드() {
//    const now = 45;
//    return (
//       <Card style={{ width: '22.4rem' }}>
//          <Card.Img variant="top" src="https://recipe1.ezmember.co.kr/cache/recipe/2020/07/29/118f9f1ecc4b9ffbb81b324ad450c0a91.jpg" />
//          <Card.Body>
//             <Card.Title>샌드위치 맛집은 여기입니다.</Card.Title>
//             <Card.Text>
//                서브웨이 인생 5년차 이지만 샌드위치는 너무 맛있습니다. 이집 샌드위치는 별점 4.1점 짜리입니다.
//             </Card.Text>
//          </Card.Body>
//          <ListGroup className="list-group-flush">
//             <ListGroup.Item>작성자 : 서브웨이 <span style={{ color: "orange", fontWeight: 'bold' }}>Lv.12</span></ListGroup.Item>
//             <ListGroup.Item>진행도<ProgressBar now={now} label={`${now}%`} /></ListGroup.Item>
//             <ListGroup.Item>
//                <Button variant="primary" style={{ marginRight: "50px", width: "100px" }}>찬성</Button>
//                <Button variant="danger" style={{ marginLeft: "50px", width: "100px" }}>반대</Button>
//             </ListGroup.Item>
//          </ListGroup>
//       </Card>
//    )
// }

// function Modal여수() {
//    const now = 63;
//    return (
//       <Card style={{ width: '22.4rem' }}>
//          <Card.Img variant="top" src="https://t1.daumcdn.net/cfile/tistory/99DACC3F5A35356F2B" />
//          <Card.Body>
//             <Card.Title>여수 게장 맛집을 찾아서</Card.Title>
//             <Card.Text>
//                5시간 운전해서 먹으니까 더 맛있습니다.
//                <br />맛 : 4.1점/ 분위기 :3.7점 / 가격 : 4.2점
//                <br />재방문의사 : 있음
//             </Card.Text>
//          </Card.Body>
//          <ListGroup className="list-group-flush">
//             <ListGroup.Item>작성자 : 게장 <span style={{ color: "orange", fontWeight: 'bold' }}>Lv.19</span></ListGroup.Item>
//             <ListGroup.Item>진행도<ProgressBar now={now} label={`${now}%`} /></ListGroup.Item>
//             <ListGroup.Item>
//                <Button variant="primary" style={{ marginRight: "50px", width: "100px" }}>찬성</Button>
//                <Button variant="danger" style={{ marginLeft: "50px", width: "100px" }}>반대</Button>
//             </ListGroup.Item>
//          </ListGroup>
//       </Card>
//    )
// }

// function Modal타코() {
//    const now = 81;
//    return (
//       <Card style={{ width: '22.4rem' }}>
//          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxNzAyMDNfMTk4/MDAxNDg2MTA1NDU3MTIw.-25d8KKqdRP9XNBlU4oKcgEpnL5i2LTg04w7X4V0TSIg.nlRFpfh5ilEVQp3lwV9k4U-pddkb4-NBBAv-Fcw_yrEg.JPEG.zhsz/IMG_7735.JPG?type=w2" />
//          <Card.Body>
//             <Card.Title>이태원의 타코맛집 best5</Card.Title>
//             <Card.Text>
//                리얼 멕시코의 향수를 느낄수 있는 집
//                <br />맛 : 4.5점/ 분위기 : 4.9점 / 가격 : 4.2점
//                <br />재방문의사 : 있음
//             </Card.Text>
//          </Card.Body>
//          <ListGroup className="list-group-flush">
//             <ListGroup.Item>작성자 : 멕시카나 <span style={{ color: "red", fontWeight: 'bold' }}>Lv.22</span></ListGroup.Item>
//             <ListGroup.Item>진행도<ProgressBar now={now} label={`${now}%`} /></ListGroup.Item>
//             <ListGroup.Item>
//                <Button variant="primary" style={{ marginRight: "50px", width: "100px" }}>찬성</Button>
//                <Button variant="danger" style={{ marginLeft: "50px", width: "100px" }}>반대</Button>
//             </ListGroup.Item>
//          </ListGroup>
//       </Card>
//    )
// }

// function Modal디저트() {
//    const now = 90;
//    return (
//       <Card style={{ width: '22.4rem' }}>
//          <Card.Img variant="top" src="https://post-phinf.pstatic.net/MjAxOTA3MTVfMjE2/MDAxNTYzMTczMDg1NzUz.xF9hy4C02SuT9k370mAF5lGC3Oy63b6UG0BI9Nqblckg.Ys5Tdt4GGFddpWeNktClKMNuSSTvtjYeLXZEcUtDHoog.JPEG/image_574884461563172785090.jpg?type=w1200" />
//          <Card.Body>
//             <Card.Title>경리단길 디저트 맛집 순위 탑 5</Card.Title>
//             <Card.Text>
//                예약안하면 먹기힘든 경리단길 맛집
//                <br />맛 : 4.9점/ 분위기 : 4.7점 / 가격 : 4.5점
//                <br />대신 커피는 다른곳에서 드세요.
//             </Card.Text>
//          </Card.Body>
//          <ListGroup className="list-group-flush">
//             <ListGroup.Item>작성자 : 룽지 <span style={{ color: "fuchsia", fontWeight: 'bold' }}>Lv.30</span></ListGroup.Item>
//             <ListGroup.Item>진행도<ProgressBar now={now} label={`${now}%`} /></ListGroup.Item>
//             <ListGroup.Item>
//                <Button variant="primary" style={{ marginRight: "50px", width: "100px" }}>찬성</Button>
//                <Button variant="danger" style={{ marginLeft: "50px", width: "100px" }}>반대</Button>
//             </ListGroup.Item>
//          </ListGroup>
//       </Card>
//    )
// }

export default Review2;
