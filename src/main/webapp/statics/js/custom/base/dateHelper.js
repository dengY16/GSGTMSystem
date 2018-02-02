function formatterDate(date,type) {
		var day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
		var month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0"
		+ (date.getMonth() + 1);

		if(type=='start'){
		return date.getFullYear() + '-' + month + '-01';
		}
		if(type=='end'){
		return date.getFullYear() + '-' + month + '-' + day;
		}
}