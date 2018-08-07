

export const cache = {
	maxAge:3 * 24 * 3600 * 1000,
	get(key) {
		let item = localStorage.getItem(key);
        if(!item) return undefined ;
        item = JSON.parse(item);
		let tempTime = new Date().getTime() - item.time ;
		if(tempTime > this.maxAge) {
			return undefined ;
		} else {
			return item.value
		}
	},
	set(key,value) {
        let date = new Date().getTime();
        let newValue = JSON.stringify({
            value:value,
            time:date
        });
		localStorage.setItem(key,newValue);
	}
}