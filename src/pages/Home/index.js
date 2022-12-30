import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/index';
import Balance from '../../components/Balance/index';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="@gutoneitzke" />
        <Balance />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
});
