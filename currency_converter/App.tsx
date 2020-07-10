
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import styles from './styles';
import ConvertButton from './src/components/ConvertButton';
import FormatCurrency from './src/components/FormatCurrency';

const App = () => {

  const [currentCurrency, setCurrentCurrency] = useState<string>("VND");
  const [value, setValue] = useState<string>("");

  const [currentValue, setCurrentValue] = useState<number>(0)
  const [otherValue, setOtherValue] = useState<number>(0)

  const handleChangeCurrentCurrency = (currency: string) => {
    setCurrentCurrency(currency);
    setOtherValue(currency === "VND" ? currentValue / 23000 : currentValue * 23000);
  }

  const handleChangeValue = (text: string) => {
    setValue(text);
    if (!text) {
      setCurrentValue(0);
      setOtherValue(0)
    } else {
      setCurrentValue(parseInt(text));
      setOtherValue(currentCurrency === "VND" ? parseInt(text) / 23000 : parseInt(text) * 23000);
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Enter a value to convert</Text>
        <TextInput
          style={styles.input}
          placeholder="100,000 VND"
          keyboardType="number-pad"
          value={value}
          onChangeText={handleChangeValue}
        />
        <ConvertButton from="VND" to="USD" currentCurrency={currentCurrency} changeCurrency={handleChangeCurrentCurrency} />
        <ConvertButton from="USD" to="VND" currentCurrency={currentCurrency} changeCurrency={handleChangeCurrentCurrency} />
        <Text>Current currency:</Text>
        <FormatCurrency value={currentValue} type={currentCurrency === "USD" ? "USD" : "VND"} />
        <Text>Conversion currency:</Text>
        <FormatCurrency value={otherValue} type={currentCurrency === "USD" ? "VND" : "USD"} />
      </SafeAreaView>
    </>
  );
};

export default App;
