"use client";

import {useInView} from "framer-motion"
import {cloneElement, useRef} from "react";

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
    className?: string
    isInviewState: {
        trueState: string
        falseState: string
    }
}

const LayoutEffect = ({
                          children,
                          className,
                          isInviewState: {trueState = "", falseState = ""}
                      }: Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    return cloneElement(children, {
        ref,
        className: `${children.props.className || ""} ${className || ""} ${isInView ? trueState : falseState}`
    })
}

export default LayoutEffect