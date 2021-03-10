import React, { Dispatch, SetStateAction } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './MyNovelEpisodeList.css';
import MyNovelEpisodeListWrapper from './MyNovelEpisodeListComponent/MyNovelEpisodeListWrapper';
import axios from 'axios';

interface MyNovelEpisodeListProps extends RouteComponentProps {
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
  myCurrentNewNovel: {
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

const MyNovelEpisodeList: React.FC<MyNovelEpisodeListProps> = (
  props: MyNovelEpisodeListProps,
) => {
  const deleteEpisode = async () => {
    await axios
      .delete(
        `https://server.cloud-bookstore.com/mypage/delete/novel/${props.myCurrentNewNovel.id}`,
      )
      .then(() => props.handleAxiosMyPage());
  };
  return (
    <div className="MyNovelEpisodeListWrapper">
      {props.myNovelEpisodeList.length === 0 ? (
        <>
          <div className="MyNovelEpisodeListHeader">
            <div className="MyNovelEpisodeListTitle">
              {props.myCurrentNewNovel.title}
            </div>
          </div>
          <div className="MyNovelEpisodeListBoxLine" />
          <div className="MyNovelEpisodeListDetailInfo">
            <div
              className="NovelEpisodeListThumbnail"
              style={{
                backgroundImage: `url(${props.myCurrentNewNovel.thumbnail})`,
              }}
            />
            <div className="NovelEpisodeListInfoWrapper">
              <div className="NovelEpisodeListDescription">
                {props.myCurrentNewNovel.description}
              </div>
              <div className="NovelEpisodeListBtnWrapper">
                <div
                  className="NovelEpisodeListButton"
                  role="button"
                  aria-hidden="true"
                  onClick={() =>
                    props.history.push(
                      `/main/mypage/editNovel/${props.myCurrentNewNovel.id}`,
                    )
                  }
                >
                  작품 정보 수정
                </div>
                <div
                  className="NovelEpisodeListSecondButton"
                  role="button"
                  aria-hidden="true"
                  onClick={() => deleteEpisode()}
                >
                  작품 삭제
                </div>
              </div>
            </div>
          </div>
          <div className="emptyMyNovelEpisodeListText">내 작품 회차</div>
          <div className="MyNovelEpisodeListSecondBoxLine" />
          <div className="myNovelEpisodeListEmptyBox">
            <div className="myNovelEpisodeListBoxGrid">
              <div className="myNovelEpisodeEmptyTitle">
                등록된 회차가 없습니다.
              </div>
              <div
                className="myNovelEpisodeEmptyEmptyBtn"
                role="button"
                aria-hidden="true"
                onClick={() =>
                  props.history.push(
                    `/main/mypage/myNovelEpisodeWrite/${props.myCurrentNewNovel.id}`,
                  )
                }
              >
                회차쓰기
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="MyNovelEpisodeListHeader">
            <div className="MyNovelEpisodeListTitle">
              {props.myCurrentNewNovel.title}
            </div>
          </div>
          <div className="MyNovelEpisodeListBoxLine" />
          <div className="MyNovelEpisodeListDetailInfo">
            <div
              className="NovelEpisodeListThumbnail"
              style={{
                backgroundImage: `url(${props.myCurrentNewNovel.thumbnail})`,
              }}
            />
            <div className="NovelEpisodeListInfoWrapper">
              <div className="NovelEpisodeListDescription">
                {props.myCurrentNewNovel.description}
              </div>
              <div className="NovelEpisodeListBtnWrapper">
                <div
                  className="NovelEpisodeListButton"
                  role="button"
                  aria-hidden="true"
                  onClick={() =>
                    props.history.push(
                      `/main/mypage/editNovel/${props.myCurrentNewNovel.id}`,
                    )
                  }
                >
                  작품 정보 수정
                </div>
                <div
                  className="NovelEpisodeListSecondButton"
                  role="button"
                  aria-hidden="true"
                  onClick={() => deleteEpisode()}
                >
                  작품 삭제
                </div>
              </div>
            </div>
          </div>
          <div className="NovelEpisodeWrite">
            <div className="myNovelEpisodeListText">내 작품 회차</div>
            <div
              className="EpWriteBtn"
              role="button"
              aria-hidden="true"
              onClick={() =>
                props.history.push(
                  `/main/mypage/myNovelEpisodeWrite/${props.myCurrentNewNovel.id}`,
                )
              }
            >
              회차쓰기
            </div>
          </div>

          <div className="MyNovelEpisodeListSecondBoxLine" />
          <MyNovelEpisodeListWrapper
            novelTitle={props.myCurrentNewNovel.title}
            setSpecificEpisodeData={props.setSpecificEpisodeData}
            handleAxiosMyNovelEpisodeList={props.handleAxiosMyNovelEpisodeList}
            myNovelEpisodeList={props.myNovelEpisodeList}
          />
        </>
      )}
    </div>
  );
};

export default withRouter(MyNovelEpisodeList);
