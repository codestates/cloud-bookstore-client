import React, { Dispatch, SetStateAction } from 'react';
import MyNovelEpisodeCardList from './MyNovelEpisodeCardList';
import './MyNovelEpisodeListWrapper.css';
// import { RouteComponentProps } from 'react-router-dom';

interface MyNovelEpisodeListProps {
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
  myNovelEpisodeList: {
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
  novelTitle: string;
}

const MyNovelEpisodeListWrapper: React.FC<MyNovelEpisodeListProps> = (
  props: MyNovelEpisodeListProps,
) => {
  return (
    <div className="EpNovelWrapper">
      <div className="EpNovelInnerWrapper">
        {props.myNovelEpisodeList.map((data) => (
          <MyNovelEpisodeCardList
            key={data.id}
            episodes={data}
            handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
            handleAxiosMyNovelEpisodeList={props.handleAxiosMyNovelEpisodeList}
            setSpecificEpisodeData={props.setSpecificEpisodeData}
            handleAxiosMyPage={props.handleAxiosMyPage}
            novelTitle={props.novelTitle}
          />
        ))}
        {/* <MyNovelEpisodeCardList MyNovelEpisodeListProps={props.episodes} /> */}
      </div>
    </div>
  );
};
export default MyNovelEpisodeListWrapper;
