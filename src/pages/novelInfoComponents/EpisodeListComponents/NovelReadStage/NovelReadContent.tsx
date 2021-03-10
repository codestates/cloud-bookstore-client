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
      <pre className="specificEpisodeTextInnerWrapper">
        {props.specificEpisodeText}
      </pre>
    </div>
  );
};

export default NovelReadContent;
