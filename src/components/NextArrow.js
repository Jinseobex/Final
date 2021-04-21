import React from "react";

    function NextArrow(props) {
        const {className, onClick} = props;
        return (
            <div
                className={className}
                onClick={onClick}>
                <img
                    src="/img/arrow_r.png" alt="arrow next"
                />
            </div>
        );
    }

export default NextArrow;