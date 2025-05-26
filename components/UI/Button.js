import { Pressable, View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function Button({ children, onPress, mode, style }) 
{
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <View style={[styles.button, mode === "flat" && styles.flat]}>
                    <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>

    );
}

export default Button;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
      },
      button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500,
      },
      buttonText: {
          color: "white",
          textAlign: "center",
        },
        flat: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: GlobalStyles.colors.primary100,
            borderRadius: 4,
        },
        flatText: {
            color: GlobalStyles.colors.primary800,
        },
        //   buttonInnerContainer: {
        //     borderRadius: 4,
        //     backgroundColor: GlobalStyles.colors.primary700,
        //     padding: 16,
        //   },
    });