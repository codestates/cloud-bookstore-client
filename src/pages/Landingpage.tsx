import React from 'react';
import '../css/Landingpage.css';

function Landingpage() {
  return (
    <>
      <div className="threeLines">
        <div className="lineBoxes"></div>
        <div id="lineBox2" className="lineBoxes"></div>
        <div id="lineBox3" className="lineBoxes"></div>
        <div className="lineBoxes"></div>
      </div>
      <div className="landingHeader">
        <div className="landingMenuBar">
          <div className="landingMenuToolBox">
            <div className="landingHeaderLogo"></div>
            <div className="landingHeaderStart">소설읽기</div>
          </div>
        </div>
        <div className="landingHeaderContent">
          <div className="landingHeaderText">
            <p>포근한 구름처럼</p>
            <p>당신을 편안하게 해주는 글</p>
            <p>구름책방</p>
          </div>
        </div>
      </div>
      <div className="landingContent">
        <div className="landingBestNovel">독자들이 선택한 최고의 작품들</div>
        <div className="landingWriteNovel">
          상상을 글로 옮겨 간편하게 작가되기
        </div>
        <div className="landingWatchFunction">
          한 눈에 살펴보는 구름책방의 기능들
        </div>
      </div>
      <div className="footer">footer</div>
    </>
  );
}

export default Landingpage;
