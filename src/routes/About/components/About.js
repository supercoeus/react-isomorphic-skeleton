import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { StyleSheet, css } from 'aphrodite';
import { Type } from '../../../style';
import data from '../data';

// This is a static page. It uses an array to hold data about the resources
// and maintain DRY
const About = (props) => {
  return (
    <div>
      <Helmet
        title="About"
        />
      <h2 className={css(styles.header)}>About</h2>
      <p className={css(styles.lead)}>
        This is an example react application skeleton with isomorphic rendering, async react-router routes, async redux reducers, async data fetching, and code-splitting. And you can debug it with browsersync.
      </p>
      <h2 className={css(styles.header)}>Base on</h2>
      <p className={css(styles.lead)}>The code is base on <a className={css(styles.link)} href="https://github.com/jaredpalmer/react-production-starter" target="_blank">React Production Starter</a>The script is base on <a className={css(styles.link)} href="https://github.com/kriasoft/react-starter-kit" target="_blank">React Start Kit</a></p>
      <h2 className={css(styles.header)}>Under the Hood</h2>
      <ul className={css(styles.list)}>
        { data.map((item, i) => <li>
          <h3><a className={css(styles.link)} href={item.link} target="_blank">{item.resource}</a></h3>
          <p className={css(styles.body)}>{item.description}</p>
          </li>) }
      </ul>
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: '36px',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
  },
  lead: {
    fontSize: '1.25rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555',
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555',
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0,
  },
  link: {
    display: 'block',
    fontSize: '1.25rem',
    margin: '0 0 .5rem',
    lineHeight: '1.5',
    fontWeight: 'bold',
    color: '#08c',
    opacity: 1,
    transition: '.2s opacity ease',
    ':hover': {
      opacity: .5,
    },
  },
});

export default About;
