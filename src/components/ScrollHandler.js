import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location }) => {
    useEffect(
        () => {
            const element = document.getElementById(location.hash.replace("#", ""));

            setTimeout(() => {
                window.scrollTo({
                    behavior: element ? "smooth" : "auto",
                    top: element ? element.offsetTop : 0
                });
            }, 100);
        }, [location]);

    return null;
};

export default withRouter(ScrollHandler);