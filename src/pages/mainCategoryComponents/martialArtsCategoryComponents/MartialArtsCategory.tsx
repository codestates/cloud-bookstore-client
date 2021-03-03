import React from 'react';
import './MartialArtsCategory.css';

import SelectBoxNav from '../SelectBoxNav';

const fakeCategorizedData = {
  data: [
    {
      id: 1,
      title: '이곳까지 올라와 보시게나',
      author: '유단잔가',
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
      title: '무림별곡',
      author: '드루와',
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

const MartialArtsCategory: React.FC = () => {
  return (
    <div className="wholeFantasyCategoryWrapper">
      <div className="fantasyCategoryInnerWrapper">
        <SelectBoxNav fakeCategorizedData={fakeCategorizedData} />
      </div>
    </div>
  );
};

export default MartialArtsCategory;
