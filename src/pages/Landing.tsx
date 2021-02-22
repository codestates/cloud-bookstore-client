import React from 'react';
import '../css/Landing.css';

function Landing() {
  return (
    <>
      <div className="landingHeader">
        <div className="landingMenuBar">menu</div>
        <div className="landingHeaderContent">header-content</div>
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

export default Landing;
