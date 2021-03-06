import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './FantasyCategory.css';
import SelectBoxNav from '../SelectBoxNav';

interface FantasyNovelDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
  fantasyNovelData: {
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

const FantasyCategory: React.FC<FantasyNovelDataProps> = (
  props: FantasyNovelDataProps,
) => {
  return (
    <div className="wholeFantasyCategoryWrapper">
      <div className="fantasyCategoryInnerWrapper">
        <SelectBoxNav
          categorizedData={props.fantasyNovelData}
          history={props.history}
          location={props.location}
          match={props.match}
          handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
        />
      </div>
    </div>
  );
};
export default FantasyCategory;
