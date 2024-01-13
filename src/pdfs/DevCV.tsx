import { Font, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { ArticleBody, ArticleTitle, Link, ListItem } from "../components";

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

export const DevCV = ({ lang = "pt" }: { lang: "en" | "pt" }) => {
	const dictionary = dicts[lang];

	return (
		<Page size="A4" style={styles.page}>
			<View style={styles.header}>
				<View style={styles.headerTitle}>
					<Text style={{ fontSize: 16 }}>Gabriel Vitor dos Santos Frasão</Text>
					<Text style={{ fontSize: 12 }}>{dictionary.title}</Text>
				</View>
			</View>

			<View style={styles.contacts}>
				<View style={{ display: "flex", alignItems: "center", gap: 4 }}>
					<Text>{dictionary.contacts.number}</Text>

					<Link src="mailto:gabrielvitor.frasao@gmail.com">
						gabrielvitor.frasao@gmail.com
					</Link>

					<Link src="https://www.linkedin.com/in/gabriel-vs-frasao">
						LINKEDIN: gabriel-vs-frasao
					</Link>

					<Link src="https://github.com/gabe-frasz">GITHUB: gabe-frasz</Link>
				</View>
			</View>

			<View style={{ width: "100%", height: 2, backgroundColor: "black" }} />

			<View style={styles.body}>
				<View>
					<ArticleTitle>{dictionary.body.objective.title}</ArticleTitle>
					<ArticleBody as="text">
						{dictionary.body.objective.content}
					</ArticleBody>
				</View>

				<View>
					<ArticleTitle>{dictionary.body.qualifications.title}</ArticleTitle>
					<ArticleBody as="text">
						{dictionary.body.qualifications.content}
					</ArticleBody>
				</View>

				<View>
					<ArticleTitle>{dictionary.body.experience.title}</ArticleTitle>
					<ArticleBody>
						{dictionary.body.experience.content.map((ex) => (
							<View key={ex.company + ex.date}>
								<Text>
									{ex.date} | {ex.company}
									<Link src={ex.link.src}>({ex.link.text})</Link>
								</Text>
								<Text>{ex.companyDescription}</Text>
								<Text>{ex.jobTitle}</Text>
								<ListItem>{ex.jobDescription}</ListItem>
							</View>
						))}
					</ArticleBody>
				</View>

				<View>
					<ArticleTitle>{dictionary.body.academics.title}</ArticleTitle>
					<ArticleBody>
						{dictionary.body.academics.content.map((ac) => (
							<Text key={ac.date + ac.university}>
								{ac.date} | {ac.course} - {ac.university}
							</Text>
						))}
					</ArticleBody>
				</View>

				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1 }}>
						<ArticleTitle>{dictionary.body.technologies.title}</ArticleTitle>
						<ArticleBody>
							{dictionary.body.technologies.content.map((tech) => (
								<ListItem key={tech}>{tech}</ListItem>
							))}
						</ArticleBody>
					</View>

					<View style={{ flex: 1 }}>
						<ArticleTitle>{dictionary.body.languages.title}</ArticleTitle>
						<ArticleBody>
							{dictionary.body.languages.content.map((lang) => (
								<Text key={lang.language}>
									{lang.language} ({lang.level}){" "}
									{lang.school && <>- {lang.school}</>}
								</Text>
							))}
						</ArticleBody>
					</View>
				</View>

				<View>
					<ArticleTitle>{dictionary.body.courses.title}</ArticleTitle>
					<ArticleBody>
						{dictionary.body.courses.content.map((course) => (
							<Text key={course.date + course.school}>
								{course.date} | {course.name} - {course.school}
							</Text>
						))}
					</ArticleBody>
				</View>

				<View>
					<ArticleTitle>{dictionary.body.projects.title}</ArticleTitle>
					<ArticleBody>
						{dictionary.body.projects.content.map((project) => (
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
		gap: 20,
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
		gap: 20,
	},
});

const dicts = {
	pt: {
		title: "Desenvolvedor Web Full-Stack",
		contacts: {
			number: "(11) 98808-9728",
		},
		body: {
			objective: {
				title: "OBJETIVO",
				content:
					"Aplicar meus conhecimentos para criar soluções testáveis, escaláveis e de fácil manutenção em todas as áreas do desenvolvimento web. Busco constantemente aprimorar minhas habilidades, comprometendo-me com a inovação e a adoção de boas práticas. Estou empenhado em construir uma carreira sólida, contribuindo para o sucesso da equipe e impulsionando o crescimento da empresa por meio do meu entusiasmo pela aprendizagem contínua e pela busca de excelência técnica.",
			},
			qualifications: {
				title: "RESUMO DAS QUALIFICAÇÕES",
				content:
					"Desenvolvedor web autodidata com dois anos de experiência, focado em gerar resultados. Atualmente, estou em busca de oportunidades dinâmicas para aprimorar ainda mais minhas habilidades. Possuo um sólido conhecimento em tecnologias modernas, visando maior eficiência no desenvolvimento. Apaixonado por tecnologia, gosto de trabalhar em equipe e tenho uma mentalidade de aprendizado contínuo.",
			},
			experience: {
				title: "EXPERIÊNCIA PROFISSIONAL",
				content: [
					{
						date: "2022 - hoje",
						company: "Ence Studio",
						link: { text: "@__ence", src: "https://instagram.com/__ence" },
						companyDescription: "Empresa focada em UI/UX Design.",
						jobTitle: "Desenvolvedor Web",
						jobDescription:
							"Responsável pela criação de websites, visando construir um produto que atenda às necessidades do cliente, trabalhando em conjunto com o designer da equipe.",
					},
				],
			},
			academics: {
				title: "FORMAÇÃO ACADÊMICA",
				content: [
					{
						date: "2021 - 2022",
						course: "Ensino Médio",
						university: "EMEFM Professor Linneu Prestes",
					},
					{
						date: "2024 - hoje",
						course: "Bacharelado em Ciência da Computação",
						university: "Senac",
					},
				],
			},
			technologies: {
				title: "TECNOLOGIAS & HARD SKILLS",
				content: [
					"TypeScript",
					"React, Next.js",
					"Node.js",
					"Git, GitHub",
					"Testes unitários e E2E",
					"REST APIs",
				],
			},
			languages: {
				title: "IDIOMAS",
				content: [
					{
						language: "Inglês",
						level: "C1 level",
						school: "Cultura Inglesa",
					},
				],
			},
			courses: {
				title: "CURSOS",
				content: [
					{
						date: "2021",
						name: "Aprender a Empreender",
						school: "Sebrae",
					},
					{
						date: "2022",
						name: "Desenvolvimento Web",
						school: "Rocketseat",
					},
					{
						date: "2022",
						name: "Ciência da Computação (CS50)",
						school: "Harvard",
					},
					{
						date: "2023",
						name: "Ciência da Computação",
						school: "Descomplica",
					},
				],
			},
			projects: {
				title: "PROJETOS EM DESTAQUE",
				content: [
					{
						date: "2022",
						link: { text: "Inova Alpin", src: "https://inovaalpin.com" },
						description: "Website de apresentação da Inova Alpin.",
					},
					{
						date: "2022",
						link: { text: "Ence portfólio", src: "https://encestudio.com" },
						description: "Website de portfólio da Ence Studio.",
					},
				],
			},
		},
	},
	en: {
		title: "Full-Stack Web Developer",
		contacts: {
			number: "+55 (11) 98808-9728",
		},
		body: {
			objective: {
				title: "OBJECTIVE",
				content:
					"Apply my knowledge to create testable, scalable and easily maintained solutions in all areas of web development. I constantly seek to improve my skills, committing myself to innovation and the adoption of good practices. I am committed to building a solid career, contributing to the team's success and driving the company's growth through my enthusiasm for continuous learning and the pursuit of technical excellence.",
			},
			qualifications: {
				title: "SUMMARY OF QUALIFICATIONS",
				content:
					"Self-taught web developer, with two years of experience, focused on generating results. I am currently looking for dynamic opportunities to further enhance my skills. I have solid knowledge of modern technologies, aiming for greater efficiency in development. Passionate about technology, I like working in a team and I have a continuous learning mindset.",
			},
			experience: {
				title: "PROFESSIONAL EXPERIENCE",
				content: [
					{
						date: "2022 - today",
						company: "Ence Studio",
						link: { text: "@__ence", src: "https://instagram.com/__ence" },
						companyDescription: "Company focused on UI/UX Design",
						jobTitle: "Web developer",
						jobDescription:
							"Responsible for creating websites, aiming to build a product that meets the client's needs, working together with the team's designer.",
					},
				],
			},
			academics: {
				title: "ACADEMIC EDUCATION",
				content: [
					{
						date: "2021 - 2022",
						course: "High School",
						university: "EMEFM Professor Linneu Prestes",
					},
					{
						date: "2024 - today",
						course: "Bachelor's degree in Computer Science",
						university: "Senac",
					},
				],
			},
			technologies: {
				title: "Technologies & Hard Skills",
				content: [
					"TypeScript",
					"React, Next.js",
					"Node.js",
					"Git, GitHub",
					"Unit and E2E tests",
					"REST APIs",
				],
			},
			languages: {
				title: "LANGUAGES",
				content: [
					{
						language: "Portuguese",
						level: "Native",
						school: "",
					},
					{
						language: "English",
						level: "C1 level",
						school: "Cultura Inglesa",
					},
				],
			},
			courses: {
				title: "COURSES",
				content: [
					{
						date: "2021",
						name: "Learning to undertake",
						school: "Sebrae",
					},
					{
						date: "2022",
						name: "Web Development",
						school: "Rocketseat",
					},
					{
						date: "2022",
						name: "Computer Science (CS50)",
						school: "Harvard",
					},
					{
						date: "2023",
						name: "Computer Science",
						school: "Descomplica",
					},
				],
			},
			projects: {
				title: "HIGHLIGHTED PROJECTS",
				content: [
					{
						date: "2022",
						link: { text: "Inova Alpin", src: "https://inovaalpin.com" },
						description: "Inova Alpin presentation website.",
					},
					{
						date: "2022",
						link: { text: "Ence portfolio", src: "https://encestudio.com" },
						description: "Ence Studio portfolio website.",
					},
				],
			},
		},
	},
};
