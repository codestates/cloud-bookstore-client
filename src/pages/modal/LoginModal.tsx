import React from 'react';
import { MdClose } from 'react-icons/md';
import './LoginModal.css';
import GoogleLogin from 'react-google-login';
import KaKaoLogin from 'react-kakao-login';
import axios from 'axios';

// 부모로부터 받아오는 함수 등은 무조건 interface로 정의해야 오류가 나지 않는다.
interface loginProps {
  handleLoginModalOn: () => void;
  isLogin: boolean;
  toggleLogin: () => void;
  nickname: string;
  handleNickname: (nickname: string) => void;
}

const handleError = () => {
  alert('로그인에 실패하셨습니다.');
};

const LoginModal: React.FC<loginProps> = (props: loginProps) => {
  const handleLogin = (oauth: string, data: any) => {
    axios
      .post(
        'https://server.cloud-bookstore.com/login',
        { oauth, data },
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then((data) => data.data.data)
      .then((data) => {
        props.toggleLogin();
        props.handleNickname(data.nickname);
        props.handleLoginModalOn();
      });
  };

  return (
    <div className="wholeLoginModalWrapper">
      <div className="loginModalGreyBg"></div>
      <div className="loginPopup">
        <MdClose className="mdClose" onClick={props.handleLoginModalOn} />
        <div className="loginPopupLogo"></div>
        <div className="hisOauthLoginWrapper">
          <GoogleLogin
            className="googleLogin oauthLoginBox"
            clientId={
              '122506589044-ef7mnhkbajtragmtqu5opd641t9la4ji.apps.googleusercontent.com'
            }
            render={(renderProps) => (
              <button
                className="googleLogin oauthLoginBox"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              ></button>
            )}
            onSuccess={(data) => handleLogin('google', data)}
            onFailure={handleError}
            cookiePolicy={'single_host_origin'}
          />
          <KaKaoLogin
            className="kakaoLogin oauthLoginBox"
            token={'f02b630af9cae0b281b13e8f6d1770cd'}
            onSuccess={(data) => handleLogin('kakao', data)}
            onFail={handleError}
            style={{}}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
