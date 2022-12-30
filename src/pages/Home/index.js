import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto LUZ',
    value: '300,10',
    date: '20/12/2022',
    type: 0 //gastos
  },
  {
    id: 2,
    label: 'Salário',
    value: '500,10',
    date: '13/10/2022',
    type: 1 //extrada
  },
  {
    id: 3,
    label: 'Compra mercado',
    value: '13,10',
    date: '01/11/2022',
    type: 0 //gastos
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="@gutoneitzke" />
        <Balance balance="9.250,00" expenses="-250,00" />
        <Actions />
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList 
          style={styles.list} 
          data={list} 
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Movements data={item}/> }
        ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
