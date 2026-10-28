var rc_toggle = 0x38;
function encode_rc6(adr, cmd) {
	const bit2 = Uint8Array.fromHex("586898A8");
	const a = Uint8Array.fromHex("5D10FE28560011223344112233446565800E");
	rc_toggle = rc_toggle ^ 0xf0;
	let word = (adr << 8) + cmd;
	a[5] = rc_toggle;
	for (let i = 13; i > 5; i--) {
		a[i] = bit2[word & 3];
		word >>= 2;
	}
	return a;
}

function encode_nec(adr, cmd) {
	const a = Uint8Array.fromHex("5815A111aaaaaaaaAAAAAAAAaaaaaaaaAAAAAAAAccccccccCCCCCCCCccccccccCCCCCCCC827FA1A06D6D8005");
	let word = ((255 - cmd) << 24) + (cmd << 16) + ((255 - adr) << 8) + adr;
	for (let i = 4; i < 36; i++) {
		a[i] = word & 1 ? 0x88 : 0xA0;
		word >>= 1;
	}
	return a;
}

function encode_sirc20(cmd, adr, ext) {
	const bit2 = Uint8Array.fromHex("A8D4B4DA");
	const a = Uint8Array.fromHex("5318F4001122334455667788992B800C");
	let word = (ext << 12) + (adr << 7) + cmd;
	for (let i = 3; i < 13; i++) {
		a[i] = bit2[word & 3];
		word >>= 2;
	}
	return a;
}
