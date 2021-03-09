import React from 'react';
import { RouteComponentProps } from 'react-router';
import '../myCategoryCSS/MyWorksList.css';

interface CurrentNewNovelProps {
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
}
interface UserWorksDataProps extends RouteComponentProps {
  handleAxiosMyNovelEpisodeList: (novelId: number) => void;
  handleMyCurrentNewNovel: (data: CurrentNewNovelProps) => void;
  userWorksData: {
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
}

// const getToday = (): string => {
//   const date: Date = new Date();
//   const year: number = date.getFullYear();
//   const month: string = ('0' + (1 + date.getMonth())).slice(-2);
//   const day: string = ('0' + date.getDate()).slice(-2);
//   return `${year}-${month}-${day}`;
// };

const MyWorksList: React.FC<UserWorksDataProps> = (
  props: UserWorksDataProps,
) => {
  // const refinedupdatedAt: string = props.userWorksData.updatedAt.slice(0, 10);

  const sliceTitle: string = props.userWorksData.title.slice(0, 16);
  const sliceAuthor: string = props.userWorksData.author.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.userWorksData.title.length > 16) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.userWorksData.author.length > 12) return true;
    else return false;
  };
  return (
    <div className="MyWorksList">
      <div
        role="button"
        aria-hidden="true"
        className="Pointer"
        onClick={() => {
          props.handleAxiosMyNovelEpisodeList(props.userWorksData.id);
          props.handleMyCurrentNewNovel(props.userWorksData);
          props.history.push(
            `/main/mypage/MyNovelEpisodeList/${props.userWorksData.id}`,
          );
        }}
      >
        <div
          className="MyWorksThumbnail"
          style={{
            backgroundImage: `url(${props.userWorksData.thumbnail})`,
          }}
        />
        <div className="MyWorkshomeNovelListContentWrapper">
          <div className="MyWorksCountCloud">
            <div className="MyWorkscountCloudText">
              누적구름 {props.userWorksData.cloud}
            </div>
            <div className="MyWorkscountCloudImg" />
          </div>
          <div className="MyWorksNovelListSubjectWrapper">
            <div className="MyWorksHomeNovelListSubject">
              {getBoolTitleLength()
                ? `${sliceTitle} ...`
                : props.userWorksData.title}
            </div>
          </div>
          <div className="MyWorksHomeNovelListAuthorFavWrapper">
            <div className="MyWorksNovelListAuthor">
              {getBoolAuthorLength()
                ? `${sliceAuthor} ...`
                : props.userWorksData.author}
            </div>
            <div className="MyWorksNovelListFavorite">
              관심 {props.userWorksData.userLike}
            </div>
          </div>
        </div>
      </div>
      <div className="MygoNovelEpisode">회차쓰기</div>
    </div>
  );
};

export default MyWorksList;
