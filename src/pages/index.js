import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Content from "../constlayouts/home/Content";

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Content/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
