import { View } from 'react-native';
import styles from './style';
import Title from './src/components';
import Form from './src/Form';
import ResultImc from './src/Form/ResultImc';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
      <ResultImc />
    </View>
  );
}