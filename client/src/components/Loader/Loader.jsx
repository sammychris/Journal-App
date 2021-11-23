import React from "react";
// ======================================Start LoaderComponent=======================================//
export default function ({isLoading}) {
    if(isLoading) {
        return (
            <div id="overlay">
                <i className="fa fa-spinner fa-spin spin-big"></i>
            </div>
        )
    }
    return (<></>)
}
// ======================================End LoaderComponent=======================================//