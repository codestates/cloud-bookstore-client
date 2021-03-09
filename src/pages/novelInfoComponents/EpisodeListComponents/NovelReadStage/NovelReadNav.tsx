import React from 'react';
import './NovelReadNav.css';
import { RouteComponentProps } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { HiHome } from 'react-icons/hi';
import { FaList } from 'react-icons/fa';

interface NovelReadNavProps extends RouteComponentProps {
  specificEpisodeData: {
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
    novelTitle: {
      title: string;
    };
  };
}

const UserNav: React.FC<NovelReadNavProps> = (props: NovelReadNavProps) => {
  return (
    <IconContext.Provider value={{ size: '1.4em', color: '#464646' }}>
      <div className="WholeUserNav">
        <div className="userNavGreyUnderLine">
          <div className="UserNavInnerWrapper">
            <div className="NovelReadNavLeftBox">
              <div
                role="presentation"
                className="userNavLogo"
                onClick={() => {
                  props.history.push('/main/home');
                }}
              />
              <div className="NovelReadTitle">
                {props.specificEpisodeData.novelTitle.title}
              </div>
              <div className="NovelReadEpisodeTitle">
                {props.specificEpisodeData.episode.episodeNum}화{' '}
                {props.specificEpisodeData.episode.title}
              </div>
            </div>
            <div className="NovelReadNavRightBox">
              <div
                className="goToHomeBtn"
                role="presentation"
                onClick={() => {
                  props.history.push('/main/home');
                }}
              >
                <HiHome />
                <div className="goToHomeText">홈</div>
              </div>
              <div
                className="goToListBtn"
                role="presentation"
                onClick={() => {
                  props.history.push(
                    `/main/novel/${props.specificEpisodeData.episode.novelId}`,
                  );
                }}
              >
                <FaList />
                <div className="goToListText">목록</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default UserNav;
