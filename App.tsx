// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

/**
class Counter extends React.Component {
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

  render() {
    const { count } = this.state;
    return (
      <View style={[styles.bg]}>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? styles.less : styles.greater}>{count}回タップした。</Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={this.setCount}>
            <Text style={styles.buttonText}>Click</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
*/

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.bg]}>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? styles.less : styles.greater}>{count}回タップした。</Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.buttonText}>Click</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  bg: { flex:1, paddingTop: 150, alignItems: 'center', backgroundColor: '#cbf35c' },
  less: { fontSize: 25, color: '#4d3398', fontWeight: 'bold' },
  greater: { fontSize: 25, color: '#f3845c', fontWeight: 'bold' },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: '#3498db'
  },
  buttonText: {
    fontSize: 25,
    color: '#fff'
  }
});

/**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/