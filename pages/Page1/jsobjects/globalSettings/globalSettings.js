export default {
	myVar2: {},
	apiBaseURL: () => {
		return "http://host.docker.internal:2381";
	},
	closeModalAndReloadTable: () => {
		closeModal("create_modal");
		list_objects.run();
	},
	myFun2: async () => {
		console.log(Input1.text)
	}
}