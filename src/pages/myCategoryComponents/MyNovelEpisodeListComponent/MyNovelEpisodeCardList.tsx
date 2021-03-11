import React, { Dispatch, SetStateAction } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './MyNovelEpisodeCardList.css';
import axios from 'axios';

interface MyNovelEpisodeProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (data: number) => void;
  handleAxiosMyNovelEpisodeList: (novelId: number) => void;
  handleAxiosMyPage: () => void;
  setSpecificEpisodeData: Dispatch<
    SetStateAction<{
      episode: {
        id: number;
        episodeNum: number;
        novelId: number;
        title: string;
        text: string;
        thumbnail: string;
        cloud: number;
        createdAt: string;
        updatedAt: string;
      };
      novelTitle: { title: string };
    }>
  >;
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
  };
  novelTitle: string;
}

const MyNovelEpisodeCardList: React.FC<MyNovelEpisodeProps> = (
  props: MyNovelEpisodeProps,
) => {
  const sliceTitle: string = props.episodes.title.slice(0, 9);
  const getBoolTitleLength = (): boolean => {
    if (props.episodes.title.length > 9) return true;
    else return false;
  };

  const handleEditMyEpisode = (): void => {
    props.setSpecificEpisodeData({
      episode: {
        id: props.episodes.id,
        episodeNum: props.episodes.episodeNum,
        novelId: props.episodes.novelId,
        title: props.episodes.title,
        text: props.episodes.text,
        thumbnail: props.episodes.thumbnail,
        cloud: props.episodes.cloud,
        createdAt: props.episodes.createdAt,
        updatedAt: props.episodes.updatedAt,
      },
      novelTitle: { title: props.novelTitle },
    });
    props.history.push('/main/mypage/editEpisode/${props.episodes.id}');
  };

  const handleDeleteMyEpisode = (): void => {
    axios
      .delete(
        `https://server.cloud-bookstore.com/mypage/delete/episode/${props.episodes.novelId}/${props.episodes.id}`,
      )
      .then(() => {
        props.handleAxiosClickedNovelData(props.episodes.novelId);
        props.handleAxiosMyPage();
        props.handleAxiosMyNovelEpisodeList(props.episodes.novelId);
        props.history.push(
          '/main/mypage/myNovelEpisodeList/${props.episodes.novelId}',
        );
      });
  };

  return (
    <div className="EpNovelList">
      <div
        className="EpThumbnail"
        style={{
          backgroundImage: `url(${props.episodes.thumbnail})`,
        }}
      ></div>
      <div className="EpNovelListContentWrapper">
        <div className="EpCountCloud">
          <div className="EpCountCloudText">
            누적구름 {props.episodes.cloud}
          </div>
          <div className="EpCountCloudImg" />
          <div
            role="presentation"
            className="EpNovelBtn"
            onClick={handleEditMyEpisode}
          >
            수정
          </div>
          <div
            role="presentation"
            className="EpNovelDeBtn"
            onClick={handleDeleteMyEpisode}
          >
            삭제
          </div>
        </div>
        <div className="EpNovelListSubjectWrapper">
          <div className="HomeNovelListSubject">
            {getBoolTitleLength() ? `${sliceTitle} ...` : props.episodes.title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="EpNovelListAuthor">
            {props.episodes.createdAt.slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MyNovelEpisodeCardList);
