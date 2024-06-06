import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

import { DevCV } from "./pdfs/DevCV";
import { getDevCVData, type Dictionary } from "./utils";

export function App() {
	const [ptDict, setPtDict] = useState<Dictionary>({} as Dictionary);
	const [enDict, setEnDict] = useState<Dictionary>({} as Dictionary);

	useEffect(() => {
		getDevCVData("pt").then(setPtDict);
		getDevCVData("en").then(setEnDict);
	}, []);

	if (!ptDict || !enDict) return <div>Loading...</div>;

	return (
		<>
			<PDFViewer>
				<DevCV dict={ptDict} />
			</PDFViewer>

			<PDFViewer>
				<DevCV dict={enDict} />
			</PDFViewer>
		</>
	);
}
