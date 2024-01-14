export type Dictionary = {
	header: {
		name: string;
		title: string;
	};
	contacts: {
		phone: string;
		email: {
			text: string;
			link: string;
		};
		linkedin: {
			text: string;
			link: string;
		};
		github: {
			text: string;
			link: string;
		};
	};
	body: {
		objective: {
			title: string;
			content: string;
		};
		qualifications: {
			title: string;
			content: string;
		};
		experience: {
			title: string;
			content: {
				date: string;
				company: string;
				link: {
					text: string;
					src: string;
				};
				companyDescription: string;
				jobTitle: string;
				jobDescription: string;
			}[];
		};
		academics: {
			title: string;
			content: {
				date: string;
				course: string;
				university: string;
			}[];
		};
		technologies: {
			title: string;
			content: string[];
		};
		languages: {
			title: string;
			content: {
				language: string;
				level: string;
				school: string;
			}[];
		};
		courses: {
			title: string;
			content: {
				date: string;
				name: string;
				school: string;
			}[];
		};
		projects: {
			title: string;
			content: {
				date: string;
				link: {
					text: string;
					src: string;
				};
				description: string;
			}[];
		};
	};
};
