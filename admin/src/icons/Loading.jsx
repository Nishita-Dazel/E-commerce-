import React from 'react';

const Loading = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="1em" height="1em" viewBox="0 0 24 24">
            <circle cx="12" cy="3" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScale0" fill="freeze" attributeName="r" begin="0;svgSpinners6DotsScale2.end-0.5s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" />
            </circle>
            <circle cx="16.5" cy="4.21" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScale1" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" />
            </circle>
            <circle cx="7.5" cy="4.21" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScale2" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="19.79" cy="7.5" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale3" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="4.21" cy="7.5" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale4" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="21" cy="12" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale5" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="3" cy="12" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale6" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="19.79" cy="16.5" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale7" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="4.21" cy="16.5" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale8" fill="freeze" attributeName="r" begin="svgSpinners6DotsScalea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="16.5" cy="19.79" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale9" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="7.5" cy="19.79" r="0" fill="currentColor"><animate id="svgSpinners6DotsScalea" fill="freeze" attributeName="r" begin="svgSpinners6DotsScaleb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle><circle cx="12" cy="21" r="0" fill="currentColor"><animate id="svgSpinners6DotsScaleb" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" />
            </circle>
        </svg>
    );
};

export default Loading;