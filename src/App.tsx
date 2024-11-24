import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";


export const App = () => {
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(false);
    // useEffect
    const onClickCountUp = () => setNum(num + 1);
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    };

    useEffect(() => {
        if (num > 0 && num % 3 === 0) {
            isShowFace || setIsShowFace(true);
        } else {
            isShowFace && setIsShowFace(false);
        }
    }, [num]);


    return (
        <>
            <h1>React Test</h1>
            <ColorfulMessage color="red">
                "How are you?"
            </ColorfulMessage>
            <ColorfulMessage color="green">
                "I'm fine end you?"
            </ColorfulMessage>
            <button onClick={onClickCountUp}>ボタン</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>^ ^</p>}
        </>
    )
}