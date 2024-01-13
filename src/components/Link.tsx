import { Link as PdfLink } from "@react-pdf/renderer";
import { type ReactNode } from "react";

interface LinkProps {
	src: string;
	children: ReactNode;
}

export const Link = ({ src, children }: LinkProps) => {
	return (
		<PdfLink src={src} style={{ color: "black" }}>
			{children}
		</PdfLink>
	);
};
