import React from "react";
import Sort from './Sort';
function Filters({categories, activeIndex}) {

    const [activeSpan, setActiveSpan] = React.useState(activeIndex);

    return (
        <div className="filter">
            <div className="filters">
                {
                    categories.map((cat, i) => <span key={i} className = {activeSpan == i ? "active" : ""} onClick={() => setActiveSpan(i)}>{cat.toUpperCase()}</span>)
                }
            </div>
            <Sort sorts={["по цене", "по дате", "по популярности", "по количеству мест"]} activeIndex={0} />
        </div>
    );
}

export default Filters;