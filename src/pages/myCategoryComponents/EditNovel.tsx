/* eslint-disable */
import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import './MakeNovel.css';
interface handleAxiosMyPageProps extends RouteComponentProps {
  handleAxiosMyPage: () => void;
  handleMyCurrentNewNovel: (data: CurrentNewNovelProps) => void;
}

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

interface OptionType {
  value: number;
  label: string;
}
interface State {
  selectedOption: OptionType;
  selectedImage: string;
  novelTitle: string;
  novelDescription: string;
  imgToggle: number;
}

const options: OptionType[] = [
  { value: 0, label: '장르선택' },
  { value: 1, label: '판타지' },
  { value: 2, label: '무협' },
  { value: 3, label: '로맨스' },
];

class EditNovel extends Component<handleAxiosMyPageProps, State> {
  constructor(props: handleAxiosMyPageProps) {
    super(props);
    this.state = {
      selectedOption: options[0],
      selectedImage: '',
      novelTitle: '',
      novelDescription: '',
      imgToggle: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleNovelTitleChange = this.handleNovelTitleChange.bind(this);
    this.handleNovelDescriptionChange = this.handleNovelDescriptionChange.bind(
      this,
    );
    this.handleWriteNovel = this.handleWriteNovel.bind(this);
    // this.handleImgToggle = this.handleImgToggle.bind(this);
  }

  handleWriteNovel = () => {
    axios
      .post('https://server.cloud-bookstore.com/mypage/write/novel', {
        thumbnail: this.state.selectedImage,
        description: this.state.novelDescription,
        category: this.state.selectedOption.value,
        title: this.state.novelTitle,
      })
      .then(async (data) => {
        await this.props.handleAxiosMyPage();
        await this.props.handleMyCurrentNewNovel(data.data.currentNovel);
        await this.props.history.push(
          `/main/mypage/MyNovelEpisodeList/${data.data.currentNovel.id}`,
        );
      });
  };

  handleChange = (option: any): void => {
    this.setState({
      selectedOption: option,
    });
  };

  handleImageChange = (e: any): void => {
    this.setState({
      selectedImage: e,
    });
  };

  handleNovelTitleChange = (e: any): void => {
    this.setState({
      novelTitle: e.target.value,
    });
  };

  handleNovelDescriptionChange = (e: any): void => {
    this.setState({
      novelDescription: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="MakeNovelWrapper">
          <div className="MakeNovelHeader">
            <div className="MakeNovelTitle">작품 수정 하기</div>
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
          <div className="aline">
            <input
              placeholder="작품제목"
              className="TitleTextBox"
              onChange={this.handleNovelTitleChange}
            ></input>
            <div className="textLine">
              장르
              <Select
                className="position"
                defaultValue={this.state.selectedOption}
                onChange={(option) => this.handleChange(option)}
                options={options}
              />
            </div>
          </div>
          <div className="BoxLineSecond" />
          <div className="textLineImg">
            <div>표지 이미지</div>
            <div>
              {this.state.selectedOption.value === 0 ? (
                <div></div>
              ) : this.state.selectedOption.value === 1 ? (
                <div className="CoverImage">
                  <div className="ImageWrapper">
                    {this.state.imgToggle === 1 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 1 });
                          this.handleImageChange('1');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 2 ? (
                      <div>
                        <div
                          role="button"
                          aria-hidden="true"
                          className="SelcetCoverImageBox"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 2 });
                          this.handleImageChange('2');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 3 ? (
                      <div>
                        <div
                          role="button"
                          aria-hidden="true"
                          className="SelcetCoverImageBox"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 3 });
                          this.handleImageChange('3');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 4 ? (
                      <div>
                        <div
                          role="button"
                          aria-hidden="true"
                          className="SelcetCoverImageBox"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 4 });
                          this.handleImageChange('4');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 5 ? (
                      <div>
                        <div
                          role="button"
                          aria-hidden="true"
                          className="SelcetCoverImageBox"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 5 });
                          this.handleImageChange('5');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 6 ? (
                      <div>
                        <div
                          role="button"
                          aria-hidden="true"
                          className="SelcetCoverImageBox"
                          onClick={() => {
                            this.setState({ imgToggle: 0 });
                            this.handleImageChange('');
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 6 });
                          this.handleImageChange('6');
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ) : this.state.selectedOption.value === 2 ? (
                <div className="CoverImage">
                  <div className="ImageWrapper">
                    {this.state.imgToggle === 7 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 7 });
                          this.handleImageChange('7');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 8 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 8 });
                          this.handleImageChange('8');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 9 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 9 });
                          this.handleImageChange('9');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 10 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 10 });
                          this.handleImageChange('10');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 11 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 11 });
                          this.handleImageChange('11');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 12 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 12 });
                          this.handleImageChange('12');
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ) : this.state.selectedOption.value === 3 ? (
                <div className="CoverImage">
                  <div className="ImageWrapper">
                    {this.state.imgToggle === 13 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 13 });
                          this.handleImageChange('13');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 14 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 14 });
                          this.handleImageChange('14');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 15 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 15 });
                          this.handleImageChange('15');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 16 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 16 });
                          this.handleImageChange('16');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 17 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 17 });
                          this.handleImageChange('17');
                        }}
                      ></div>
                    )}
                    {this.state.imgToggle === 18 ? (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="SelcetCoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 0 });
                          this.handleImageChange('');
                        }}
                      ></div>
                    ) : (
                      <div
                        role="button"
                        aria-hidden="true"
                        className="CoverImageBox"
                        onClick={() => {
                          this.setState({ imgToggle: 18 });
                          this.handleImageChange('18');
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ) : (
                <div>표지이미지</div>
              )}
            </div>
          </div>
          <div className="BoxLineSecond" />
          <textarea
            placeholder="작품내용"
            onChange={this.handleNovelDescriptionChange}
            maxLength={250}
          ></textarea>
          <span className="novelDescriptionNewText">
            {this.state.novelDescription.length}/250
          </span>
          <div className="BoxLineSecond" />
          <div className="saveBtn" onClick={this.handleWriteNovel}>
            저장
          </div>
          <Link to="myNovelList" className="cancelBtn">
            취소
          </Link>
        </div>
      </>
    );
  }
}

export default withRouter(EditNovel);
