import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
interface handleAxiosMyPageProps extends RouteComponentProps {
  handleAxiosMyPage: () => void;
}

const MakeNovel: React.FC<handleAxiosMyPageProps> = (
  props: handleAxiosMyPageProps,
) => {
  return (
    <div>
      <h1> MakeNovel</h1>
      <button onClick={props.handleAxiosMyPage}>버튼</button>
    </div>
  );
};

export default withRouter(MakeNovel);
