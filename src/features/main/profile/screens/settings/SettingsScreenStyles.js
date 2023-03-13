import { StyleSheet } from 'react-native'
import app_sp from 'styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...app_sp.pv_12,
    ...app_sp.ph_18
  }
});

export default styles