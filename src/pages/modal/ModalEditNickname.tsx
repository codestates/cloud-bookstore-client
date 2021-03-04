import React, { useState } from 'react';
import axios from 'axios';
import './ModalEditNickname.css';
import { MdClose } from 'react-icons/md';

interface editNicknameProps {
  // eslint-disable-next-line no-unused-vars
  handleNickname: (nickname: string) => void;
  toggleNicknameModal: () => void;
}

const ModalEditNickname: React.FC<editNicknameProps> = (
  props: editNicknameProps,
) => {
  const [updatedNickname, setUpdatedNickname] = useState<string>('');
  const handleUpdatedNickname = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUpdatedNickname(e.target.value);
  };
  const editNickname = (): void => {
    axios
      .patch(
        'https://server.cloud-bookstore.com/setting/nickname',
        { nickname: updatedNickname },
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then(() => props.handleNickname(updatedNickname))
      .then(() => props.toggleNicknameModal());
  };

  return (
    <div>
      <div className="editGreyBackground" />
      <div className="editBox">
        <div className="editUpperBox">
          <div className="editBoxTitle">닉네임 변경</div>
          <MdClose
            className="nicknameCloseButton"
            onClick={props.toggleNicknameModal}
          />
        </div>
        <div className="editGreyUnderline" />
        <div className="editBoxDetails">
          <input
            className="editNicknameInput"
            type="text"
            onChange={handleUpdatedNickname}
          />
          <div
            role="presentation"
            className="editBoxSaveButton"
            onClick={editNickname}
          >
            저장
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditNickname;
