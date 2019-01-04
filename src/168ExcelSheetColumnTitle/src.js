const convertToTitle = n => {
	return n === 0 ? "" : convertToTitle(~~(--n / 26)) + String.fromCharCode('A'.charCodeAt() + (n % 26));
}