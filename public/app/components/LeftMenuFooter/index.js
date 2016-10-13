/**
*
* LeftMenuFooter
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.scss';
import LocaleToggle from 'containers/LocaleToggle';

class LeftMenuFooter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.leftMenuFooter}>
        <FormattedMessage {...messages.poweredBy} /> <a href="http://strapi.io" target="_blank">Strapi</a>
        <LocaleToggle />
      </div>
    );
  }
}

export default LeftMenuFooter;
