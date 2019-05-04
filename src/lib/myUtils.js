const myUtils = {

	jsonFilter(jsonSource, filterArray) {
	    return Object.keys(jsonSource)
	      .filter(key => filterArray.includes(key))
	      .reduce((obj, key) => {
	        obj[key] = jsonSource[key];
	        return obj;
	      }, {});
	}
}

export default myUtils