import React from "react";

import classes from "./degree.module.css";
import UniversityImg from "../../Data/coddycamp.jpg";

import Card from "../UI/Card";
import EducationData from "../../Data/EducationData"
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Degree(props) {
    const { t } = useTranslation();

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.degreeMain}>
            <h1 style={{ color: nonThemeColor }}>
                {t("Degree")}
            </h1>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img className="rounded-[700px]" src={UniversityImg} alt="degree" srcset="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{EducationData.couseStartYear} - {EducationData.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{EducationData.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{EducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {EducationData.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
            </div>
        </div>
    )
}

export default Degree;