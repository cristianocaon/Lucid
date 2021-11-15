import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

import { Divider } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

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
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Lucid.</Text>
        <Text style={styles.loginText}>Log In</Text>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.welcomeText}>
          Welcome back!
        </Text>

        <View style={styles.mainLoginContainer}>
          <TouchableOpacity 
            style={styles.apiButton}
            onPress={onPress}
          >
            <Text style={{color: "#000"}}>
              Log in with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.apiButton}
            onPress={onPress}
          >
            <Text style={{color: "#000"}}>
              Log in with Facebook
            </Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <Divider orientation="horizontal" width={2} style={styles.divider} />
            <Text>OR</Text>
            <Divider orientation="horizontal" width={2} style={styles.divider} />
          </View>

          <TextInput 
            style={styles.loginInput}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Email"
          />
          <TextInput 
            style={styles.loginInput}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.passwordButton}>
          <Text>Forgot your password?</Text>
        </TouchableOpacity>

        <View style={styles.submitButton}>
          <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
          >
            <Text style={{color: "#fff"}}>
              Log in
            </Text>
          </TouchableOpacity>
          {
            accept ? <Text style={{marginTop: 10, color: 'green'}}>Successful!</Text> 
            : error ? <Text style={{marginTop: 10, color: 'red'}}>Wrong combination of username and password.</Text>
            : <></>
          }
          <View style={styles.signUpContainer}> 
            <Text>New to Lucid?</Text>
            <TouchableOpacity>
              <Text style={{color: '#674EA7'}}> Sign up!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  logo: {
    fontSize: 70,
    fontWeight: 'bold',
    color: "#674EA7",
    marginBottom: 10,
    marginTop: 40,
    marginRight: 40,
    textAlign: 'right',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 40,
    textAlign: 'left',
  },
  loginContainer: {
    flex: 3,
    width: '100%',
    backgroundColor: "#E5F0F9",
    borderRadius: 15,
    elevation: 15,
    justifyContent: 'flex-start',
  },
  mainLoginContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000",
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 40,
  },
  loginInput: {
    height: 40,
    width: '80%',
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6930c3',
    width: '80%',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
  },
  apiButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 75,
    paddingRight: 75,
    marginBottom: 20,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1
  },
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    width: '30%',
    marginLeft: 5,
    marginRight: 5,
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center'
  },
  passwordButton: {
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 40,
  },
  signUpContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
})

export default Login;