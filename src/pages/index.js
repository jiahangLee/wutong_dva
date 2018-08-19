import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Content from "../constlayouts/home/Content";
import home from "../models/home";

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Content/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(home)(IndexPage);
