//Example component
class Example extends React.Component {
    constructor(props) {
        super(props);
        //Innitial state
        this.state = {
            "selectedColor": null,
            "hoveredColor": null,
            "selectedLightness": null,
            "hoveredLightness": null
        };
    }

    renderStepTitle(num, title) {
        return React.createElement("div", {"className": "siimple-h5"}, num, " - ", title);
    }

    renderStep1() {
        let self = this;
        let title = this.renderStepTitle("1", "Choose a color");
        //Add a box for each color in props
        let contentItems = this.props.colors.palette.map(function (color, index) {
            let props = {
                "className": "docs-example-item siimple--bg-" + color.name,
                "key": index,
                "onClick": function () {
                    return self.setState({"selectedColor": index, "selectedLightness": null});
                },
                "onMouseEnter": function (event) {
                    return self.setState({"hoveredColor": index});
                },
                "onMouseLeave": function (event) {
                    return self.setState({"hoveredColor": null});
                }
            };
            //Check for dark selected
            if (color.name === "grey") {
                props.className = props.className + " docs-example-item--dark";
            }
            //Check if this color is selected
            if (self.state.selectedColor === index) {
                props.className = props.className + " docs-example-item--selected";
            }
            //Check the tooltip element
            let tooltip = null;
            if (self.state.hoveredColor !== null && self.state.hoveredColor === index) {
                tooltip = React.createElement("div", {"className": "docs-example-tooltip"}, color.name);
            }
            return React.createElement("div", props, tooltip);
        });
        let content = React.createElement("div", {"className": "docs-example-items"}, contentItems);
        //Return the first step of the example
        return React.createElement("div", {"className": "docs-example-step"}, title, content);
    }

    renderStep2() {
        let self = this;
        let title = React.createElement("div", {"className": "siimple-h5"}, "2 - Choose the lightness of the color");
        //Add all variants
        let contentItems = this.props.colors.lightness.map(function (lightness, index) {
            let props = {
                "className": "docs-example-item",
                "key": index,
                "onClick": function () {
                    if (self.state.selectedColor !== null) {
                        return self.setState({"selectedLightness": index});
                    }
                },
                "onMouseEnter": function (event) {
                    return self.setState({"hoveredLightness": index});
                },
                "onMouseLeave": function (event) {
                    return self.setState({"hoveredLightness": null});
                }
            };
            //Add the selected color
            if (self.state.selectedColor !== null) {
                let color = self.props.colors.palette[self.state.selectedColor]
                props.className = props.className + " siimple--bg-" + color.name + lightness.modifier;
                //Check for dark selected
                if (color.name === "grey") {
                    props.className = props.className + " docs-example-item--dark";
                }
            }
            //Check if is selected
            if (self.state.selectedLightness === index) {
                props.className = props.className + " docs-example-item--selected";
            }
            let tooltip = null;
            if (self.state.hoveredLightness !== null && self.state.hoveredLightness === index) {
                tooltip = React.createElement("div", {"className": "docs-example-tooltip"}, lightness.name);
            }
            return React.createElement("div", props, tooltip);
        });
        let content = React.createElement("div", {"className": "docs-example-items"}, contentItems);
        let stepProps = {
            "className": "docs-example-step"
        };
        //Check if the step is disabled
        if (this.state.selectedColor === null) {
            stepProps.className = stepProps.className + " docs-example--disabled";
        }
        //Return the second step of the example
        return React.createElement("div", stepProps, title, content);
    }

    renderLeftSide() {
        return React.createElement(React.Fragment, {}, this.renderStep1(), this.renderStep2());
    }

    renderRightSide() {
        let title = React.createElement("div", {"className": "siimple-h5"}, "3 - See the result");
        let content = null;
        let exampleProps = {
            "className": "docs-example-result"
        };
        //Generate the title for the example
        if (this.state.selectedColor !== null && this.state.selectedLightness !== null) {
            let color = this.props.colors.palette[this.state.selectedColor];
            let lightness = this.props.colors.lightness[this.state.selectedLightness];
            let colorClass = "docs-example-result--" + color.name + "-" + lightness.name;
            //Render the example navbar
            let navbarTitle = React.createElement("div", {"className": "siimple-navbar-title"}, "Example");
            let navbarLink = React.createElement("div", {"className": "siimple-navbar-item"}, "Link");
            let exampleNavbar = React.createElement("div", {"className": "siimple-navbar siimple-navbar--fluid " + colorClass}, navbarTitle, navbarLink);
            //Render the example content
            let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            let contentText = React.createElement("div", {"className": "siimple-paragraph"}, text);
            let contentBtn = React.createElement("div", {"className": "siimple-btn " + colorClass}, "Action button");
            let exampleContent = React.createElement("div", {"className": "siimple-content siimple-content--fluid"}, contentText, contentBtn);
            //Render the example footer
            let footerText = "Footer text";
            let exampleFooter = React.createElement("div", {"className": "siimple-content siimple-content--fluid " + colorClass, "align": "center"}, footerText);
            //Render the example content
            content = React.createElement("div", {"className": "docs-example-result-content"}, exampleNavbar, exampleContent, exampleFooter);
        }
        else {
            //Example not available
            exampleProps.className = exampleProps.className + " docs-example--disabled";
        }
        //Render the example content
        return React.createElement("div", exampleProps, title, content);
    }

    render() {
        //Generate both sides of the example
        let props = {
            "className": "siimple-grid-col siimple-grid-col--6 siimple-grid-col--sm-12"
        };
        let leftSide = React.createElement("div", props, this.renderLeftSide());
        let rightSide = React.createElement("div", props, this.renderRightSide());
        //Return the example content
        return React.createElement(React.Fragment, {}, leftSide, rightSide);
    }
}

//Import colors data
utils.loadJSON("./assets/colors.json", function (error, colors) {
    let parent = document.getElementById("example");
    let props = {
        "colors": colors
    };
    //Render the example component
    ReactDOM.render(React.createElement(Example, props), parent); 
});

