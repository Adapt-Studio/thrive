import Image from 'next/image'
export default function () {
	return (
	<header className="w-screen h-24 flex justify-evenly items-end">
		<nav className="flex justify-evenly items-end space-x-24 -mr-24">
			<a href="#home">Home</a>
			<a href="#food">Food</a>
		</nav>
		<Image
			src="/icons/logo.png" 
			alt="Cafe Thrive Logo"
			width={200}
			height={60}
		/>
		<nav className="flex justify-evenly items-end space-x-24 -ml-24">
			<a href="#order">Order</a>
			<a href="#contact">Contact</a>
		</nav>
	</header>
	)
}
