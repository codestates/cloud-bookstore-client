import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './WriteNovelEpisode.css';

interface myCurrentNewNovelProps extends RouteComponentProps {
  handleAxiosMyNovelEpisodeList: (novelId: number) => void;
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
}

interface State {
  episodeTitle: string;
  imgToggle: number;
  selectedImage: string;
  novelEpisode: string;
  complete: boolean;
  episodeNum: number;
}

const fantasyThumbnails: string[] = [
  'https://user-images.githubusercontent.com/70982342/110403401-61ee1080-80c0-11eb-8458-4e24791b8667.png',
  'https://user-images.githubusercontent.com/70982342/110403406-63b7d400-80c0-11eb-8d3a-9723ee736002.png',
  'https://user-images.githubusercontent.com/70982342/110403410-64506a80-80c0-11eb-8a15-32b002795ed4.png',
  'https://user-images.githubusercontent.com/70982342/110403412-64e90100-80c0-11eb-8ab1-81ca81930f3f.png',
  'https://user-images.githubusercontent.com/70982342/110403414-661a2e00-80c0-11eb-88a6-7f13eb13a8d4.png',
  'https://user-images.githubusercontent.com/70982342/110403416-66b2c480-80c0-11eb-84a6-47672b5cc429.png',
];

const martialArtsThumbnails: string[] = [
  'https://user-images.githubusercontent.com/70982342/110403843-2869d500-80c1-11eb-8c2e-9ea6ccbf011e.png',
  'https://user-images.githubusercontent.com/70982342/110403847-2a339880-80c1-11eb-8c20-9d536a575377.png',
  'https://user-images.githubusercontent.com/70982342/110403848-2a339880-80c1-11eb-98fc-f2acb17f2379.png',
  'https://user-images.githubusercontent.com/70982342/110403850-2acc2f00-80c1-11eb-8341-463c08f153a4.png',
  'https://user-images.githubusercontent.com/70982342/110403851-2b64c580-80c1-11eb-9636-a4343348e273.png',
  'https://user-images.githubusercontent.com/70982342/110403853-2b64c580-80c1-11eb-9052-cf8557732d1d.png',
];

const romanceThumbnails: string[] = [
  'https://user-images.githubusercontent.com/70982342/110404054-85658b00-80c1-11eb-940e-ead57bb015bf.png',
  'https://user-images.githubusercontent.com/70982342/110404057-872f4e80-80c1-11eb-9224-da333ba17a8b.png',
  'https://user-images.githubusercontent.com/70982342/110404059-88607b80-80c1-11eb-8306-62edab87c68c.png',
  'https://user-images.githubusercontent.com/70982342/110404063-88f91200-80c1-11eb-99d8-18359208b629.png',
  'https://user-images.githubusercontent.com/70982342/110404066-8991a880-80c1-11eb-9e05-dbe452671880.png',
  'https://user-images.githubusercontent.com/70982342/110404067-8a2a3f00-80c1-11eb-80cb-4924458395af.png',
];

class WriteNovelEpisode extends Component<myCurrentNewNovelProps, State> {
  constructor(props: myCurrentNewNovelProps) {
    super(props);
    this.state = {
      episodeTitle: '',
      imgToggle: 0,
      selectedImage: '',
      novelEpisode: '',
      complete: false,
      episodeNum: 0,
    };
    this.handleEpisodeTitleChange = this.handleEpisodeTitleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleCompete = this.handleCompete.bind(this);
    this.handleEpisodeNumChange = this.handleEpisodeNumChange.bind(this);
  }

  handleEpisodeTitleChange = (e: any): void => {
    this.setState({
      episodeTitle: e.target.value,
    });
  };

  handleImageChange = (e: any): void => {
    this.setState({
      selectedImage: e,
    });
  };
  handleNovelEpisodeChange = (e: any): void => {
    this.setState({
      novelEpisode: e.target.value,
    });
  };
  handleEpisodeNumChange = (e: any): void => {
    this.setState({
      episodeNum: +e.target.value,
    });
  };

  handleCompete = (): void => {
    if (!this.state.complete) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };

