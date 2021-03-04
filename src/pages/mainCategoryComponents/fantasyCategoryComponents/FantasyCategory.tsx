import React from 'react';
import './FantasyCategory.css';
import SelectBoxNav from '../SelectBoxNav';

interface FantasyNovelDataProps {
  fantasyNovelData: {
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

const FantasyCategory: React.FC<FantasyNovelDataProps> = (
  props: FantasyNovelDataProps,
) => {
  return (
    <div className="wholeFantasyCategoryWrapper">
      <div className="fantasyCategoryInnerWrapper">
        <SelectBoxNav categorizedData={props.fantasyNovelData} />
      </div>
    </div>
  );
};
export default FantasyCategory;
