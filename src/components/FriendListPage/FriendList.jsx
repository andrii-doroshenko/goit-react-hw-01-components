import * as FriendListStyled from './FriendList.styled';
import PropTypes from 'prop-types';

export const CardFriendList = ({ cards }) => {
  return (
    <FriendListStyled.FriendList>
      {cards.map(({ avatar, id, isOnline, name }) => {
        return (
          <FriendListStyled.Item key={id}>
            <FriendListStyled.Status
              style={{ backgroundColor: isOnline && 'green' }}
            />
            <FriendListStyled.Avatar src={avatar} width="50" height="50" />
            <FriendListStyled.Name>{name}</FriendListStyled.Name>
          </FriendListStyled.Item>
        );
      })}
    </FriendListStyled.FriendList>
  );
};

CardFriendList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