  handleEpisodeWriteNovel = () => {
    axios
      .post('https://server.cloud-bookstore.com/mypage/write/episode', {
        complete: this.state.complete,
        novelId: this.props.myCurrentNewNovel.id,
        episodeNum: this.state.episodeNum,
        thumbnail: this.state.selectedImage,
        text: this.state.novelEpisode,
        title: this.state.episodeTitle,
      })
      .then(() => {
        this.props.handleAxiosMyNovelEpisodeList(
          this.props.myCurrentNewNovel.id,
        );
        this.props.history.push(
          `/main/mypage/myNovelEpisodeList/${this.props.myCurrentNewNovel.id}`,
        );
      });
  };

  render() {
    return (
      <>
        <div className="WriteNovelWrapper">
          <div className="MakeNovelHeader">
            <div className="MakeNovelTitle">
              {this.props.myCurrentNewNovel.title} 회차쓰기
            </div>
          </div>
          <div className="BoxLine" />
          <div className="SmallText">
            저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시물은
            이용약관 및 관련 법률에 의하여 제재를 받을 수 있습니다.
            <br /> 작품 및 회차 연재 시 운영원칙에 동의한 것으로 간주합니다.
            성인물, 폭력물 등 운영원칙에 위배되는 작품은 통보 없이 삭제될 수
            있습니다
          </div>
          <div className="BoxLineSecond" />
          <input
            placeholder="회차 넘버를 선택하세요"
            type="number"
            min={1}
            className="NumberBox"
            onChange={this.handleEpisodeNumChange}
          />
          <div className="BoxLineSecond" />
          <input
            placeholder="회차제목"
            className="TitleTextBox"
            onChange={this.handleEpisodeTitleChange}
          />
          <div className="BoxLineSecond" />
          <div className="textLineImg">
            <div>회차이미지</div>
            <div>
              {this.props.myCurrentNewNovel.category === 1 ? (
                <div className="CoverImage">
                  <div className="ImageWrapper">
                    {this.state.imgToggle === 1 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="FanSelcetCoverImageBox01"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="FanCoverImageBox01"
                        onClick={() => {
                          this.setState({ imgToggle: 1 });
                          this.handleImageChange(fantasyThumbnails[0]);
                        }}
                      ></div>
                    )}
                    <>
                      {this.state.imgToggle === 2 ? (
                        <div>
                          <div
                            role="presentation"
                            aria-hidden="true"
                            className="FanSelcetCoverImageBox02"
                            onClick={() => {
                              this.setState({ imgToggle: 0 });
                              this.handleImageChange('');
                            }}
                          ></div>
                        </div>
                      ) : (
                        <div
                          role="presentation"
                          aria-hidden="true"
                          className="FanCoverImageBox02"
                          onClick={() => {
                            this.setState({ imgToggle: 2 });
                            this.handleImageChange(fantasyThumbnails[1]);
                          }}
                        ></div>
                      )}
                    </>
                    {this.state.imgToggle === 3 ? (
                      <div>
                        <div
                          role="presentation"
                          aria-hidden="true"
                          className="FanSelcetCoverImageBox03"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="FanCoverImageBox03"
                        onClick={() => {
                          this.setState({ imgToggle: 3 });
                          this.handleImageChange(fantasyThumbnails[2]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 4 ? (
                      <div>
                        <div
                          role="presentation"
                          aria-hidden="true"
                          className="FanSelcetCoverImageBox04"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="FanCoverImageBox04"
                        onClick={() => {
                          this.setState({ imgToggle: 4 });
                          this.handleImageChange(fantasyThumbnails[3]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 5 ? (
                      <div>
                        <div
                          role="presentation"
                          aria-hidden="true"
                          className="FanSelcetCoverImageBox05"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="FanCoverImageBox05"
                        onClick={() => {
                          this.setState({ imgToggle: 5 });
                          this.handleImageChange(fantasyThumbnails[4]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 6 ? (
                      <div>
                        <div
                          role="presentation"
                          aria-hidden="true"
                          className="FanSelcetCoverImageBox06"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="FanCoverImageBox06"
                        onClick={() => {
                          this.setState({ imgToggle: 6 });
                          this.handleImageChange(fantasyThumbnails[5]);
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ) : this.props.myCurrentNewNovel.category === 2 ? (
                <div className="CoverImage">
                  <div className="ImageWrapper">
                    {this.state.imgToggle === 7 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaSelcetCoverImageBox01"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaCoverImageBox01"
                        onClick={() => {
                          this.setState({ imgToggle: 7 });
                          this.handleImageChange(martialArtsThumbnails[0]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 8 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaSelcetCoverImageBox02"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaCoverImageBox02"
                        onClick={() => {
                          this.setState({ imgToggle: 8 });
                          this.handleImageChange(martialArtsThumbnails[1]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 9 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaSelcetCoverImageBox03"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaCoverImageBox03"
                        onClick={() => {
                          this.setState({ imgToggle: 9 });
                          this.handleImageChange(martialArtsThumbnails[2]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 10 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaSelcetCoverImageBox04"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaCoverImageBox04"
                        onClick={() => {
                          this.setState({ imgToggle: 10 });
                          this.handleImageChange(martialArtsThumbnails[3]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 11 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaSelcetCoverImageBox05"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaCoverImageBox05"
                        onClick={() => {
                          this.setState({ imgToggle: 11 });
                          this.handleImageChange(martialArtsThumbnails[4]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 12 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaSelcetCoverImageBox06"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="MaCoverImageBox06"
                        onClick={() => {
                          this.setState({ imgToggle: 12 });
                          this.handleImageChange(martialArtsThumbnails[5]);
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ) : this.props.myCurrentNewNovel.category === 3 ? (
                <div className="CoverImage">
                  <div className="ImageWrapper">
                    {this.state.imgToggle === 13 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoSelcetCoverImageBox01"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoCoverImageBox01"
                        onClick={() => {
                          this.setState({ imgToggle: 13 });
                          this.handleImageChange(romanceThumbnails[0]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 14 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoSelcetCoverImageBox02"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoCoverImageBox02"
                        onClick={() => {
                          this.setState({ imgToggle: 14 });
                          this.handleImageChange(romanceThumbnails[1]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 15 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoSelcetCoverImageBox03"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoCoverImageBox03"
                        onClick={() => {
                          this.setState({ imgToggle: 15 });
                          this.handleImageChange(romanceThumbnails[2]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 16 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoSelcetCoverImageBox04"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoCoverImageBox04"
                        onClick={() => {
                          this.setState({ imgToggle: 16 });
                          this.handleImageChange(romanceThumbnails[3]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 17 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoSelcetCoverImageBox05"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoCoverImageBox05"
                        onClick={() => {
                          this.setState({ imgToggle: 17 });
                          this.handleImageChange(romanceThumbnails[4]);
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 18 ? (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoSelcetCoverImageBox06"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="presentation"
                        aria-hidden="true"
                        className="RoCoverImageBox06"
                        onClick={() => {
                          this.setState({ imgToggle: 18 });
                          this.handleImageChange(romanceThumbnails[5]);
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ) : (
                <div>이미지가 없습니다.</div>
              )}
            </div>
            <div className="BoxLineSecond" />
            <textarea
              placeholder="회차내용"
              onChange={this.handleNovelEpisodeChange}
              maxLength={1000}
            ></textarea>
            <span className="novelDescriptionNewText">
              {this.state.novelEpisode.length}/1000
            </span>
          </div>
          <div className="BoxLineSecond" />
          <div>
            {this.state.complete === true ? (
              <div
                role="presentation"
                aria-hidden="true"
                onClick={() => this.handleCompete()}
                className="roundBoxWrapper"
              >
                <div className="SroundBox"></div>
                <div className="Stext">완결</div>
              </div>
            ) : (
              <div
                role="presentation"
                aria-hidden="true"
                onClick={() => this.handleCompete()}
                className="roundBoxWrapper"
              >
                <div className="roundBox"></div>
                <div className="Ctext">완결</div>
              </div>
            )}
          </div>
          <div className="BoxLineSecond" />
          <div
            role="presentation"
            aria-hidden="true"
            className="saveBtn"
            onClick={() => this.handleEpisodeWriteNovel()}
          >
            저장
          </div>
          <div
            role="presentation"
            className="cancelBtn"
            onClick={() =>
              this.props.history.push(
                `/main/mypage/myNovelEpisodeList/${this.props.myCurrentNewNovel.id}`,
              )
            }
          >
            취소
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(WriteNovelEpisode);
