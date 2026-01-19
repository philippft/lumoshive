import NavbarButton from "./NavbarButton";
import Label from "./Label";

export default function SplitRight () {
    return (
            <div className="split__content">
                <h3 className="split__title">Recommended slicing approach</h3>
                <ul className="list">
                    <Label text=" Start from layout: container, grid, split" />
                    <Label text=" Extract repeated UI: buttons, cards, badges" />
                    <Label text=" Use props for text and variants" />
                    <Label text=" Keep CSS modular: component blocks" />
                </ul>
                <div className="split__cta">
                    <NavbarButton text="View pricing" className="btn btn--secondary" href="#pricing" />
                    <NavbarButton text="Read FAQ" className="btn btn--ghost" href="#faq" />
                </div>
            </div>
    )
}