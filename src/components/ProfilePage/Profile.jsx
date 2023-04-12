import PropTypes from 'prop-types';
import * as ProfileStyled from './Profile.styled';
import * as StatsStyled from './Stats.styled';

export const Card = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStyled.Profile>
      <ProfileStyled.Description>
        <ProfileStyled.Avatar
          src={avatar}
          alt="User avatar"
        ></ProfileStyled.Avatar>
        <ProfileStyled.Content>{username}</ProfileStyled.Content>
        <ProfileStyled.ContentHeader>@{tag}</ProfileStyled.ContentHeader>
        <ProfileStyled.ContentLocation>
          {location}
        </ProfileStyled.ContentLocation>
      </ProfileStyled.Description>

      <StatsStyled.Stats>
        <StatsStyled.StatsItem>
          <StatsStyled.StatsLabel>Followers</StatsStyled.StatsLabel>
          <StatsStyled.StatsQuantity>
            {stats.followers}
          </StatsStyled.StatsQuantity>
        </StatsStyled.StatsItem>
        <StatsStyled.StatsItem>
          <StatsStyled.StatsLabel>Views</StatsStyled.StatsLabel>
          <StatsStyled.StatsQuantity>{stats.views}</StatsStyled.StatsQuantity>
        </StatsStyled.StatsItem>
        <StatsStyled.StatsItem>
          <StatsStyled.StatsLabel>Likes</StatsStyled.StatsLabel>
          <StatsStyled.StatsQuantity>{stats.likes}</StatsStyled.StatsQuantity>
        </StatsStyled.StatsItem>
      </StatsStyled.Stats>
    </ProfileStyled.Profile>
  );
};

Card.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
