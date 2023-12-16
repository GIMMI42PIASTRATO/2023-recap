import PropTypes from "prop-types";
import style from "./Panel1.module.css";

export default function Background({ children }) {

    handleScroll = (event) => {
        
    }

    return (
        <div className={style.backgroundContainer} onScroll={() => }>
            <div className={style.year}>2023</div>
            <span className={style.title}>{children}</span>
        </div>
    );
}

Background.propTypes = {
    children: PropTypes.node.isRequired,
};
