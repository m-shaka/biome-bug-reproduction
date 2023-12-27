function fun<T>(
	fn: (args: {
		a: string
		b: string
	}) => void,
) {
	fn({ a: "a", b: "b" })
}

fun((args: { a: string; b: string }) => {
	return args
})
