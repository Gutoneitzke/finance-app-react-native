import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/index'

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="@gutoneitzke" />
        <Text>Página Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
