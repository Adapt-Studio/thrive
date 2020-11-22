import Head from 'next/head'
import Header from './header'
import Footer from './footer'
export default function (props) {
	return (
	<>
	<Head>
	<title>Cafe Thrive</title>
	<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
		<link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"/>
	</Head>
	<Header/>
		{props.children}
	<Footer/>
	</>
	)
}
