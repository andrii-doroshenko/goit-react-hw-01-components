import user from './user.json';
import dataStatistics from './data.json';
import { Main } from './App.styled';
import { Card } from './ProfilePage/Profile';
import { Statistics } from './StatisticsPage/Statistics';

export const App = () => {
  return (
    <Main>
      <Card
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Card>

      <Statistics title="Upload stats" stats={dataStatistics} />
    </Main>
  );
};
