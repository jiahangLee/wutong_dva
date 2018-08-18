import React from 'react';
import styles from './index.css';
import HeaderHome from '../constlayouts/home/HeaderHome';
import HeaderOtherAll from '../constlayouts/common/HeaderOtherAll';
import Footer from '../constlayouts/common/Footer'
import withRouter from 'umi/withRouter';
import Content from "../constlayouts/home/Content";
import Top from "../constlayouts/common/Top";
function Layout({ children, location }) {
  return (
    location.pathname === '/' ?
        <div className={styles.normal}>
          <Top/>
          <HeaderHome location={location} />
          <div className={styles.content}>
            <div className={styles.main}>
            </div>
          </div>
          <Content/>
          <Footer location={location}/>
        </div>
      :
    <div className={styles.normal}>
      <Top/>
      <HeaderOtherAll location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <Footer location={location}/>
    </div>

  );
}
export default withRouter(Layout);
