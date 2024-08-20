export const convertGradeNumber = (grade: number, old?: boolean) => {
	if (old) return "卒業生";

	if (grade === 0) return "ペット";

	const currentMonth = new Date().getMonth() + 1;
	const currentYear =
		currentMonth < 4 ? new Date().getFullYear() - 1 : new Date().getFullYear();
	const diff = currentYear - grade;
	switch (diff) {
		case 6:
			return "修士2年";
		case 5:
			return "修士1年";
		case 4:
			return "学士4年";
		case 3:
			return "学士3年";
		default:
			return "博士";
	}
};
