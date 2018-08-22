import React from 'react';
import styles from './index.css';
import HeaderHome from '../components/home/HeaderHome';
import HeaderOtherAll from '../components/common/HeaderOtherAll';
import Footer from '../components/common/Footer'
import withRouter from 'umi/withRouter';
import Content from "../components/home/Content";
import Top from "../components/common/Top";
function Layout({ children, location }) {
  console.log("--------****"+location.pathname)
  return (
    (location.pathname === '/' || location.pathname === '/dist/') ?
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
