import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Content from "../components/home/Content";

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Content/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({home})=>({home}))(IndexPage);
