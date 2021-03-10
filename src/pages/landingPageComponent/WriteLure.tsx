import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './WriteLure.css';

const WriteLure: React.FC<RouteComponentProps> = (
  props: RouteComponentProps,
) => {
  return (
    <div className="wholeWriteLureWrapper">
      <div className="WriteLureText">
        <p>상상을 글로 옮겨</p>
        <p>간편하게 작가되기</p>
        <p>
          구름책방에서는 챌린지를 거치지 않아도 누구나 작가가 될 수 있습니다.
        </p>
      </div>
      <div className="WriteLureImg">
        <div className="WriteLureImgText">
          <p>작품의 첫 페이지를 작성해</p>
          <p>작가로서의 여정을 시작해보세요.</p>
          <div
            className="WriteLureBtn"
            role="presentation"
            onClick={() => {
              props.history.push('/main/home');
            }}
          >
            글쓰러 가기
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteLure;
