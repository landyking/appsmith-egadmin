export default {
	checkBaseURL:async ()=>{
		if(!appsmith.store.baseURL){
			await navigateTo("Setup")
		}
	},
	reloadDataAndResetTable:async (clearEditor=false)=>{
		get_single_object.clear()
		const arr=[];
		arr.push(all_object_kinds.run())
		arr.push(list_objects.run())
		await Promise.all(arr)
		resetWidget("kinds_table",true)
		resetWidget("Select1",true)
		if(clearEditor){
			YamlEditor.clear()
		}
	},
	loadKindAndCount:()=>{
		const kindAndCount=all_object_kinds.data.map(kind=>{
			const count=list_objects.data.filter(o=>o.kind==kind).length;
			return {kind,count}
		});
		return kindAndCount;
	},
	getKindObjectsOptions:(kind)=>{
		return list_objects.data
		.filter(it=>it.kind==kind)
		.map(it=>({label:it.name,value:it.name}))
	},
	apiBaseURL: () => {
		return appsmith.store.baseURL;
	},
	closeModalAndReloadTable:async () => {
		closeModal("create_modal");
		await this.reloadDataAndResetTable()
	},
	handleObjectChange:async ()=>{
		get_single_object.clear();
		const selected=Select1.selectedOptionValue||""
		if(!_.isEmpty(selected)){
			const data=await get_single_object.run()
			YamlEditor.setContent(data)
			return data
		}else{
			YamlEditor.clear()
			return ""
		}
	}
}