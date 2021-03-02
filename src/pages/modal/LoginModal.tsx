/*eslint-disable*/
import React from 'react';
import { MdClose } from 'react-icons/md';
import './LoginModal.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import KaKaoLogin from 'react-kakao-login';
import axios from 'axios';

// 부모로부터 받아오는 함수 등은 무조건 interface로 정의해야 오류가 나지 않는다.
interface Props {
  handleLoginModalOn: () => void;
}

const handleLogin = (oauth: string, data: any) => {
  console.log(oauth, data);
  // axios.post(
  //   'https://server.cloud-bookstore.com/login',
  //   { oauth, data },
  //   { headers: { 'Content-Type': 'application/json' } },
  // );
};

const handleError = () => {};

const LoginModal: React.FC<Props> = (props: Props) => {
  return (
    <div className="wholeLoginModalWrapper">
      <div className="loginModalGreyBg"></div>
      <div className="loginPopup">
        <MdClose className="mdClose" onClick={props.handleLoginModalOn} />
        <div className="loginPopupLogo"></div>
        <div className="oauthLoginWrapper">
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
            token={'d70c5c740eddb6109ed33a6fecbb1fd3'}
            onSuccess={(data) => handleLogin('kakao', data)}
            onFail={handleError}
            style={{}}
          />
          <FacebookLogin
            appId="348088729732348"
            autoLoad={false}
            fields="name,email,picture"
            cssClass="facebookLogin oauthLoginBox"
            callback={(data) => handleLogin('facebook', data)}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
