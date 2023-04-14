import user from '../data/user.json';
import dataStatistics from '../data/data.json';
import dataFriendList from '../data/friends.json';
import dataTransaction from '../data/transactions.json';
import { Main } from './App.styled';
import { Card } from './ProfilePage/Profile';
import { Statistics } from './StatisticsPage/Statistics';
import { CardFriendList } from './FriendListPage/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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

      <CardFriendList cards={dataFriendList}></CardFriendList>

      <TransactionHistory items={dataTransaction}></TransactionHistory>
    </Main>
  );
};
