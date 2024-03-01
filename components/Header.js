import { Text, View, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>
            MY LIBRARY
          </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#1238F4",
    justifyContent: "center"
  },

  textStyle: {
    textAlign: "center",
    color: "white",

  },
});
