import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Mainpage.css';

import UserNav from './UserNav';
import CategoryNav from './CategoryNav';
import Footer from './Footer';

const Mainpage: React.FC = () => {
  return (
    <div>
      <div className="wholeMainPageWrapper">
        <UserNav />
        <CategoryNav />
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Mainpage);
