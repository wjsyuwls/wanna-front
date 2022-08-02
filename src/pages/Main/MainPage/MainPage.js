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
  async function updateQuoation() {
    await axios
      .get('/v1/ticker', {
        params: {
          markets: 'KRW-BTC, KRW-ETH, KRW-XRP, KRW-NEO',
        },
      })
      .then(function (response) {
        // console.log(response.data[0].trade_price);
        // console.log(response.data[0].change_price);
        // console.log(response.data[1].trade_price);
        // console.log(response.data[1].change_price);
        // console.log(response.data[2].trade_price);
        // console.log(response.data[2].change_price);
        // console.log(response.data[3].trade_price);
        // console.log(response.data[3].change_price);

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

  useEffect(() => {
    updateQuoation();
    const timer = setInterval(updateQuoation, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // 리액트는 이렇게 함수를 실행 시키고, 다시 처음부터 시작하여 재 랜더링을 한다

  return (
    <div>
      <div
        className="App box"
        style={{
          border: 'solid 1px',
          height: '100vh',
          width: '100vw',
          overflow: 'auto',
          scrollbarWidth: 'none',
          fontFamily: 'nanum',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* 캐릭터 정보  */}
          <img
            onClick={() => {
              navigate('/myInfo');
            }}
            src="/img/profile_sample.png"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '70%',
            }}
          ></img>

          {/* 로고 */}
          <div>
            <h2
              style={{
                fontSize: '50px',
                fontFamily: 'cute',
              }}
            >
              Wanna
            </h2>
          </div>

          {/* 네비게이션바 */}
          <button
            style={{
              border: 'none',
              backgroundColor: 'white',
            }}
          >
            <img
              style={{
                width: '40px',
                height: '40px',
              }}
              src="/img/menu.png"
            ></img>
          </button>
        </div>

        <div
          style={{
            height: '400px',
          }}
        >
          <div
            style={{
              height: '20px',
            }}
          ></div>
          <h5
            style={{
              fontFamily: 'cute',
            }}
          >
            OOO님, 안녕하세요!
          </h5>

          {/* 검색창 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <img
              style={{
                width: '50px',
                height: '50px',
              }}
              src="/img/search.png"
            ></img>
            <div class="inner">
              <input type="search" />
              <div class="searching"></div>
              <div class="icon_ect"></div>
            </div>
          </div>

          {/* 기능 버튼 */}
          <div>
            <Button
              style={{
                height: '70px',
                width: '70px',
              }}
              variant="outline-primary"
            >
              여행가기
            </Button>{' '}
            <Button
              style={{
                height: '70px',
                width: '70px',
              }}
              variant="outline-primary"
            >
              우리 지역 <br></br> 큐레이팅
            </Button>{' '}
            <Button
              style={{
                height: '70px',
                width: '70px',
              }}
              variant="outline-primary"
            >
              이벤트
            </Button>{' '}
            <Button
              style={{
                height: '70px',
                width: '70px',
              }}
              variant="outline-primary"
            >
              더 보기
            </Button>{' '}
          </div>

          {/* 실시간 코인 시세 현황 */}
          <div
            style={{
              margin: '30px 10px 10px 10px',
            }}
          >
            <Table
              striped
              bordered
              hover
              size="sm"
              style={
                {
                  // borderRadius: '15px',
                  // borderCollapse: 'collapse',
                }
              }
            >
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
          <div
            style={{
              padding: '10px',
            }}
          >
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  style={{
                    borderRadius: '15px',
                  }}
                  className="d-block w-100"
                  src="\img\pusan.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      fontSize: '20px',
                    }}
                  >
                    부산 해운대
                  </h3>
                  <h6>해운대 앞바다와 마천루가 선사하는 근사한 야경</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{
                    borderRadius: '15px',
                  }}
                  className="d-block w-100"
                  src="\img\bookchon.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      fontSize: '20px',
                    }}
                  >
                    서울 북촌 한옥마을
                  </h3>
                  <h6>고즈넉한 분위기의 전통 한옥마을</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{
                    borderRadius: '15px',
                  }}
                  className="d-block w-100"
                  src="\img\geoje.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      fontSize: '20px',
                    }}
                  >
                    경남 거제시
                  </h3>
                  <h6>조용하고 따뜻한 바다마을을 여행하고 싶다면.. 거제로!</h6>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* <Card review={review} /> */}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
