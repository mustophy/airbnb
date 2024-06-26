import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface TextProps {
    children: React.ReactNode;
    className?: string;
    style?: {};
}
export const Heading1 = ({ children, style, className }: TextProps) => (
    <Text className={className} style={[styles.heading1, style]}>{children}</Text>
)
export const Heading2 = ({ children, style, className } : TextProps) => (
    <Text className={className} style={[styles.heading2, style]}>{children}</Text>
)
export const Heading3 = ({ children, style, className } : TextProps) => (
    <Text className={className} style={[styles.heading3, style]}>{children}</Text>
)
export const Heading4 = ({ children, style, className } : TextProps) => (
    <Text className={className} style={[styles.heading4, style]}>{children}</Text>
)
export const Heading5 = ({ children, style, className } : TextProps) => (
    <Text className={className} style={[styles.heading5, style]}>{children}</Text>
)
export const BodyXLarge = ({ children, style, className } : TextProps) => (
    <Text className={className} style={[styles.bodyXlarge, style]}>{children}</Text>
)
export const BodyLarge = ({ children, style, className } : TextProps) => (
    <Text className={className} style={[styles.bodyLarge, style]}>{children}</Text>
)
export const BodyBase = ({ children, style, className } : TextProps) => (
    <Text className={className} style={[styles.bodyBase, style]}>{children}</Text>
)
export const BodySmall = ({ children, style, className } : TextProps) => (
    <Text className={className} style={[styles.bodySmall, style]}>{children}</Text>
)


const styles = StyleSheet.create({
    heading1: {
        fontWeight: "medium",
        fontSize: 32,
        lineHeight: 42
    },
    heading2: {
        fontWeight: "medium",
        fontSize: 26,
        lineHeight: 34
    },
    heading3: {
        fontWeight: "medium",
        fontSize: 24,
        lineHeight: 32
    },
    heading4: {
        fontWeight: "medium",
        fontSize: 22,
        lineHeight: 28
    },
    heading5: {
        fontWeight: "medium",
        fontSize: 20,
        lineHeight: 26
    },
    bodyXlarge: {
        fontSize: 18,
        lineHeight: 24
    },
    bodyLarge: {
        fontSize: 16,
        lineHeight: 22
    },
    bodyBase: {
        fontSize: 14,
        lineHeight: 18
    },
    bodySmall: {
        fontSize: 12,
        lineHeight: 16
    }
})