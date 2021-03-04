import React from 'react';
import './NovelDetail.css';
import { MdModeComment, MdStars, MdShare } from 'react-icons/md';

const NovelDetail: React.FC = () => {
  return (
    <div className="novelDetailWrapper">
      <div className="novelHeader">
        <div>
          <div className="novelDetailTitle">신혼부부 생활 백서</div>
          <div className="novelDetailAuthor">작가 호호아줌마</div>
        </div>
        <div className="novelHeaderButtons">
          <div>
            <MdModeComment />
            <div className="novelCommentsButton">###</div>
          </div>
          <div>
            <MdStars />
            <div className="novelLikesButton">관심</div>
          </div>
          <div>
            <MdShare />
            <div className="novelShareButton">공유</div>
          </div>
        </div>
      </div>
      <div className="novelDetailGreyLine"></div>
      <div className="novelDetailInfo">
        <div className="novelDetailThumbnail" />
        <div>
          <div className="novelDetailLikes">
            <div>관심 1만</div>
            <div className="novelDetailCloud">
              누적구름
              <div className="novelDetailCloudSVG" />
            </div>
          </div>
          <div className="novelDetailDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            rerum accusantium molestias expedita aut. Molestias, laborum
            consequuntur odio sapiente aperiam iusto sunt hic. Libero sapiente
            quasi, blanditiis aliquam et repellat?
          </div>
          <div className="firstEpisodeButton">첫 화 보기</div>
        </div>
      </div>
    </div>
  );
};

export default NovelDetail;
