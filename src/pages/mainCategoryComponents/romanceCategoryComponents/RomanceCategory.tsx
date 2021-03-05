import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './RomanceCategory.css';

import SelectBoxNav from '../SelectBoxNav';

interface RomanceNovelDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
  romanceNovelData: {
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

const RomanceCategory: React.FC<RomanceNovelDataProps> = (
  props: RomanceNovelDataProps,
) => {
  return (
    <div className="wholeFantasyCategoryWrapper">
      <div className="fantasyCategoryInnerWrapper">
        <SelectBoxNav
          categorizedData={props.romanceNovelData}
          history={props.history}
          location={props.location}
          match={props.match}
          handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
        />
      </div>
    </div>
  );
};

export default RomanceCategory;
