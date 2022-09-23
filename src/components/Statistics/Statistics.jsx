import PropTypes from 'prop-types';
import {StatisticsItem} from 'components/StatisticsItem/StatisticsItem'
import css from 'components/Statistics/Statistics.module.css';


export function Statistics({title, stats}) {
  return (
      <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
        {stats.map(stat => (
      <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
        />
    ))}
  </ul>
</section>
   )
}

Statistics.protoTypes = {
   title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
   })),
}