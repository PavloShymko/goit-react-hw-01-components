import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import css from 'components/StatisticsItem/StatisticsItem.module.css';

export function StatisticsItem({ label, percentage }) {
   const randomHexColor = getRandomHexColor();
   return (
      <li className={css.item} style={{backgroundColor: `${randomHexColor}`}}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
   )
}

StatisticsItem.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
}