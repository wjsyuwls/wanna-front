import React from 'react';
import './StoreInfo.css';
import { useNavigate, useParams } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import apis from '../../../apis';

function StoreInfo() {
  let navigate = useNavigate();
  const { place_name } = useParams();
  const [storeData, setStoreData] = React.useState();

  const [placeReview, setPlaceReview] = React.useState([]);

  React.useEffect(() => {
    apis //
      .post('/api/place/getStoreInfo', { place_name: place_name })
      .then((response) => {
        setStoreData(response.data[0]);
      })
      .catch((err) => {
        console.log('가게 정보 불러오기 에러', err);
      });
  }, []);

  return (
    <div className="App box whole_container">
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
          <h2 className="nav_title">상세 정보</h2>
        </div>

        {/* 네비게이션바 */}
        <img className="nav_btn_img" src="/img/menu.png"></img>
      </div>

      {/* 가게 사진 */}
      <div className="store_photo_container">
        <img
          className="store_photo"
          src={storeData?.place_url}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="store_title_container">
        <h3 className="store_title">
          {storeData?.place_name}
          <span className="small_font">&lt;{storeData?.category_name}&gt;</span>
        </h3>
      </div>
      <div
        style={{
          padding: '10px',
          borderBottom: 'double 5px',
        }}
      >
        <div
          style={{
            width: '340px',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '5px',
            marginBottom: '10px',
          }}
        >
          <h3
            className="normal_font"
            style={{
              marginTop: '20px',
            }}
          >
            <span
              style={{
                color: 'blue',
              }}
            >
              {placeReview.length}
            </span>
            개의 리뷰가 있는 곳이에요!
          </h3>

          <AwesomeButton
            className="review_button"
            type="secondary"
            style={{
              width: '95px',
              height: '60px',
              marginTop: '20px',
            }}
            action={() => {
              navigate(`/ReviewBoard/${place_name}`);
            }}
          >
            리뷰 게시판 가기
          </AwesomeButton>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h3
            style={{
              width: '100%',
              marginBottom: '10px',
            }}
            className="normal_font"
          >
            ❗ 검증중인 리뷰가 있어요 ❗
          </h3>
        </div>
      </div>
      <div
        style={{
          borderBottom: 'double 5px',
          padding: '5px',
        }}
      >
        <div>
          <h3 className="bold_letter normal_font">
            주소:{' '}
            <span className="normal_letter normal_font">
              {storeData?.address}
            </span>
          </h3>
          <h3 className="bold_letter normal_font">
            영업시간: <span className="normal_font">오전 11시</span>~
            <span className="normal_letter">오후 10시</span>
          </h3>
          <h3 className="bold_letter normal_font">
            홈페이지:{' '}
            <span className="normal_font">{storeData?.place_url}</span>
          </h3>
          <h3 className="bold_letter normal_font">
            Instagram:{' '}
            <span className="normal_font">
              https://www.instagram.com/dlwlrma/
            </span>
          </h3>
          <h3 className="bold_letter normal_font">
            Tel: <span className="normal_font">{storeData?.phone}</span>
          </h3>
        </div>
      </div>
      <div
        style={{
          paddingLeft: '5px',
        }}
      >
        <h3 className="bold_letter">여행 Data</h3>
        <h5 className="normal_font">
          -
          <span
            style={{
              color: 'skyblue',
              fontWeight: 'bold',
            }}
          >
            20대 남성
          </span>
          여행객들이 주로 방문 했어요!
        </h5>
        <h5 className="normal_font">
          -가장 많이 붐비는 시간은{' '}
          <span
            style={{
              color: 'pink',
              fontWeight: 'bold',
            }}
          >
            14시
          </span>
          에요!
        </h5>
        <h5 className="normal_font">
          -이 가게 주변의 인기 여행지{' '}
          <a
            href="https://www.naver.com/"
            style={{
              fontWeight: 'bold',
            }}
          >
            보러가기
          </a>
        </h5>
        <div
          style={{
            width: '100%',
          }}
        >
          <img className="store_graph" src="/img/graph_sample.png"></img>
        </div>
      </div>
    </div>
  );
}

export default StoreInfo;
