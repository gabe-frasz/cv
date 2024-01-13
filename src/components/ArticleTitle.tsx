import { Text } from "@react-pdf/renderer";
import { type ReactNode } from "react";

export const ArticleTitle = ({ children }: { children: ReactNode }) => {
	return <Text style={{ marginBottom: 8, fontSize: 10 }}>{children}</Text>;
};
