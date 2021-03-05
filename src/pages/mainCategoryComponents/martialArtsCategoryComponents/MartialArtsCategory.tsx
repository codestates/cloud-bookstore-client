import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './MartialArtsCategory.css';

import SelectBoxNav from '../SelectBoxNav';

interface MartialArtsNovelDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
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
        <SelectBoxNav
          categorizedData={props.martialArtsNovelData}
          history={props.history}
          location={props.location}
          match={props.match}
          handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
        />
      </div>
    </div>
  );
};

export default MartialArtsCategory;
