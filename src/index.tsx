import * as React from 'react';
import * as ReactDom from 'react-dom';
import 'styles/normalize.scss';
import styles from 'styles/index.scss';

const getCurrentYear = () => new Date().getFullYear();

const getDaysOfYear = () => (getCurrentYear() % 4 === 0 ? 366 : 365);

const getCurrentDay = (): number => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  // @ts-ignore
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>365 Dots</div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.time}>
          <div>{getCurrentYear()}</div>
          <div style={{ color: '#BAFB50' }}>
            {getCurrentDay()}/{getDaysOfYear()}
          </div>
          <div style={{ color: '#EA3855' }}>
            {((getCurrentDay() / getDaysOfYear()) * 100).toFixed(0)}%
          </div>
        </div>
        <div className={styles.dotsContainer}>
          {[...new Array(getDaysOfYear())].map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index + 1 === getCurrentDay() ? styles.currentDayDot : ''
              }`}
              style={index + 1 > getCurrentDay() ? { opacity: 0.5 } : {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
