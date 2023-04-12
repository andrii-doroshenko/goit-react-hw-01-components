import styled from '@emotion/styled';

export const Profile = styled.div`
  width: 280px;
  border: 1px solid lightgray;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Description = styled.div`
  padding: 40px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 50%;
`;

export const Content = styled.p`
  margin: 0;
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: 500;
`;

export const ContentHeader = styled(Content)`
  font-size: 20px;
  color: gray;
`;

export const ContentLocation = styled(ContentHeader)`
  padding-bottom: 0;
`;
