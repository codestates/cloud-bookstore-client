import React from 'react';
import PurchaseCheckList from './PurchaseCheckList';

interface episodeListProps {
  data: {
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
      {props.purchase.map((data) => (
        <PurchaseCheckList
          purchase={data}
          key={data.episodeId}
          data={props.data}
        />
      ))}
    </>
  );
};

export default EpisodeListDetail;
