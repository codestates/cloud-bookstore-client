import React from 'react';
import './NovelDetail.css';
import { MdModeComment, MdStars, MdShare } from 'react-icons/md';

interface novelDetailProps {
  clickedNovelData: {
    data: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    };
    episodes: {
      id: number;
      episodeNum: number;
      novelId: number;
      title: string;
      text: string;
      thumbnail: string;
      cloud: number;
      createdAt: string;
      updatedAt: string;
    }[];
    comments: {
      id: number;
      nickname: string;
      comment: string;
      novelId: number;
      createdAt: string;
      updatedAt: string;
    }[];
    userHistory?: {
      id: number;
      episodeNum: number;
      title: string;
      thumbnail: string;
      cloud: number;
      novelEpisodeId: number;
      updatedAt: string;
    };
    userLike?: boolean;
    userPurchases?: {
      episodeId: number;
    }[];
  };
}

const NovelDetail: React.FC<novelDetailProps> = (props: novelDetailProps) => {
  return (
    <div className="novelDetailWrapper">
      <div className="novelHeader">
        <div>
          <div className="novelDetailTitle">
            {props.clickedNovelData.data.title}
          </div>
          <div className="novelDetailAuthor">
            {props.clickedNovelData.data.author}
          </div>
        </div>
        <div className="novelHeaderButtons">
          <div>
            <MdModeComment />
            <div className="novelCommentsButton">
              {props.clickedNovelData.comments.length}
            </div>
          </div>
          <div>
            {props.clickedNovelData.userLike ? (
              <>
                <MdStars style={{ color: '#2b79fe' }} />
                <div className="novelLikesButton">관심</div>
              </>
            ) : (
              <>
                <MdStars />
                <div className="novelLikesButton">관심</div>
              </>
            )}
          </div>
          <div>
            <MdShare />
            <div className="novelShareButton">공유</div>
          </div>
        </div>
      </div>
      <div className="novelDetailGreyLine"></div>
      <div className="novelDetailInfo">
        <div
          className="novelDetailThumbnail"
          style={{
            backgroundImage: `url(${props.clickedNovelData.data.thumbnail})`,
          }}
        />
        <div>
          <div className="novelDetailLikes">
            <div>관심 {props.clickedNovelData.data.userLike}</div>
            <div className="novelDetailCloud">
              누적구름 {props.clickedNovelData.data.cloud}
              <div className="novelDetailCloudSVG" />
            </div>
          </div>
          <div className="novelDetailDescription">
            {props.clickedNovelData.data.description}
          </div>
          <div className="firstEpisodeButton">첫 화 보기</div>
        </div>
      </div>
    </div>
  );
};

export default NovelDetail;
