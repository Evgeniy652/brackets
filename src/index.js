module.exports = function check(str, bracketsConfig) {
	// your solution
	const result = recursionOfFinding(str, bracketsConfig);
  
	return result.length === 0;
  }
  
  function recursionOfFinding(originStr, bracketsConfig) {
	let str = originStr;
  
	bracketsConfig.forEach(element => {
	  const fullBracketsStr = element.join('');
  
	  str = recursionOfReplace(str, fullBracketsStr);
	});
  
	if (originStr !== str && str.length !== 0) {
	  return recursionOfFinding(str, bracketsConfig);
	} else {
	  return str;
	}
  }
  
  function recursionOfReplace(str, full) {
	if (str.includes(full)) {
	  str = str.replace(full, '');
	  return recursionOfReplace(str, full);
	} 
  
	return str;
  }