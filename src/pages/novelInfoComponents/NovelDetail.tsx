import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RouteComponentProps } from 'react-router-dom';
import './NovelDetail.css';
import { MdModeComment, MdStars, MdShare } from 'react-icons/md';
import axios from 'axios';
import ShareModal from '../../pages/modal/ShareModal';

interface novelDetailProps extends RouteComponentProps {
  toggleUserLike: () => void;
  handleNovelLikesCount: (userLike: number) => void;
  handleAxiosSpecificEpisodeData: (novelId: number, episodeId: number) => void;
  handleClickedSpecificEpisode: (parameter: {
    episodeId: number;
    novelId: number;
  }) => void;
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
    userHistory: any;
    userLike: boolean;
    userPurchases: {
      episodeId: number;
    }[];
  };
}

interface novelLikeCountProps {
  data: {
    userLike: number;
  };
}

const NovelDetail: React.FC<novelDetailProps> = (props: novelDetailProps) => {
  const [shareModal, setShareModal] = useState<boolean>(false);
  const toggleShareModal = () => {
    setShareModal(!shareModal);
  };

  const handleUserLike = () => {
    axios
      .get(
        `https://server.cloud-bookstore.com/novel/like/${props.clickedNovelData.data.id}`,
      )
      .then((data: novelLikeCountProps) =>
        props.handleNovelLikesCount(data.data.userLike),
      )
      .then(() => props.toggleUserLike());
  };

  const handleUserDislike = () => {
    axios
      .get(
        `https://server.cloud-bookstore.com/novel/like/${props.clickedNovelData.data.id}`,
      )
      .then((data: novelLikeCountProps) =>
        props.handleNovelLikesCount(data.data.userLike),
      )
      .then(() => props.toggleUserLike());
  };

  const firstEpisodeId = props.clickedNovelData.episodes.filter(
    (data) => data.episodeNum === 1,
  );

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
            <Link
              to="novelCommentsList"
              spy={true}
              smooth={true}
              className="aTagComment"
            >
              <MdModeComment />
              <div className="novelCommentsButton">
                {props.clickedNovelData.comments.length}
              </div>
            </Link>
          </div>
          <div>
            {props.clickedNovelData.userLike ? (
              <>
                <MdStars
                  style={{ color: '#2b79fe' }}
                  onClick={() => handleUserDislike()}
                />
                <div
                  role="presentation"
                  className="novelLikesButton LikePosition"
                  onClick={() => handleUserDislike()}
                >
                  관심
                </div>
              </>
            ) : (
              <>
                <MdStars onClick={() => handleUserLike()} />
                <div
                  role="presentation"
                  className="novelLikesButton LikePosition"
                  onClick={() => handleUserLike()}
                >
                  관심
                </div>
              </>
            )}
          </div>
          <div>
            <MdShare onClick={toggleShareModal} />
            <div className="novelShareButton">공유</div>
          </div>
        </div>
      </div>
      <div className="novelDetailGreyLine">
        {shareModal === true ? <ShareModal /> : <></>}
      </div>
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
          <div
            className="firstEpisodeButton"
            role="presentation"
            onClick={() => {
              props.handleClickedSpecificEpisode({
                episodeId: firstEpisodeId[0].id,
                novelId: props.clickedNovelData.data.id,
              });
            }}
          >
            첫 화 보기
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelDetail;
