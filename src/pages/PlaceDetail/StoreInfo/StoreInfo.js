import React from 'react';
import './StoreInfo.css';
import { useNavigate, useParams } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import apis from '../../../apis';

function StoreInfo() {
  let navigate = useNavigate();
  const { place_name } = useParams();
  let [storeData, setStoreData] = React.useState();

  React.useEffect(() => {
    apis
      .post('/api/place/getStoreInfo', { place_name: place_name })
      .then((response) => {
        setStoreData(response.data[0]);
        console.log('가게정보는 다음과 같습니다', storeData);

        return storeData;
      })
      .catch((err) => {
        console.log('가게 정보 불러오기 에러', err);
      });
  }, []);

  return (
    <div
      style={{
        border: 'solid 1px',
        width: '360px',
        height: '640px',
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
        {/* 뒤로가기  */}
        <img
          onClick={() => {
            navigate(-1);
          }}
          src="/img/back.png"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '70%',
          }}
        ></img>

        {/* 페이지명 */}
        <div>
          <h2
            style={{
              fontFamily: 'cafe',
              fontSize: '39px',
            }}
          >
            가게 정보
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

      {/* 가게 사진 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          columnGap: '1px',
          gridTemplateRows: 'repeat(4, 1fr)',
          rowGap: '1px',
          height: '180px',
          width: '100%',
          padding: '5px',
        }}
      >
        <div
          style={{
            border: 'solid 1px',
            gridColumn: '1 / 3',
            gridRow: '1 / 3',
          }}
        >
          <img className="store_photo" src="./img/store_1.png"></img>
        </div>
        <div
          style={{
            border: 'solid 1px',
          }}
        >
          <img className="store_photo" src="./img/store_3.png"></img>
        </div>
        <div
          style={{
            border: 'solid 1px',
          }}
        >
          <img className="store_photo" src="./img/store_4.png"></img>
        </div>
        <div
          style={{
            border: 'solid 1px',
          }}
        >
          <img className="store_photo" src="./img/store_5.png"></img>
        </div>
        <div
          style={{
            border: 'solid 1px',
            padding: '20px',
          }}
        >
          <img className="store_photo" src="./img/more.png"></img>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'cafe',
          fontSize: '30px',
          borderBottom: 'double 5px',
        }}
      >
        <h3>
          {storeData?.place_name}
          <span className="category_span">
            &lt;{storeData?.category_name}&gt;
          </span>
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
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '5px',
            marginBottom: '10px',
          }}
        >
          <h3>
            <span
              style={{
                color: 'blue',
                fontWeight: 'bold',
              }}
            >
              n
            </span>
            개의 리뷰가 있는 곳이에요!
          </h3>

          <AwesomeButton
            className="review_button"
            type="secondary"
            action={() => {
              navigate(`/ReviewBoard/${place_name}`);
            }}
          >
            리뷰 보러 가기
          </AwesomeButton>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h3>
            검증중인 리뷰가{' '}
            <span
              style={{
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              n
            </span>
            개있어요.
          </h3>

          <AwesomeButton
            className="review_button"
            type="secondary"
            action={() => {
              navigate(`/ReviewBoard/${place_name}`);
            }}
          >
            투표 하러 가기
          </AwesomeButton>
        </div>
      </div>
      <div
        style={{
          borderBottom: 'double 5px',
          padding: '5px',
        }}
      >
        <div>
          <h3 className="bold_letter">
            주소: <span className="normal_letter">{storeData?.address}</span>
          </h3>
          <h3 className="bold_letter">
            영업시간: <span className="normal_letter">오전 11시</span>~
            <span className="normal_letter">오후 10시</span>
          </h3>
          <h3 className="bold_letter">
            홈페이지:{' '}
            <span className="normal_letter">{storeData?.place_url}</span>
          </h3>
          <h3 className="bold_letter">
            Instagram:{' '}
            <span className="normal_letter">
              https://www.instagram.com/dlwlrma/
            </span>
          </h3>
          <h3 className="bold_letter">
            Tel: <span className="normal_letter">{storeData?.phone}</span>
          </h3>
        </div>
      </div>
      <div
        style={{
          paddingLeft: '5px',
        }}
      >
        <h3 className="bold_letter">여행 Data</h3>
        <h5>
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
        <h5>
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
        <h5>
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
          <img className="store_photo" src="/img/graph_sample.png"></img>
        </div>
      </div>
    </div>
  );
}

export default StoreInfo;
