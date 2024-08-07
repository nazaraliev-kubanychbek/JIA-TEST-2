import styles from './VideosSection.module.scss';
import border1 from '@img/videoSec1.svg'
import border2 from '@img/videoSec2.svg'
import border3 from '@img/videoSec3.svg'
import border_response1 from '@img/border_response.svg'
import border_response_mobile1 from '@img/border_response_mobile.svg'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ReactPlayer from 'react-player';
import bifLogo from './img/bifLogo.svg';
import greenLogo from './img/greenLogo.svg';

export const VideosSection = () => {
    const lang = useSelector(s => s.reducer.lang);
    const [videoData, setVideoData] = useState([]);
    const [logo, setLogo] = useState({});

    useEffect(()=>{
        axios(`https://bif.webtm.ru/${lang}/api/v1/base/video/`)
        .then(({data}) => setVideoData(data));
    }, [lang]);
    useEffect(()=>{
        axios('https://bif.webtm.ru/ru/api/v1/base/logo/')
        .then(({data})=> setLogo(data[0]))
        .catch((error) => {
          setLogo({})
        });
    }, [])
    return (
        <section className={styles.container}>
            <div className={styles.whiteBlock}>
                <div className={'container'+' '+styles.center}style={{position:'relative'}}>
<img src={border1} alt="" className={styles.border1} />
<img src={border2} alt="" className={styles.border2} />
<img src={border3} alt="" className={styles.border3} />
<img src={border_response1} alt="" className={styles.border_response} />
<img src={border_response_mobile1} alt="" className={styles.border_response_mobile} />
<img src={bifLogo} alt="" className={styles.bifLogo} />
{
    logo.logo_2
    ? <img src={greenLogo} alt="" className={styles.greenLogo} />
    : ''
}


{
    videoData.map((item,idx)=>{
        return idx % 2 === 0
        ? <div className={styles.blockVideo}>
        <div className={styles.text}>
            <h2>{item.title}</h2>
            <p dangerouslySetInnerHTML= {{__html:item.descriptions}}>

            </p>
        </div>
       <ReactPlayer
       controls={true}
       url={item.url}
    width={
        window.screen.width > 768
        ? '640px'
        : '100%'
    }
    position={'relative'}
    zIndex={2}
/>


    </div>
    :  <div className={styles.blockVideo}>
    <ReactPlayer
       controls={true}
       url={item.url}
       width={
        window.screen.width > 768
        ? '640px'
        : '100%'
    }
    position={'relative'}
    zIndex={2}
       />

    <div className={styles.text}>
        <h2>{item.title}</h2>
        <p dangerouslySetInnerHTML= {{__html:item.descriptions}}>
            </p>
    </div>
</div>
    })
}

                </div>
            </div>

        </section>
    );
}
