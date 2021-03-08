/* eslint-disable no-console */
import React from 'react';
import MyNovelEpisodeCardList from './MyNovelEpisodeCardList';
import './MyNovelEpisodeListWrapper.css';
// import { RouteComponentProps } from 'react-router-dom';

interface MyNovelEpisodeListProps {
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
}

const MyNovelEpisodeListWrapper: React.FC<MyNovelEpisodeListProps> = (
  props: MyNovelEpisodeListProps,
) => {
  return (
    <div className="EpNovelWrapper">
      <div className="EpNovelInnerWrapper">
        {props.myNovelEpisodeList.map((data) => (
          <MyNovelEpisodeCardList key={data.id} episodes={data} />
        ))}
        {/* <MyNovelEpisodeCardList MyNovelEpisodeListProps={props.episodes} /> */}
      </div>
    </div>
  );
};
export default MyNovelEpisodeListWrapper;
