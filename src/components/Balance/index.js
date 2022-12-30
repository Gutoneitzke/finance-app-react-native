import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Balance({balance, expenses}) {
 return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>
                    {balance}
                </Text>
            </View>
        </View>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>
                    {expenses}
                </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 14,
        padding: 22,
        zIndex: 99
    },
    item: {

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada'
    },
    currencySymbol: {
        color: '#dadada',
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: '#2ecc61'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }
});
  