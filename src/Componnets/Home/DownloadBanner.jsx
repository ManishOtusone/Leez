import React from 'react';
import DownloadBannerPic from '../../assets/DownloadBanner.png';

const DownloadBanner = () => {
  return (
    <div className="mt-14 px-4 sm:px-6 lg:px-12">
      <img
        src={DownloadBannerPic}
        alt="Download Banner"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default DownloadBanner;
