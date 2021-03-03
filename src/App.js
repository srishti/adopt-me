const Pet = ({ name, animal, breed }) => {
	return React.createElement(
		"div",
		{},
		React.createElement("h1", {}, name),
		React.createElement("h2", {}, animal),
		React.createElement("h2", {}, breed)
	);
};

const App = () => {
	return React.createElement(
		"div",
		{},
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {
			name: "Sheru",
			animal: "Dog",
			breed: "INDog",
		}),
		React.createElement(Pet, {
			name: "Maxi",
			animal: "Dog",
			breed: "German Shepherd",
		}),
		React.createElement(Pet, {
			name: "Ruby",
			animal: "Dog",
			breed: "Pomeranian",
		})
	);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
