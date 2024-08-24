export const convertGradeNumber = (year: number, old?: boolean) => {
	if (old) return "卒業生";

	if (year === 0) return "ペット";

	const currentMonth = new Date().getMonth() + 1;
	const currentYear =
		currentMonth < 4 ? new Date().getFullYear() - 1 : new Date().getFullYear();
	const diff = currentYear - year;
	switch (diff) {
		case 5:
			return "修士2年";
		case 4:
			return "修士1年";
		case 3:
			return "学士4年";
		case 2:
			return "学士3年";
		default:
			return "博士";
	}
};
