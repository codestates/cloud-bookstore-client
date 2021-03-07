import React from 'react';
import PurchaseCheckList from './PurchaseCheckList';

interface episodeListProps {
  episode: {
    id: number;
    episodeNum: number;
    novelId: number;
    title: string;
    text: string;
    thumbnail: string;
    cloud: number;
    createdAt: string;
    updatedAt: string;
  };
  purchase: {
    episodeId: number;
  }[];
}

const EpisodeListDetail: React.FC<episodeListProps> = (
  props: episodeListProps,
) => {
  return (
    <>
      {props.purchase.map((purchase) => (
        <PurchaseCheckList
          purchase={purchase}
          key={purchase.episodeId}
          episode={props.episode}
        />
      ))}
    </>
  );
};

export default EpisodeListDetail;
