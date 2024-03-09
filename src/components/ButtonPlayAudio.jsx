import { useEffect, useState } from "react"
import { usePlayerStore } from "../store/playerStore"
import "../styles/buttonplaystyle.css"

import {
    URL_SONG_CYBERPUNK,
    URL_SONG_EDGERUNNERS,
    URL_SONG_PHANTOMLIBERTY,
} from "../constants/urls.js";


const ButtonPlayAudio = () => {

    const [audioCyberpunk] = useState(typeof Audio !== "undefined" && new Audio(URL_SONG_CYBERPUNK));
    const [audioEdgerunners] = useState(typeof Audio !== "undefined" && new Audio(URL_SONG_EDGERUNNERS));
    const [audioPhantomLiberty] = useState(typeof Audio !== "undefined" && new Audio(URL_SONG_PHANTOMLIBERTY));
    const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)

    useEffect(() => {
        isPlaying
            ? playAudio(currentMusic)
            : pauseAudio()
    }, [isPlaying, currentMusic, audioCyberpunk, audioEdgerunners, audioPhantomLiberty])

    const playAudio = (currentMusic) => {
        pauseOtherAudios(currentMusic)
        switch (currentMusic) {
            case "cyberpunk2077":
                audioCyberpunk.play()
                break;
            case "edgerunners":
                audioEdgerunners.play()
                break;
            case "phantomliberty":
                audioPhantomLiberty.play()
                break;
            default:
                break;
        }
    }



    const pauseAudio = () => {
        audioCyberpunk.pause()
        audioEdgerunners.pause()
        audioPhantomLiberty.pause()
    }

    const pauseOtherAudios = (currentMusic) => {
        switch (currentMusic) {
            case "cyberpunk2077":
                audioEdgerunners.pause()
                audioPhantomLiberty.pause()
                break;
            case "edgerunners":
                audioCyberpunk.pause()
                audioPhantomLiberty.pause()
                break;
            case "phantomliberty":
                audioCyberpunk.pause()
                audioEdgerunners.pause()
                break;
            default:
                break;
        }
    }

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }


    return (
        <div className="btn-play-audio glitch-container" onClick={handleClick}>
            <a>
                <div className="flex flex-row">
                    Ambient Audio &nbsp;
                    {!isPlaying ? <img
                        className="play-icon"
                        src="/icons/play-icon.svg"
                        alt="play"
                        id="btn-play"
                    /> : <img
                        className="pause-icon"
                        src="/icons/pause-icon.svg"
                        alt="pause"
                        id="btn-pause"
                    />}


                </div>
            </a>
        </div>
    );
};

export default ButtonPlayAudio;

