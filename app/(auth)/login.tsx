import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { z } from "zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import FingerprintSuccess from "@/components/FingerprintSuccess";
import FingerprintError from "@/components/FingerprintError";

const loginSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function FirstLoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      setIsBiometricSupported(compatible && enrolled);
    })();
  }, []);

  const handleLogin = async () => {
    try {
      loginSchema.parse({ phoneNumber, password });
      await AsyncStorage.setItem("isLoggedIn", "true");
      await AsyncStorage.setItem("isFirstTimeLogin", "false");
      router.push("/");
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(e.errors[0].message);
      }
    }
  };

  const handleBiometricAuth = async () => {
    if (!isBiometricSupported) {
      setError("Biometric authentication not supported or not enrolled.");
      return;
    }

    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate with your fingerprint",
        fallbackLabel: "Use Password",
      });

      if (result.success) {
        setShowSuccess(true);
        setTimeout(async () => {
          setShowSuccess(false);
          await AsyncStorage.setItem("isLoggedIn", "true");
          await AsyncStorage.setItem("isFirstTimeLogin", "false");
          router.push("/"); // Navigate to the home page
        }, 2000);
      } else {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      }
    } catch (error) {
      setError("Biometric authentication failed. Please try again.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.header}>Login to your account</Text>
          <Text style={styles.subText}>
            We are glad to have you, kindly enter your login details.
          </Text>
        </View>

        <View>
          <View style={styles.inputContainer}>
            {(isPhoneNumberFocused || phoneNumber) && (
              <Text style={styles.legend}>Phone Number*</Text>
            )}
            <TextInput
              placeholder={!isPhoneNumberFocused ? "Phone Number" : ""}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              onFocus={() => setIsPhoneNumberFocused(true)}
              onBlur={() => setIsPhoneNumberFocused(false)}
              style={[
                styles.inputBox,
                isPhoneNumberFocused && styles.inputBoxFocused,
              ]}
            />
          </View>

          <View style={styles.inputContainer}>
            {(isPasswordFocused || password) && (
              <Text style={styles.legend}>Password</Text>
            )}
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder={!isPasswordFocused ? "Password" : ""}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                secureTextEntry={secureTextEntry}
                style={[
                  styles.inputBox,
                  isPasswordFocused && styles.inputBoxFocused,
                ]}
              />
              <TouchableOpacity
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              >
                <Ionicons
                  name={secureTextEntry ? "eye-off" : "eye"}
                  size={24}
                  color="#666666"
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            <Link href={"/(auth)/sign-in"}>Sign in Instead</Link>
          </Text>
          <Text style={styles.text}>
            Don't have an account? <Link href={"/(auth)/login"}>Sign up</Link>
          </Text>
          <Text>
            <Link href={"/(auth)/login"} style={styles.subText}>
              Forgot Password?
            </Link>
          </Text>

          {isBiometricSupported && (
            <TouchableOpacity
              onPress={handleBiometricAuth}
              style={styles.fingerprintBtn}
            >
              <Ionicons name="finger-print" size={40} color="#208220" />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.versionText}>v1.1.1</Text>

        {/* Conditionally render success or error component */}
        {showSuccess && <FingerprintSuccess visible={true} />}
        {showError && (
          <FingerprintError
            visible={true}
            onClose={() => setShowError(false)}
          />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#208220",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 50,
    marginTop: 20,
    width: 80,
    color: "#208220",
    textAlign: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "600",
    color: "#208220",
  },
  subText: {
    fontSize: 14,
    marginBottom: 40,
    fontWeight: "400",
    color: "#666666",
    width: 220,
    letterSpacing: 0.2,
    lineHeight: 20.3,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 30,
  },
  legend: {
    position: "absolute",
    top: -10,
    left: 15,
    fontSize: 12,
    color: "#208220",
    backgroundColor: "white",
    paddingHorizontal: 5,
    zIndex: 1,
  },
  inputBox: {
    width: 325,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#666666",
    justifyContent: "center",
  },
  inputBoxFocused: {
    borderColor: "#666666",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: -10,
  },
  loginBtn: {
    backgroundColor: "#208220",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 325,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 220,
    marginHorizontal: "auto",
    letterSpacing: 0.2,
    lineHeight: 20.3,
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "400",
    color: "#208220",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  fingerprintBtn: {
    marginVertical: 20,
    marginTop: 50,
  },
  versionText: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
    fontSize: 12,
    fontWeight: "400",
    color: "#666666",
    letterSpacing: 0.2,
    lineHeight: 20.3,
  },
});
