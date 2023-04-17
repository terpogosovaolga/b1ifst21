import React from "react";

function Sort({sorts, activeIndex}) {

    const [activeSpan, setActiveSpan] = React.useState(activeIndex);
    // false - закрыто, true - открыто
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleSort = (i) => {
        setActiveSpan(i);
        setIsOpen(false);

    }
    return (
            <div className="sort">
                <span onClick={() => setIsOpen(true)}>{sorts[activeSpan].toUpperCase()} <i className="fa-solid fa-chevron-down"></i></span>


                {
                    isOpen && 
                    <div className="select-sort">
                        {
                            sorts.map((s, i) => <div key={i} onClick={() => toggleSort(i)}>{s.toUpperCase()}</div>)
                        }
                    </div>
                }
            </div>
    );
}

export default Sort;