import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 10px;
`;
export const Label = styled.span`
  font-size: 15px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Percentage = styled(Label)`
  &.font-size {
    font-size: 20px;
    font-weight: 600;
  }
`;
