import React from 'react';
import { MdClose } from 'react-icons/md';
import './LoginModal.css';

// 부모로부터 받아오는 함수 등은 무조건 interface로 정의해야 오류가 나지 않는다.
interface Props {
  handleLoginModalOn: () => void;
}

const LoginModal: React.FC<Props> = (props: Props) => {
  return (
    <div className="wholeLoginModalWrapper">
      <div className="loginModalGreyBg"></div>
      <div className="loginPopup">
        <MdClose className="mdClose" onClick={props.handleLoginModalOn} />
        <div className="loginPopupLogo"></div>
        <div className="oauthLoginWrapper">
          <button
            id="googleLogin"
            className="oauthLoginBox"
            onClick={props.handleLoginModalOn}
          >
            Login with Google
          </button>
          <button
            id="kakaoLogin"
            className="oauthLoginBox"
            onClick={props.handleLoginModalOn}
          >
            Login with Kakao
          </button>
          <button
            id="facebookLogin"
            className="oauthLoginBox"
            onClick={props.handleLoginModalOn}
          >
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
