import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.3.104'}) //177.220.89.111(euduroam ifgw) //192.168.3.106(kit)
    .useReactNative()
    .connect();

  tron.clear();
  console.tron = tron;
}
