import React from 'react';
import '../css/Landingpage.css';

function Landingpage() {
  return (
    <>
      <div className="greyLine1"></div>
      <div className="greyLine2"></div>
      <div className="greyLine3"></div>
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
        <div className="landingBestNovel">
          <div className="landingBestNovelText">
            <div className="LBNTbold">
              <p>독자들이 선택한</p>
              <p>최고의 작품들</p>
            </div>
            <div className="LBNTlight">
              <p>각 장르별로 누적 구름수가 가장 많은</p>
              <p>작품들 입니다.</p>
            </div>
          </div>
          <div className="LBNTbestNovelList">
            <div className="LBNT1">
              <div className="LBNT1-thumb">
                <div className="LBNT1-stamp"></div>
              </div>
              <div className="LBNT1-text">
                <p className="LBNT1-subject">완벽한 부부는 없다</p>
                <p className="LBNT1-description">
                  결혼기념일 당일, 남편이 정략결혼의 끝을 알렸다. “이혼해,
                  우리.” 오랫동안 건우를 짝사랑해 온 연화는 그의 회사로 찾아가
                  이혼을 거절하고 돌아가던 중 사고를 당하고 만다. “누구세요.”
                  이혼을 피하고 싶던 연화는 기억을 잃은 척 연기하는데…… 갑자기
                  남편이 변했다? “같이 씻어.” “같이 씻어요?” “그래왔으니까,
                  매번.” 우리가 언제? 이 남자 도대체 무슨 꿍꿍이야! 과연,
                  불완전한 우리가 완벽한 부부가 될 수 있을까?
                </p>
              </div>
            </div>
            <div className="LBNT2">
              <div className="LBNT2-thumb">
                <div className="LBNT2-stamp"></div>
              </div>
              <div className="LBNT2-text">
                <p className="LBNT2-subject">MANSLAYR [맨슬레이어]</p>
                <p className="LBNT2-description">
                  여동생 한서아를 위해 살인죄를 쓰게 된 이지훈은 결국 감옥에서
                  사형당한다. 하지만 그가 죽은 후 마지막 기회를 준다며 GM이
                  나타나게 되는데… 내가 만든 게임에서 이기면 소원 3가지를 이루어
                  줄게, 가령 다시 살아난다든지 여동생이 괴롭힘 받지 않는 그런
                  소원 말이야. 그래, 어차피 이기면 되는 거잖아? 내가 전부
                  엎어버리겠어! 매주 일요일 오후 6시에 연재 됩니다.
                </p>
              </div>
            </div>
            <div className="LBNT3">
              <div className="LBNT3-thumb">
                <div className="LBNT3-stamp"></div>
              </div>
              <div className="LBNT3-text">
                <p className="LBNT3-subject">H - Dragon</p>
                <p className="LBNT3-description">
                  기억도 잘 나지 않는 중학생 시절, 엄마와 사별하고 강해지려고
                  했던 각오가 무색하게 아버지가 몸져 누우셨다. 고등학생이
                  짊어지기 버거운 삶의 무게에 병원 옥상에서 투신자살을
                  택하는데...... 그런데 어라? 정신차려보니 아무것도 안보이는
                  캄캄한 곳─용의 알이라고?! 감옥에서 단 둘이 은밀한 시간을
                  보내거나, 알몸으로 거리 배회, 주인님과 노예 플레이......
                  신에게 부여받은 마지막 기회.
                </p>
              </div>
            </div>
          </div>
        </div>
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
