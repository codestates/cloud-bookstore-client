/* eslint-disable */
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import './MakeNovel.css';
interface handleAxiosMyPageProps extends RouteComponentProps {
  handleAxiosMyPage: () => void;
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
}

const options: OptionType[] = [
  { value: 0, label: '장르선택' },
  { value: 1, label: '판타지' },
  { value: 2, label: '무협' },
  { value: 3, label: '로맨스' },
];

class MakeNovel extends Component<handleAxiosMyPageProps, State> {
  constructor(props: handleAxiosMyPageProps) {
    super(props);
    this.state = {
      selectedOption: options[0],
      selectedImage: '',
      novelTitle: '',
      novelDescription: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleNovelTitleChange = this.handleNovelTitleChange.bind(this);
    this.handleNovelDescriptionChange = this.handleNovelDescriptionChange.bind(
      this,
    );
    this.handleWriteNovel = this.handleWriteNovel.bind(this);
  }

  handleWriteNovel = () => {
    if (this.state) {
      axios
        .post(
          `https://server.cloud-bookstore.com
        /mypage/write/novel`,
          {
            thumbnail: this.state.selectedImage,
            description: this.state.novelDescription,
            category: this.state.selectedOption.value,
            title: this.state.novelTitle,
          },
        )
        .then(() => this.props.handleAxiosMyPage());
    }
  };

  handleChange = (option: any): void => {
    this.setState({
      selectedOption: option,
    });
  };

  handleImageChange = (e: any): void => {
    this.setState(
      {
        selectedImage: e,
      },
      () => console.log(this.state),
    );
  };

  handleNovelTitleChange = (e: any): void => {
    this.setState(
      {
        novelTitle: e.target.value,
      },
      () => console.log(this.state),
    );
  };

  handleNovelDescriptionChange = (e: any): void => {
    this.setState(
      {
        novelDescription: e.target.value,
      },
      () => console.log(this.state),
    );
  };

  render() {
    return (
      <div className="MakeNovelWrapper">
        <div className="MakeNovelHeader">
          <div className="MakeNovelTitle">새 작품 쓰기</div>
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
                  <div
                    role="button"
                    aria-hidden="true"
                    className="CoverImageBox"
                  ></div>
                  <div
                    role="button"
                    aria-hidden="true"
                    className="CoverImageBox"
                    onClick={() =>
                      this.handleImageChange(
                        'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
                      )
                    }
                  ></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                </div>
              </div>
            ) : this.state.selectedOption.value === 2 ? (
              <div className="CoverImage">
                <div className="ImageWrapper">
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                </div>
              </div>
            ) : this.state.selectedOption.value === 3 ? (
              <div className="CoverImage">
                <div className="ImageWrapper">
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
                  <div className="CoverImageBox"></div>
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
        ></textarea>
        <div className="BoxLineSecond" />
        <button onClick={this.handleWriteNovel}>버튼</button>
      </div>
    );
  }
}

export default withRouter(MakeNovel);
