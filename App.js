import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import Sknrs from './src/telas/Snkrs';
import mock from './src/mocks/snkrs'

export default function App() {

  let [fontLoaded] = useFonts({
    "ubuntu": Ubuntu_400Regular
  });

  if(!fontLoaded) {
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#E6E6E6"}}>
      <StatusBar/>
      <Sknrs { ...mock } />
    </SafeAreaView>
  );
}