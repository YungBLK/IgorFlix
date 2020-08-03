import React from 'react';



let ButtonLink = (props) => {


    return(
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}


export default ButtonLink;