import React from 'react';
import './ShareModal.css';
import {
  EmailIcon,
  EmailShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  LineIcon,
  LineShareButton,
} from 'react-share';

const ShareModal: React.FC = () => {
  return (
    <div className="shareModalBox">
      <EmailShareButton
        subject={'구름책방'}
        url={'https://cloud-bookstore.com'}
      >
        <EmailIcon size={32} />
      </EmailShareButton>
      <TwitterShareButton
        title={'구름책방'}
        url={'https://cloud-bookstore.com'}
        via={'https://cloud-bookstore.com'}
        hashtags={['#구름책방']}
      >
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <LineShareButton title={'구름책방'} url={'https://cloud-bookstore.com'}>
        <LineIcon size={32} />
      </LineShareButton>
      <LinkedinShareButton
        title={'구름책방'}
        url={'https://cloud-bookstore.com'}
        summary={'포근한 구름처럼 당신을 편안하게 해주는 글, 구름책방'}
        source={'https://cloud-bookstore.com'}
      >
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
      <PinterestShareButton
        title={'구름책방'}
        url={'https://cloud-bookstore.com'}
        media={'https://cloud-bookstore.com'}
        description={'포근한 구름처럼 당신을 편안하게 해주는 글, 구름책방'}
      >
        <PinterestIcon size={32} />
      </PinterestShareButton>
    </div>
  );
};

export default ShareModal;
