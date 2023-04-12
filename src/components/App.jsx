import user from './user.json';
import { Section } from './App.styled';
import { Card } from './ProfilePage/Profile';

export const App = () => {
  return (
    <Section>
      <Card
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Card>
    </Section>
  );
};
