
const UUID_NAMES = {
	CookyHD: "94c7082c-9493-4c47-b12f-942b29d5b1a0",
	Cana_xd: "b80daffc-8bfc-4277-95c4-add2f90eab8a",
	MiminatorCraft: "848dea61-a142-42af-8778-8b1c2a242eb8",
}

if (global.getSetting("CustomCapes")) {
	CapeJS.addCapes(event => {
		event.register(UUID_NAMES.CookyHD, "cookyhd")
		event.register(UUID_NAMES.Cana_xd, "cana_xd")
		event.register(UUID_NAMES.MiminatorCraft, "miminatorcraft")
	})
}
