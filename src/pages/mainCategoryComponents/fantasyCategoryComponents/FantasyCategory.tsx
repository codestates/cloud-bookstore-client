import React from 'react';
import './FantasyCategory.css';

import SelectBoxNav from '../SelectBoxNav';

const fakeCategorizedData = {
  data: [
    {
      id: 1,
      title: '시켜줘 금잔디 명예소방관',
      author: '구준표가 되고싶어',
      category: 1,
      description:
        '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
      cloud: 0,
      userLike: 1,
      complete: false,
      thumbnail:
        'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
      createdAt: '2021-02-23T21:20:11.925Z',
      updatedAt: '2021-02-24T00:17:06.955Z',
    },
    {
      id: 3,
      title: '선배 이리와서 이것 좀 도와주세요.',
      author: '나는 존슨',
      category: 1,
      description:
        '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
      cloud: 1,
      userLike: 0,
      complete: true,
      thumbnail:
        'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
      createdAt: '2021-02-24T23:41:28.712Z',
      updatedAt: '2021-03-03T00:17:19.770Z',
    },
  ],
};

const FantasyCategory: React.FC = () => {
  return (
    <div className="wholeFantasyCategoryWrapper">
      <div className="fantasyCategoryInnerWrapper">
        <SelectBoxNav fakeCategorizedData={fakeCategorizedData} />
      </div>
    </div>
  );
};

export default FantasyCategory;
