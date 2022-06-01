

export const getDates = (dateStr) => {
	let date = new Date(dateStr);
	return  new Intl.DateTimeFormat("ru", { day: "2-digit", month: "long" , hour: "2-digit", minute: "2-digit" , hour12: false }).format(date);
};
