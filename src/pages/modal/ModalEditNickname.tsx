import React from 'react';
// import axios from 'axios';
import './ModalEditNickname.css';
import { MdClose } from 'react-icons/md';
// interface editNicknameProps {
//   handleNickname: (nickname: string) => void;
// }

const ModalEditNickname: React.FC = () =>
  // props: editNicknameProps,
  {
    // const editNickname = (nickname: string): void => {
    //   axios
    //     .patch(
    //       'https://server.cloud-bookstore.com/setting/nickname',
    //       { nickname },
    //       { headers: { 'Content-Type': 'application/json' } },
    //     )
    //     .then(() => props.handleNickname(nickname));
    // };

    return (
      <div>
        <div className="editGreyBackground" />
        <div className="editBox">
          <div className="editUpperBox">
            <div className="editBoxTitle">닉네임 변경</div>
            <MdClose className="nicknameCloseButton" />
          </div>
          <div className="editGreyUnderline" />
          <div className="editBoxDetails">
            <input className="editNicknameInput" type="text" />
            <div className="editBoxSaveButton">저장</div>
          </div>
        </div>
      </div>
    );
  };

export default ModalEditNickname;
