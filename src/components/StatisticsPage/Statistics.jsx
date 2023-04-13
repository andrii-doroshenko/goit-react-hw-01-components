import PropTypes from 'prop-types';
import * as StatisticStyled from './Statistics.styled';
import * as StatListContainer from './StatList.styled';
import { getRandomColor } from '../../utils/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticStyled.Section>
      {title && <StatisticStyled.Title>{title}</StatisticStyled.Title>}
      <StatListContainer.StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListContainer.Item
              key={id}
              style={{ backgroundColor: getRandomColor(0.5) }}
            >
              <StatListContainer.Label>{label}</StatListContainer.Label>
              <StatListContainer.Percentage className="font-size">
                {percentage}%
              </StatListContainer.Percentage>
            </StatListContainer.Item>
          );
        })}
      </StatListContainer.StatList>
    </StatisticStyled.Section>
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
