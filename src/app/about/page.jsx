import Image from 'next/image';
import Me from '../../assets/iamges/_MG_0228.png'
import React from 'react';

export const metadata = {
  title: 'Me',
  description: '...',
}

const AboutPage = () => {
    return (
        <div>
         <h2>About Pages</h2>   
      <Image
      src={Me}
      alt=''
      width={400}
      height={300}
      ></Image>
        </div>
    );
};

export default AboutPage;