import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import './MainPage.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter as Router,
} from 'react-router-dom';

function MainPage() {
  let navigate = useNavigate();
  let [quoation, setQuoation] = useState([]);

  // 코인 시세 업데이트 기능
  // cors 이슈 참고: https://sennieworld.tistory.com/m/49
  // cors 오류 해결을 위한 프록시 수동 설정: https://hoons-up.tistory.com/26 이 방법을 사용
  //up-bit open Api 사이트를 참조 https://docs.upbit.com/reference/%EC%A0%84%EC%B2%B4-%EA%B3%84%EC%A2%8C-%EC%A1%B0%ED%9A%8C
  async function updateQuoation() {
    await axios
      .get('/v1/ticker', {
        params: {
          markets: 'KRW-BTC, KRW-ETH, KRW-XRP, KRW-NEO',
        },
      })
      .then(function (response) {
        let quoationCopy = [...quoation];
        quoationCopy[0] = response.data[0].trade_price;
        quoationCopy[1] = response.data[0].signed_change_price;
        quoationCopy[2] = response.data[1].trade_price;
        quoationCopy[3] = response.data[1].signed_change_price;
        quoationCopy[4] = response.data[2].trade_price;
        quoationCopy[5] = response.data[2].signed_change_price;
        quoationCopy[6] = response.data[3].trade_price;
        quoationCopy[7] = response.data[3].signed_change_price;

        setQuoation(quoationCopy);
      })
      .catch(function (error) {
        console.log('에러: ' + error);
      });
  }
  // 리액트는 이렇게 함수를 실행 시키고, 다시 처음부터 시작하여 재 랜더링을 하기 때문에 useEffect사용
  // 5초에 한번씩 함수를 실행
  useEffect(() => {
    updateQuoation();
    const timer = setInterval(updateQuoation, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div className="App box whole_container">
        <div className="nav_container">
          {/* 캐릭터 정보  */}
          <img
            className="nav_profile_img"
            onClick={() => {
              navigate('/myInfo');
            }}
            src="/img/profile_sample.png"
          ></img>

          {/* 로고 */}
          <div>
            <h2 className="nav_logo">Wanna</h2>
          </div>

          {/* 네비게이션바 */}
          <button className="nav_btn">
            <img className="nav_btn_img" src="/img/menu.png"></img>
          </button>
        </div>

        <h5 className="font_cute">카리나님, 안녕하세요!</h5>

        {/* 검색창 */}
        <div className="search_box">
          <img className="search_img" src="/img/search.png"></img>
          <div class="inner">
            <input type="search" />
            <div class="searching"></div>
            <div class="icon_ect"></div>
          </div>
        </div>

        {/* 이벤트 버튼 */}
        <div className="event_container">
          <Button
            className="event_btn"
            variant="outline-primary"
            onClick={() => {
              navigate('/goTrip');
            }}
          >
            여행가기
          </Button>
          <Button className="event_btn" variant="outline-primary">
            현지인 <br></br>큐레이팅
          </Button>
          <Button className="event_btn" variant="outline-primary">
            이벤트
          </Button>
        </div>

        {/* 실시간 코인 시세 현황 */}
        <div className="coin_container">
          <h4>실시간 코인 시세</h4>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>코인</th>
                <th>현재 가격(원)</th>
                <th>변화량(원)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BitCoin</td>
                <td>{quoation[0]}</td>
                <td>{quoation[1]}</td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>{quoation[2]}</td>
                <td>{quoation[3]}</td>
              </tr>
              <tr>
                <td>XRP</td>
                <td>{quoation[4]}</td>
                <td>{quoation[5]}</td>
              </tr>
              <tr>
                <td>NEO</td>
                <td>{quoation[6]}</td>
                <td>{quoation[7]}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* 베스트 리뷰 */}
        <div className="review_container">
          <h4>금주의 베스트 여행기</h4>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 review_radius"
                src="\img\pusan.jpg"
              />
              <Carousel.Caption>
                <h3 className="review_font_size">부산 해운대</h3>
                <h6>해운대 앞바다와 마천루가 선사하는 근사한 야경</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 review_radius"
                src="\img\bookchon.jpg"
              />
              <Carousel.Caption>
                <h3 className="review_font_size">서울 북촌 한옥마을</h3>
                <h6>고즈넉한 분위기의 전통 한옥마을</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 review_radius"
                src="\img\geoje.jpg"
              />
              <Carousel.Caption>
                <h3 className="review_font_size">경남 거제시</h3>
                <h6>조용하고 따뜻한 바다마을을 여행하고 싶다면.. 거제로!</h6>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
