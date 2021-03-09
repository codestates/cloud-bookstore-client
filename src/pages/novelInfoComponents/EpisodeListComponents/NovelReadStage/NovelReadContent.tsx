import React from 'react';

interface SpecificEpisodeTextProps {
  specificEpisodeText: string;
}

const NovelReadContent: React.FC<SpecificEpisodeTextProps> = (
  props: SpecificEpisodeTextProps,
) => {
  return <div>{props.specificEpisodeText}</div>;
};

export default NovelReadContent;
