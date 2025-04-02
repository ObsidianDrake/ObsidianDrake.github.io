import React from "react";
import "/src/styles/SocialLinks.css";
import SectionHead from '/src/components/SectionHead';
import 'font-awesome/css/font-awesome.min.css';

function SocialLinks() {
  return (
    <div className="social">
      <div className="container">
        <SectionHead
          title="Social Link"
        />
        <div className="social-content">
          <ul className="social-list">
            <li>
              <a href="https://www.facebook.com/obsidiandrakee/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <span> - Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/obsidiandrakee" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <span> - Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
