import React from "react";

const useRender = () => {
    const [render, setRender] = React.useState();

    return [render, setRender];
}

export default useRender;