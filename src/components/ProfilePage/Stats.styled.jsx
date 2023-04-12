import styled from '@emotion/styled';

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 18px;
  background-color: #f3f6f9;
  border-top: 1px solid lightgray;
  border-radius: 0 0 6px 6px;
  list-style-type: none;
`;

export const StatsItem = styled.li`
  display: block;
  flex: 1 0 33%;
  padding: 15px 0;

  &:not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;

export const StatsLabel = styled.span`
  display: block;
  font-size: 16px;
  color: gray;
  padding-bottom: 10px;
`;
export const StatsQuantity = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
