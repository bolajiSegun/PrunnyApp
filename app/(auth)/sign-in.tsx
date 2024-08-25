import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { z } from "zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";

// Import your components
import FingerprintSuccess from "@/components/FingerprintSuccess";
import FingerprintError from "@/components/FingerprintError";

const loginSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function FirstLoginScreen() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
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
      loginSchema.parse({ password });
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
    <SafeAreaView style={styles.container}>
      {/* Status bar configuration */}
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <Pressable onPress={() => router.push("/")}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </Pressable>

            <View style={styles.image}>
              <Image
                source={require("@/assets/images/account-image.png")}
                style={{ width: 109, height: 109 }}
              />
            </View>
            <View>
              <Text style={styles.header}>Damilare,</Text>
              <Text style={styles.subText}>
                Kindly enter your password to login.
              </Text>
            </View>

            <View>
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

            <Pressable onPress={handleLogin} style={styles.loginBtn}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>

            <View style={styles.textContainer}>
              <Text>
                {isBiometricSupported && (
                  <TouchableOpacity
                    onPress={handleBiometricAuth}
                    style={styles.fingerprintBtn}
                  >
                    <Text style={styles.text}>Enable biometric login</Text>
                  </TouchableOpacity>
                )}
              </Text>
              <Text>
                <Link href={"/"} style={styles.subText}>
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
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#208220",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
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
    backgroundColor: "white",
    color: "#208220",
    paddingHorizontal: 5,
    zIndex: 1,
    fontSize: 14,
  },
  inputBox: {
    width: 335,
    margin: "auto",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#F8F8F8",
  },
  inputBoxFocused: {
    borderColor: "#208220",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -35,
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#208220",
    borderRadius: 5,
    paddingVertical: 12,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  textContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  text: {
    color: "#208220",
    fontSize: 16,
    fontWeight: "600",
  },
  fingerprintBtn: {
    padding: 10,
    alignItems: "center",
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
