import { useEffect } from 'react';
import { AdSenseContainer } from '../styles';

declare global { interface Window { adsbygoogle: any; } };

const AdSense = () => {

    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {
            console.log(e)
        }

    }, []);

    return (

        <AdSenseContainer>
            <ins className="adsbygoogle"
                style={{ display: 'inline-block', width: '360px', height: '800px' }}
                data-ad-client="ca-pub-9724612885057354"
                data-ad-slot='5660165681'
            >
            </ins>
        </AdSenseContainer>

    );
};

export default AdSense;