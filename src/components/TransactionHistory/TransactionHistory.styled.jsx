import styled from '@emotion/styled';

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  width: 750px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 4px;
  border-collapse: collapse;
`;
export const Thead = styled.thead``;
export const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  text-transform: uppercase;
  background-color: #4ebdd5;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: #ecf2f3;
  }
  &:hover {
    background-color: #ddd;
  }
`;
export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
