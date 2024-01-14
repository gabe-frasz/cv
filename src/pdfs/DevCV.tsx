import { Font, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { ArticleBody, ArticleTitle, Link, ListItem } from "@/components";
import type { Dictionary } from "@/utils";

Font.register({
	family: "GeistMono",
	fonts: [
		{
			src: "src/fonts/Geist.Mono/GeistMono-Regular.otf",
			fontWeight: "normal",
			fontStyle: "normal",
		},
		{
			src: "src/fonts/Geist.Mono/GeistMono-Bold.otf",
			fontWeight: "bold",
			fontStyle: "normal",
		},
	],
});

export const DevCV = ({ dict }: { dict: Dictionary }) => {
	return (
		<Page size="A4" style={styles.page}>
			<View style={styles.header}>
				<View style={styles.headerTitle}>
					<Text style={{ fontSize: 16 }}>{dict.header.name}</Text>
					<Text style={{ fontSize: 12 }}>{dict.header.title}</Text>
				</View>
			</View>

			<View style={styles.contacts}>
				<View style={{ display: "flex", alignItems: "center", gap: 4 }}>
					<Text>{dict.contacts.phone}</Text>

					<Link src={dict.contacts.email.link}>{dict.contacts.email.text}</Link>

					<Link src={dict.contacts.linkedin.link}>
						{dict.contacts.linkedin.text}
					</Link>

					<Link src={dict.contacts.github.link}>
						{dict.contacts.github.text}
					</Link>
				</View>
			</View>

			<View style={{ width: "100%", height: 2, backgroundColor: "black" }} />

			<View style={styles.body}>
				<View>
					<ArticleTitle>{dict.body.objective.title}</ArticleTitle>
					<ArticleBody as="text">{dict.body.objective.content}</ArticleBody>
				</View>

				<View>
					<ArticleTitle>{dict.body.qualifications.title}</ArticleTitle>
					<ArticleBody as="text">
						{dict.body.qualifications.content}
					</ArticleBody>
				</View>

				<View>
					<ArticleTitle>{dict.body.experience.title}</ArticleTitle>
					<ArticleBody>
						{dict.body.experience.content.map((ex) => (
							<View key={ex.date + ex.company}>
								<Text>
									{ex.date} | {ex.company}{" "}
									{ex.link.text && (
										<Link src={ex.link.src}>({ex.link.text})</Link>
									)}
								</Text>
								<Text>{ex.companyDescription}</Text>
								<Text>{ex.jobTitle}</Text>
								<ListItem>{ex.jobDescription}</ListItem>
							</View>
						))}
					</ArticleBody>
				</View>

				<View>
					<ArticleTitle>{dict.body.academics.title}</ArticleTitle>
					<ArticleBody>
						{dict.body.academics.content.map((ac) => (
							<Text key={ac.date + ac.course}>
								{ac.date} | {ac.course} - {ac.university}
							</Text>
						))}
					</ArticleBody>
				</View>

				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1 }}>
						<ArticleTitle>{dict.body.technologies.title}</ArticleTitle>
						<ArticleBody>
							{dict.body.technologies.content.map((tech) => (
								<ListItem key={tech}>{tech}</ListItem>
							))}
						</ArticleBody>
					</View>

					<View style={{ flex: 1 }}>
						<ArticleTitle>{dict.body.languages.title}</ArticleTitle>
						<ArticleBody>
							{dict.body.languages.content.map((lang) => (
								<Text key={lang.language}>
									{lang.language} ({lang.level}){" "}
									{lang.school && <>- {lang.school}</>}
								</Text>
							))}
						</ArticleBody>
					</View>
				</View>

				<View>
					<ArticleTitle>{dict.body.courses.title}</ArticleTitle>
					<ArticleBody>
						{dict.body.courses.content.map((course) => (
							<Text key={course.date + course.school}>
								{course.date} | {course.name} - {course.school}
							</Text>
						))}
					</ArticleBody>
				</View>

				<View>
					<ArticleTitle>{dict.body.projects.title}</ArticleTitle>
					<ArticleBody>
						{dict.body.projects.content.map((project) => (
							<View key={project.description}>
								<Text>
									{project.date} |{" "}
									<Link src={project.link.src}>{project.link.text}</Link>
								</Text>
								<Text>{project.description}</Text>
							</View>
						))}
					</ArticleBody>
				</View>
			</View>
		</Page>
	);
};

const styles = StyleSheet.create({
	page: {
		display: "flex",
		flexDirection: "column",
		gap: 18,
		paddingHorizontal: 48,
		fontFamily: "GeistMono",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
	},
	headerTitle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
		paddingHorizontal: 8,
		paddingVertical: 16,
		backgroundColor: "black",
		color: "white",
	},
	contacts: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		fontSize: 9,
	},
	body: {
		display: "flex",
		flexDirection: "column",
		gap: 18,
	},
});
