'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AnchorButton = ({ label, url, target, styles, download,btnStyle}) => {
  const handleClick = () => {
    if (click) {
      click();
    }
    toast('Thanks for Downloading My Cv');
  };

  return (
    <>
    <a
      href={url}
      style={{ padding: '10px', ...styles }}
      target={target}
      rel='noreferrer'
      download={download}
      // onClick={handleClick}
      className={btnStyle}
    >
      {label}
    </a>
    </>
  );
};

export default AnchorButton