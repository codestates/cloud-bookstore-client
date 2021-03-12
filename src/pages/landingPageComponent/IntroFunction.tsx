import React from 'react';
import './IntroFunction.css';

const IntroFunction: React.FC = () => {
  return (
    <div className="wholeIntroFunctionWrapper">
      <div className="introFunctionText">
        <p>한 눈에 살펴보는</p>
        <p>구름책방의 기능들</p>
      </div>
      <div className="introFunctionBoxWrapper">
        <div id="introFunction1" className="introFunctionBox">
          <div id="functionIcon1" className="introFunctionInnerIcon"></div>
          <div className="introFunctionInnerText">
            <p>작품등록</p>
            <p>간편하게 자신의</p>
            <p>작품을 만들어요!</p>
          </div>
        </div>
        <div id="introFunction2" className="introFunctionBox">
          <div id="functionIcon2" className="introFunctionInnerIcon"></div>
          <div className="introFunctionInnerText">
            <p>작품감상</p>
            <p>다양한 작품을</p>
            <p>즐겁게 감상해요!</p>
          </div>
        </div>
        <div id="introFunction3" className="introFunctionBox">
          <div id="functionIcon3" className="introFunctionInnerIcon"></div>
          <div className="introFunctionInnerText">
            <p>구름사용</p>
            <p>구름으로 원하는</p>
            <p>소설을 읽어요!</p>
          </div>
        </div>
        <div id="introFunction4" className="introFunctionBox">
          <div id="functionIcon4" className="introFunctionInnerIcon"></div>
          <div className="introFunctionInnerText">
            <p>관심기능</p>
            <p>흥미로운 작품은</p>
            <p>관심작품으로 등록해요!</p>
          </div>
        </div>
        <div id="introFunction5" className="introFunctionBox">
          <div id="functionIcon5" className="introFunctionInnerIcon"></div>
          <div className="introFunctionInnerText">
            <p>댓글달기</p>
            <p>작가 및 다른 독자들과</p>
            <p>의견을 나누어요!</p>
          </div>
        </div>
        <div id="introFunction6" className="introFunctionBox">
          <div id="functionIcon6" className="introFunctionInnerIcon"></div>
          <div className="introFunctionInnerText">
            <p>구름받기</p>
            <p>매일 출석을 통해</p>
            <p>구름을 얻어요!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroFunction;
