//Example items list
class ExampleItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "hovered": null
        };
    }
    render() {
        let self = this;
        //For each item
        let contentItems = this.props.items.map(function (item, index) {
            let props = {
                "className": "docs-example-item " + item.className,
                "key": index,
                "onClick": function () {
                    return self.props.onClick(index);
                },
                "onMouseEnter": function (event) {
                    return self.setState({"hovered": index});
                },
                "onMouseLeave": function (event) {
                    return self.setState({"hovered": null});
                }
            };
            //Check for dark selected
            if (item.color === "grey") {
                props.className = props.className + " docs-example-item--dark";
            }
            //Check if this color is selected
            if (item.selected === true) {
                props.className = props.className + " docs-example-item--selected";
            }
            //Check the tooltip element
            let tooltip = null;
            if (self.state.hovered !== null && self.state.hovered === index) {
                tooltip = React.createElement("div", {"className": "docs-example-tooltip"}, item.text);
            }
            //Return the item element
            return React.createElement("div", props, tooltip);
        });
        //Return the content items container
        return React.createElement("div", {"className": "docs-example-items", "align": "center"}, contentItems);
    }
}

//Example component
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "color": null,
            "lightness": null
        };
    }
    renderStep1() {
        let self = this;
        let title = React.createElement("div", {"className": "siimple-h5"}, "1 - Choose a color");
        //Generate the example items props
        let content = React.createElement(ExampleItems, {
            "items": this.props.colors.palette.map(function (color, index) {
                return {
                    "className": "siimple--bg-" + color.name,
                    "selected": self.state.color === index,
                    "text": color.name,
                    "color": color.name
                };
            }),
            "onClick": function (index) {
                return self.setState({"color": index, "lightness": null}); 
            }
        });
        //Generate the first step props
        let stepProps = {
            "className": "docs-example-step"
        };
        //Return the first step of the example
        return React.createElement("div", stepProps, title, content);
    }
    renderStep2() {
        let self = this;
        let title = React.createElement("div", {"className": "siimple-h5"}, "2 - Choose the lightness of the color");
        //Get the selected color
        let color = (this.state.color !== null) ? this.props.colors.palette[self.state.color] : "";
        //Add all lightness colors
        let content = React.createElement(ExampleItems, {
            "items": this.props.colors.lightness.map(function (lightness, index) {
                return {
                    "color": color.name,
                    "className": (color !== "") ? "siimple--bg-" + color.name + lightness.modifier : "",
                    "selected": self.state.lightness === index,
                    "text": lightness.name
                };
            }),
            "onClick": function (index) {
                if (self.state.color !== null) {
                    return self.setState({"lightness": index});
                }
            }
        });
        //Generate the second step props
        let stepProps = {
            "className": "docs-example-step"
        };
        //Check if the step is disabled
        if (this.state.color === null) {
            stepProps.className = stepProps.className + " docs-example--disabled";
        }
        //Return the second step of the example
        return React.createElement("div", stepProps, title, content);
    }
    renderLeftSide() {
        return React.createElement(React.Fragment, {}, this.renderStep1(), this.renderStep2());
    }
    renderRightSide() {
        let title = React.createElement("div", {"className": "siimple-h5"}, "3 - Get the code");
        let content = null;
        let exampleProps = {
            "className": "docs-example-result"
        };
        //Generate the title for the example
        if (this.state.color !== null && this.state.lightness !== null) {
            //Get the current color and lightness
            let color = this.props.colors.palette[this.state.color].name + this.props.colors.lightness[this.state.lightness].modifier;
            //Render the example content
            content = React.createElement("div", {"className": "docs-example-result-content"},
                React.createElement("div", {"className": "siimple-h6"}, "Change the text color:"),
                React.createElement("div", {"className": "docs-example-preview siimple--color-" + color}, "Your " + color + " text."),
                React.createElement("pre", {"className": "siimple-pre"}, "<span class=\"siimple--color-" + color + "\">\n    Your " + color + " text.\n</span>"),
                React.createElement("div", {"className": "siimple-h6"}, "Change the background color:"),
                React.createElement("div", {"className": "docs-example-preview siimple--bg-" + color}, "Your " + color + " background."),
                React.createElement("pre", {"className": "siimple-pre"}, "<span class=\"siimple--bg-" + color + "\">\n    Your " + color + " background.\n</span>"),
                React.createElement("div", {})
            );
        }
        else {
            //Example not available
            exampleProps.className = exampleProps.className + " docs-example--disabled";
        }
        //Render the example content
        return React.createElement("div", exampleProps, title, content);
    }
    render() {
        //Generate the left side of the example
        let leftSideProps = {
            "className": "siimple-grid-col siimple-grid-col--5 siimple-grid-col--sm-12"
        };
        let leftSide = React.createElement("div", leftSideProps, this.renderLeftSide());
        //Generate the right side of the example
        let rightSideProps = {
            "className": "siimple-grid-col siimple-grid-col--7 siimple-grid-col--sm-12"
        };
        let rightSide = React.createElement("div", rightSideProps, this.renderRightSide());
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

