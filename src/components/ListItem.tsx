import { Text, View } from "@react-pdf/renderer";
import { type ReactNode } from "react";

export const ListItem = ({ children }: { children: ReactNode }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<Text style={{ paddingHorizontal: 4 }}>•</Text>
			<Text>{children}</Text>
		</View>
	);
};
