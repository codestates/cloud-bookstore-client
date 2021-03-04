import React from 'react';
import './MartialArtsCategory.css';

import SelectBoxNav from '../SelectBoxNav';

interface MartialArtsNovelDataProps {
  martialArtsNovelData: {
    data: {
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
    }[];
  };
}

const MartialArtsCategory: React.FC<MartialArtsNovelDataProps> = (
  props: MartialArtsNovelDataProps,
) => {
  return (
    <div className="wholeFantasyCategoryWrapper">
      <div className="fantasyCategoryInnerWrapper">
        <SelectBoxNav categorizedData={props.martialArtsNovelData} />
      </div>
    </div>
  );
};

export default MartialArtsCategory;
