import React from 'react';
import './BestNovel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BestNovel: React.FC = () => {
  AOS.init();
  return (
    <div className="wholeBestNovelWrapper">
      <div className="bestNovelText">
        <p>독자들이 선택한</p>
        <p>최고의 작품들</p>
        <p>각 장르별로 평균 구름수가 가장 많은 작품들 입니다.</p>
      </div>
      <div
        id="bestNovelContainer1"
        className="bestNovelContainer"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div id="bestNovelThumb1" className="bestNovelThumb"></div>
        <div className="bestNovelTitle">완벽한 부부는 없다</div>
        <div className="bestNovelDescription">
          결혼기념일 당일, 남편이 정략결혼의 끝을 알렸다. “이혼해, 우리.”
          오랫동안 건우를 짝사랑해 온 연화는 그의 회사로 찾아가 이혼을 거절하고
          돌아가던 중 사고를 당하고 만다. “누구세요.” 이혼을 피하고 싶던 연화는
          기억을 잃은 척 연기하는데…… 갑자기 남편이 변했다? “같이 씻어.” “같이
          씻어요?” “그래왔으니까, 매번.” 우리가 언제? 이 남자 도대체 무슨
          꿍꿍이야! 과연, 불완전한 우리가 완벽한 부부가 될 수 있을까?
        </div>
      </div>
      <div
        id="bestNovelContainer2"
        className="bestNovelContainer"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="300"
      >
        <div id="bestNovelThumb2" className="bestNovelThumb"></div>
        <div className="bestNovelTitle">MANSLAYR [맨슬레이어]</div>
        <div className="bestNovelDescription">
          여동생 한서아를 위해 살인죄를 쓰게 된 이지훈은 결국 감옥에서
          사형당한다. 하지만 그가 죽은 후 마지막 기회를 준다며 GM이 나타나게
          되는데…. &#34;내가 만든 게임에서 이기면 소원 3가지를 이루어 줄게, 가령
          다시 살아난다든지 여동생이 괴롭힘 받지 않는 그런 소원 말이야&#34;
          &#34;그래, 어차피 이기면 되는 거잖아? 내가 전부 엎어버리겠어!&#34;
          매주 일요일 오후 6시에 연재 됩니다.
        </div>
      </div>
      <div
        id="bestNovelContainer3"
        className="bestNovelContainer"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="500"
      >
        <div id="bestNovelThumb3" className="bestNovelThumb"></div>
        <div className="bestNovelTitle">H - Dragon</div>
        <div className="bestNovelDescription">
          기억도 잘 나지 않는 중학생 시절, 엄마와 사별하고 강해지려고 했던
          각오가 무색하게 아버지가 몸져 누우셨다. 고등학생이 짊어지기 버거운
          삶의 무게에 병원 옥상에서 투신자살을 택하는데...... 그런데 어라?
          정신차려보니 아무것도 안보이는 캄캄한 곳─용의 알이라고?! 감옥에서 단
          둘이 은밀한 시간을 보내거나, 알몸으로 거리 배회, 주인님과 노예
          플레이...... 신에게 부여받은 마지막 기회. 아빠를 구할 수 있다면
          망설이지 않겠어. 애들은 저리가라. 검열 없는
          단편막장코믹액션배틀판타지! 에이치 드래곤, 지금 시작합니다.
        </div>
      </div>
    </div>
  );
};

export default BestNovel;
