import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Trip.module.css';
import { Button, ListGroup, Carousel } from 'react-bootstrap';

function Trip() {
  const navigate = useNavigate();
  let [서울, set서울] = useState(false);
  let [경기, set경기] = useState(false);
  let [인천, set인천] = useState(false);
  let [경상, set경상] = useState(false);
  let [부산, set부산] = useState(false);
  let [전라, set전라] = useState(false);
  let [강원, set강원] = useState(false);
  let [충청, set충청] = useState(false);
  let [제주, set제주] = useState(false);

  return (
    <div className={styles.container} style={{ overflow: 'auto' }}>
      <div className={styles.main_container}>
        <div
          className={styles.main_row1}
          style={{ fontFamily: 'cute', fontSize: '30px', fontWeight: '600' }}
          onClick={() => {
            navigate('/');
          }}
        >
          WANNA
        </div>
        <div className={styles.main_row2}>
          <input
            placeholder="가고싶은 곳을 찾아보세요."
            style={{ fontSize: '20px', height: '25px', width: '80vw' }}
          />
          <img
            src="img/search.svg"
            style={{ height: '25px', marginRight: '5px', fontSize: '50px' }}
          />
          <Buttons />
        </div>

        <div className={styles.main_row3}>
          <h5>지역선택</h5>
        </div>

        <div className={styles.main_row4}>
          <div className={styles.place_container}>
            <h3>추천 핫플레이스</h3>
            <div className={styles.sub_container1}>
              <div className={styles.sub_col1}>
                <ListGroup variant="flush">
                  <ListGroup.Item>홍대/합정</ListGroup.Item>
                  <ListGroup.Item>강남</ListGroup.Item>
                  <ListGroup.Item>압구정/가로수길</ListGroup.Item>
                </ListGroup>
              </div>
              <div className={styles.sub_col2}>
                <ListGroup variant="flush">
                  <ListGroup.Item>성수</ListGroup.Item>
                  <ListGroup.Item>제주도</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main_row5}>
          <div className={styles.place_container}>
            <h3>전체 지역</h3>
            <div className={styles.sub_container1}>
              <div className={styles.sub_col1}>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    onClick={() => {
                      set서울(!서울);
                    }}
                  >
                    서울
                  </ListGroup.Item>
                  {서울 == true ? <Modal서울 /> : null}
                  <ListGroup.Item
                    onClick={() => {
                      set인천(!인천);
                    }}
                  >
                    인천
                  </ListGroup.Item>
                  {인천 == true ? <Modal인천 /> : null}
                  <ListGroup.Item
                    onClick={() => {
                      set경상(!경상);
                    }}
                  >
                    경상
                  </ListGroup.Item>
                  {경상 == true ? <Modal경상 /> : null}
                  <ListGroup.Item
                    onClick={() => {
                      set강원(!강원);
                    }}
                  >
                    강원
                  </ListGroup.Item>
                  {강원 == true ? <Modal강원 /> : null}
                  <ListGroup.Item
                    onClick={() => {
                      set제주(!제주);
                    }}
                  >
                    제주
                  </ListGroup.Item>
                  {제주 == true ? <Modal제주 /> : null}
                </ListGroup>
              </div>
              <div className={styles.sub_col2}>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    onClick={() => {
                      set경기(!경기);
                    }}
                  >
                    경기
                  </ListGroup.Item>
                  {경기 == true ? <Modal경기 /> : null}
                  <ListGroup.Item
                    onClick={() => {
                      set부산(!부산);
                    }}
                  >
                    부산
                  </ListGroup.Item>
                  {부산 == true ? <Modal부산 /> : null}
                  <ListGroup.Item
                    onClick={() => {
                      set전라(!전라);
                    }}
                  >
                    전라
                  </ListGroup.Item>
                  {전라 == true ? <Modal전라 /> : null}
                  <ListGroup.Item
                    onClick={() => {
                      set충청(!충청);
                    }}
                  >
                    충청
                  </ListGroup.Item>
                  {충청 == true ? <Modal충청 /> : null}
                </ListGroup>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main_row6}>
          <h3
            onClick={() => {
              navigate('/Review2');
            }}
          >
            베스트 리뷰
          </h3>
          <Review_image />
        </div>
      </div>
    </div>
  );
}

