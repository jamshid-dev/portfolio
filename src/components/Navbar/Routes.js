import React from "react";
import { useTranslation } from "react-i18next";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
function Routes(props) {
    const { t } = useTranslation();

    const toggleActive=(index)=>{
        const navs=document.getElementsByClassName("navs");
        console.log(navs.length);
        for(let i=0;i<navs.length;i++){
            navs[i].classList.remove("active");
        };
        navs[index].classList.add("active");
    }
    return (
        <>
        {/* For broswer router replace- 
            a -> Navlink
            href - to 
            # - / */}
        
            <a href="#home" onClick={props.onClick}>
                <div className="navs active" onClick={()=>toggleActive(0)}>{t("home")}</div>
            </a>
            <a href="#education" onClick={props.onClick}>
                <div className="navs" onClick={()=>toggleActive(1)}>{t("Education")}</div>
            </a>
            <a href="#projects" onClick={props.onClick}>
                <div className="navs" onClick={()=>toggleActive(2)}>{t("Projects")}</div>
            </a>
            <a href="#getInTouch" onClick={props.onClick}>
                <div className="navs" onClick={()=>toggleActive(3)}>{t("Get In Touch")}</div>
            </a>
            
        </>
    )
}
export default Routes;