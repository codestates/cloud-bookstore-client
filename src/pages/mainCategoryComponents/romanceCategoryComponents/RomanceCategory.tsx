import React from 'react';
import './RomanceCategory.css';

import SelectBoxNav from '../SelectBoxNav';

interface RomanceNovelDataProps {
  romanceNovelData: {
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
  };
}

const RomanceCategory: React.FC<RomanceNovelDataProps> = (
  props: RomanceNovelDataProps,
) => {
  return (
    <div className="wholeFantasyCategoryWrapper">
      <div className="fantasyCategoryInnerWrapper">
        <SelectBoxNav categorizedData={props.romanceNovelData} />
      </div>
    </div>
  );
};

export default RomanceCategory;
