import React from "react";

import extensions from "../../data/extensions";

function ExtensionList(props) {


    const extensionList = extensions.map(extension => {
        return (
            <tr key={extension.number}>
                <td>{extension.name}</td>
                <td>{extension.number}</td>
                <td>{extension.emai}</td>
            </tr>
        )
    })

    return (
        <table>
            <tbody>
                {extensionList}
            </tbody>
        </table>

    )
}

export default ExtensionList