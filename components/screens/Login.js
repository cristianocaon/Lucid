import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

const data = [
  { username: 'giupiombo', password: '1234' },
  { username: 'ccaon', password: '789' }
]

const Login = () => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [accept, setAccept] = React.useState(false);

  const onPress = () => {
    if (username !== "" && password !== "") {
      for (let user of data) {
        if (username === user.username && password === user.password) {
          setAccept(true); 
        }
      }
      setError(true);
    } else {
      setError(true);
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.welcomeText}>
        Welcome back!
      </Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Login
        </Text>
        <TextInput 
          style={styles.loginInput}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="e.g. cristianocaon"
        />
        <TextInput 
          style={styles.loginInput}
          onChangeText={onChangePassword}
          value={password}
          placeholder="**********"
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={onPress}
        >
          <Text style={{color: "#fff"}}>
            Sign in
          </Text>
        </TouchableOpacity>
        {
          accept ? <Text>Successful!</Text> 
          : error ? <Text>Wrong combination of username and password.</Text>
          : <></>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#003049",
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 20,
  },
  loginContainer: {
    width: '75%',
    height: '50%',
    backgroundColor: "#cddafd",
    borderRadius: 15,
    shadowColor: "#80ffdb",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loginText: {
    fontSize: 30,
    marginTop: 20,
  },
  loginInput: {
    height: 40,
    width: 250,
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6930c3',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
  }
})

export default Login;