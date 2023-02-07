import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getDarkColor() {
  let bgColor = '#';
  for (let i = 0; i < 6; i++) {
    bgColor += Math.floor(Math.random() * 10);
  }
  return bgColor;
}

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statisticsContainer}>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              className={title? css.statListItem : css.statListItemNoTitle}
              style={{
                backgroundColor: getDarkColor(),
              }}
              key={stat.id}
            >
              <span className={css.label}>
                {stat.label}
              </span>
              <span className={css.percentage}>
                {stat.percentage}%
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