// 이미지 캐러셀
function Review_image() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={styles.review_img}>
          <img
            className="d-block w-100"
            src="https:/img.insight.co.kr/static/2022/07/08/700/img_20220708160411_55hs1883.webp"
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>낙조마을</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className={styles.review_img}>
          <img
            className="d-block w-100"
            src="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2FHypebeast-check-gordon-ramsay-burger-korean-restaurant-info-22.jpg?w=1600&cbr=1&q=90&fit=max"
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3>고든램지버거</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className={styles.review_img}>
          <img
            className="d-block w-100"
            src="https://mania.kr/g2/data/file/freetalk/mania-done-1553090340_MCAGr97J_LRM_EXPORT_675574105453851_20190320_224336233.jpg"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>제주도 야경</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// Modal 친구들
function Modal서울() {
  return (
    <>
      <div>
        <div className={styles.place_container}>
          <div className={styles.sub_container1}>
            <div className={styles.sub_col1}>
              <ListGroup variant="flush">
                <ListGroup.Item>서울전체</ListGroup.Item>
                <ListGroup.Item>서초/신사/방배/교대</ListGroup.Item>
                <ListGroup.Item>을지로/명동/중구/종로</ListGroup.Item>
                <ListGroup.Item>용산/이태원</ListGroup.Item>
                <ListGroup.Item>구로/신도림/가산/관악/동작</ListGroup.Item>
                <ListGroup.Item>건대/성수/동대문/중랑</ListGroup.Item>
              </ListGroup>
            </div>
            <div className={styles.sub_col2}>
              <ListGroup variant="flush">
                <ListGroup.Item>강남/역삼/삼성/논현</ListGroup.Item>
                <ListGroup.Item>잠실/신천/송파/천호/강동</ListGroup.Item>
                <ListGroup.Item>홍대/합정/마포/서대문/은평</ListGroup.Item>
                <ListGroup.Item>영등포/여의도/강서/양천/목동</ListGroup.Item>
                <ListGroup.Item>노원/성북/강북/도봉</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Modal경기() {
  return (
    <>
      <div>
        <div className={styles.place_container}>
          <div className={styles.sub_container1}>
            <div className={styles.sub_col1}>
              <ListGroup variant="flush">
                <ListGroup.Item>경기전체</ListGroup.Item>
                <ListGroup.Item>남양주/구리/성남/분당</ListGroup.Item>
                <ListGroup.Item>양주/의정부/포천/가평/양평</ListGroup.Item>
                <ListGroup.Item>부천/광명/시흥/안산</ListGroup.Item>
              </ListGroup>
            </div>
            <div className={styles.sub_col2}>
              <ListGroup variant="flush">
                <ListGroup.Item>고양/파주/김포</ListGroup.Item>
                <ListGroup.Item>수원/화성/용인/평택/안성</ListGroup.Item>
                <ListGroup.Item>하남/광주/이천/여주</ListGroup.Item>
                <ListGroup.Item>과천/안양/의왕/군포</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Modal인천() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>인천전체</ListGroup.Item>
      </ListGroup>
    </>
  );
}

function Modal부산() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>부산전체</ListGroup.Item>
      </ListGroup>
    </>
  );
}

function Modal경상() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>경상전체</ListGroup.Item>
      </ListGroup>
    </>
  );
}

function Modal전라() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>전라전체</ListGroup.Item>
      </ListGroup>
    </>
  );
}

function Modal강원() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>강원전체</ListGroup.Item>
      </ListGroup>
    </>
  );
}

function Modal충청() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>충청전체</ListGroup.Item>
      </ListGroup>
    </>
  );
}

function Modal제주() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>제주전체</ListGroup.Item>
      </ListGroup>
    </>
  );
}

// 버튼
function Buttons() {
  return (
    <>
      <Button variant="primary">#여름휴가</Button>{' '}
      <Button variant="primary">#나홀로여행</Button>{' '}
      <Button variant="primary">#맛집탐방</Button>{' '}
      <Button variant="primary">#기차여행</Button>{' '}
      <Button variant="primary">#반려동물</Button>{' '}
      <Button variant="primary">#경치</Button>{' '}
    </>
  );
}

export default Trip;
