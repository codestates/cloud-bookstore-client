import React from 'react';
import './NovelReadContent.css';

interface SpecificEpisodeTextProps {
  specificEpisodeText: string;
}

const NovelReadContent: React.FC<SpecificEpisodeTextProps> = (
  props: SpecificEpisodeTextProps,
) => {
  return (
    <div className="wholeSpecificEpisodeTextWrapper">
      <div className="specificEpisodeTextInnerWrapper">
        {props.specificEpisodeText}
      </div>
    </div>
  );
};

export default NovelReadContent;
