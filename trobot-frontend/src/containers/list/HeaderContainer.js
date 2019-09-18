import React, { Component } from 'react';

import Header from '../../components/common/Header';

class HeaderContainer extends Component {
  render() {
    const { tag } = this.props;

    let title = '';
    let emoji = '';

    if (tag) {
      switch (tag) {
        case '라이프':
          title = '라이프';
          emoji = '💆🏻‍';
          break;
        case '테크':
          title = '테크';
          emoji = '💻';
          break;
        case '경제':
          title = '경제';
          emoji = '💸';
          break;
        case '환경':
          title = '환경';
          emoji = '🌿';
          break;
        case '생산성':
          title = '생산성';
          emoji = '📈‍';
          break;
        case '건강':
          title = '건강';
          emoji = '💪';
          break;
        case '문화':
          title = '문화';
          emoji = '🌈';
          break;
        case '기타분류':
          title = '기타분류';
          emoji = '👀';
          break;
        default:
          return null;
      }
    } else {
      title = '아이디어';
      emoji = '🔑';
    }

    return <Header title={title} emoji={emoji} />;
  }
}

export default HeaderContainer;

// 🌈👬🌦☔️💆🏻‍🌿🌱🐈🏃🏻‍🤝💪🧬🔑💸💵📸📷🔬🦠🎁💻📈📚
