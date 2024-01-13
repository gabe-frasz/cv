import { Document, renderToFile } from "@react-pdf/renderer";

import { uploadFile } from "./lib";
import { DevCV } from "./pdfs/DevCV";
import { __dirname } from "./utils";

const cvPath = `${__dirname(
	import.meta.url,
)}/../generated/gabriel-vs-frasao-CV.pdf`;
const cvEnPath = `${__dirname(
	import.meta.url,
)}/../generated/gabriel-vs-frasao-CV-en.pdf`;

console.log("Generating files...");

await Promise.all([
	renderToFile(
		<Document>
			<DevCV lang="pt" />
		</Document>,
		cvPath,
	),
	renderToFile(
		<Document>
			<DevCV lang="en" />
		</Document>,
		cvEnPath,
	),
]);

console.log("Uploading to Drive...");

await Promise.all([
	// biome-ignore lint/style/noNonNullAssertion: <refactor later>
	uploadFile(cvPath, process.env.CV_ID!),
	// biome-ignore lint/style/noNonNullAssertion: <refactor later>
	uploadFile(cvEnPath, process.env.CV_EN_ID!),
]);

console.log("Done!");
