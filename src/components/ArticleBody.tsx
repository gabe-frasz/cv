import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { type ReactNode } from "react";

interface ArticleBodyProps {
	as?: "text" | "view";
	children: ReactNode;
}

export const ArticleBody = ({ as = "view", children }: ArticleBodyProps) => {
	if (as === "text") {
		return <Text style={styles.articleBody}>{children}</Text>;
	}

	return <View style={styles.articleBody}>{children}</View>;
};

const styles = StyleSheet.create({
	articleBody: {
		fontSize: 9,
		fontWeight: "bold",
		lineHeight: 1.25,
	},
});
