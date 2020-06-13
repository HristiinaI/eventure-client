import React from "react";

const Header = ({boardName}) => {
    return (
        <div className={"row"}>
            <p className={"page-header"}> {boardName} Dashboard🗂</p>
        </div>
    );
};

export default Header;
