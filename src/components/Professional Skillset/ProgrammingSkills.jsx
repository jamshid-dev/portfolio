
import classes from "./programmingSkills.module.css";
import { CPP, Python, MongoDB, FireBase, ReactJS, NodeJs, JavaScript, Redux } from "../asset/svg/svg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const skills = [CPP, Python, FireBase, ReactJS, JavaScript, NodeJs, MongoDB, Redux];
const skillNames=["C++","Python","Firebase","ReactJs","JavaScript","NodeJs","MongoDB","Redux"];
const ProgrammingSkills = (props) => {
    const { t } = useTranslation();

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard}>
            <h1 style={{color:nonThemeColor}}>{t("Programming")} <span style={{ color:uiColor}}>{t("Pro")}</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} style={{borderColor:uiColor}} key={index}>
                        <Item />
                        <span className={classes.skillName}>{skillNames[index]}</span>
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;