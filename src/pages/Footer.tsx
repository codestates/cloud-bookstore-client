import React from 'react';
import '../css/Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footerInnerBox">
        <div className="footerLogoWrapper">
          <div className="footerLogo"></div>
        </div>
        <div className="footerWrapper">
          <div className="footerFirstLine">
            <div className="companyWrapper">
              <div id="companyText" className="firstFooterText">
                COMPANY
              </div>
              <a
                href="https://github.com/codestates/cloud-bookstore-client/wiki/Team-Members"
                target="_blank"
                rel="noreferrer"
              >
                <div className="aboutUs">About Us</div>
              </a>
            </div>
            <div className="productWrapper">
              <div id="productText" className="firstFooterText">
                PRODUCT
              </div>
              <a href="https://kudapach.com" target="_blank" rel="noreferrer">
                <div className="KUDAPACH_TODOLIST">KUDAPACH_TODOLIST</div>
              </a>
              <a
                href="https://cloud-bookstore.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="CLOUD_BOOKSTORE">CLOUD_BOOKSTORE</div>
              </a>
            </div>
          </div>
          <div className="footerSecondLine">
            <div className="teamMembersText">TEAM MEMBERS</div>
            <div className="teamMemberBox">
              <span className="teamMembersWrapper">
                <div className="memberPart">FULL-STACK(BACK)</div>
                <div className="memberName">김주희</div>
                <a
                  href="https://www.github.com/paigekim29"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="memberGithub">github.com/paigekim29</div>
                </a>
              </span>
              <span className="teamMembersWrapper">
                <div className="memberPart">FULL-STACK(BACK)</div>
                <div className="memberName">최상혁</div>
                <a
                  href="https://www.github.com/Sanghyuk-CH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="memberGithub">github.com/Sanghyuk-CH</div>
                </a>
              </span>
              <span className="teamMembersWrapper">
                <div className="memberPart">FRONT-END</div>
                <div className="memberName">추성엽</div>
                <a
                  href="https://www.github.com/danielsychoo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="memberGithub">github.com/danielsychoo</div>
                </a>
              </span>
              <span className="teamMembersWrapper">
                <div className="memberPart">FRONT-END</div>
                <div className="memberName">조한준</div>
                <a
                  href="https://www.github.com/kuzhi23"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="memberGithub">github.com/kuzhi23</div>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
