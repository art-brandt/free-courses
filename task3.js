/* Task 3 */
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);

function nod(k, m) {
  while (m !== 0) {
		m = k % (k = m);
	} 
  return k;
}

console.log(nod(a, b)); 
/* Put your code here */
