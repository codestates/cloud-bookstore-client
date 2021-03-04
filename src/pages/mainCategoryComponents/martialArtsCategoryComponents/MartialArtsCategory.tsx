import React, { useState, useEffect } from 'react';
import './MartialArtsCategory.css';
import axios from 'axios';

import SelectBoxNav from '../SelectBoxNav';

interface FantasyCategoryData {
  data: {
    id: number;
    title: string;
    author: string;
    category: number;
    description: string;
    cloud: number;
    userLike: number;
    complete: boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

const MartialArtsCategory: React.FC = () => {
  const [
    martialArtsNovelData,
    setMartialArtsNovelData,
  ] = useState<FantasyCategoryData>({
    data: [
      {
        id: 1,
        title: '잊지마 4시1분',
        author: '투투니깐 200원 줘',
        category: 3,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 0,
        userLike: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-25T00:17:06.955Z',
      },
    ],
  });

  useEffect(() => {
    axios.get('https://server.cloud-bookstore.com/category/2').then((res) => {
      setMartialArtsNovelData(res.data);
    });
  }, []);

  return (
    <div className="wholeFantasyCategoryWrapper">
      <div className="fantasyCategoryInnerWrapper">
        <SelectBoxNav categorizedData={martialArtsNovelData} />
      </div>
    </div>
  );
};

export default MartialArtsCategory;
