import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Image,
  Alert,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Header from './components/Header';

export default function App() {
  let [itens, setItens] = useState(0);
  let [preco, setPreco] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.carrinho}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('./assets/cart.png')}
        />
        <Text style={{ color: 'white' }}>{itens}</Text>
      </View>

      <View style={styles.livrosStyle}>
        <Image
          style={styles.img}
          source={require('./assets/deusesAmericanos.jpg')}
        />

        <View style={styles.descricao}>
          <Text style={{ color: 'white' }}>
            R$78.00 {'\n'}576 páginas {'\n'}Neil Gaiman{' '}
          </Text>
          <Button
            color="#1238F4"
            title="Add Carrinho"
            onPress={() => {
              setItens(itens + 1), setPreco(preco + 78);
            }}
          />
        </View>
      </View>

      <View style={styles.livrosStyle}>
        <Image
          style={styles.img}
          source={require('./assets/enaosobrounenhum.jpg')}
        />

        <View style={styles.descricao}>
          <Text style={{ color: 'white' }}>
            R$48.00 {'\n'}400 páginas {'\n'}Agatha Christie
          </Text>
          <Button
            color="#1238F4"
            title="Add Carrinho"
            onPress={() => {setItens(itens + 1), setPreco(preco + 48)}}
          />
        </View>
      </View>

      <View style={styles.livrosStyle}>
        <Image
          style={styles.img}
          source={require('./assets/Metamorfose.png')}
        />

        <View style={styles.descricao}>
          <Text style={{ color: 'white' }}>
            R$54.00 {'\n'}232 páginas {'\n'}Franz Kafka
          </Text>
          <Button
            color="#1238F4"
            title="Add Carrinho"
            onPress={() => {setItens(itens + 1), setPreco(preco + 78)}}
          />
        </View>
      </View>

      <View style={styles.livrosStyle}>
        <Image style={styles.img} source={require('./assets/Algernon.jpg')} />

        <View style={styles.descricao}>
          <Text style={{ color: 'white' }}>
            R$54.00 {'\n'}288 páginas {'\n'}Daniel Keyes
          </Text>
          <Button
            color="#1238F4"
            title="Add Carrinho"
            onPress={() => {setItens(itens + 1), setPreco(preco + 78)}}
          />
        </View>
      </View>

      <View style={styles.footerStyle}>
        <Button
          color="#00B000"
          title="Comprar"
          onPress={() => {
            Alert.alert("Você vai pagar R$" + preco.toFixed(2)),
              setItens((itens = 0)),
              setPreco((preco = 0));
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 20,
    backgroundColor: '#160721',
  },

  carrinho: {
    position: 'absolute',
    right: 15,
    top: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  livrosStyle: {
    width: '100%',
    height: 160,
    padding: 5,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },

  img: {
    width: 130,
    height: 170,
  },

  descricao: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  footerStyle: {
    width: '100%',
    height: 35,
    backgroundColor: '#1238F4',
    justifyContent: 'center',
  },
});
