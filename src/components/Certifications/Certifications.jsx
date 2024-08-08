import React from "react";

import classes from "./certifications.module.css";
import CreateCertificate from "./CreateCertificate";
import CertificatesData from "../../Data/CertificatesData"
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Certifications = (props) => {
    const { t } = useTranslation();

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    let certificationsList = CertificatesData.certificationsList;

    return (
        <React.Fragment>
            <h1 style={{color:nonThemeColor}}>{t("Certifications")}</h1>
            <div className={classes.certificateCard}>
                {certificationsList.map((item, index) => {
                    return (
                        <CreateCertificate key={index} item={item}/>
                    )
                })}
            </div>
        </React.Fragment>
    )
}
export default Certifications;