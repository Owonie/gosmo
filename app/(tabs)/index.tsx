import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Feed from '../../components/home/Feed';
import Stan from '../../components/home/Stan';
import Gravity from '../../components/home/Gravity';

const FirstRoute = () => <Feed />;
const SecondRoute = () => <Stan />;
const ThirdRoute = () => <Gravity />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function HomeScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Feed' },
    { key: 'second', title: 'Stan' },
    { key: 'third', title: 'Gravity' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
