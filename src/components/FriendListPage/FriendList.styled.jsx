import styled from '@emotion/styled';

export const FriendList = styled.ul`
  min-width: 350px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.5em;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px;
`;
export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
`;
export const Avatar = styled.img`
  padding: 10px;
  background-color: lightblue;
  border-radius: 10px;
`;
export const Name = styled.p`
  font-size: 26px;
  margin: 0;
`;
