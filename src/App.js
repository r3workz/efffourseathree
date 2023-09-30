import React from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Home } from "./components/Home"
import { Cart } from "./components/Cart"

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"cart"} element={<Cart />} />
			</Routes>
		</>
	)
}

export default App
