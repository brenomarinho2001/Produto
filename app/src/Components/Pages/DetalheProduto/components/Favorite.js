import { useState } from 'react';
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

export default function Favorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  const onChange = (favorite) => {
    setIsFavorite(favorite);
  };

  return (
    <>
      {
        isFavorite
          ? <IoStarSharp className='favicon' size={32} onClick={() => onChange(false)} />
          : <IoStarOutline className='favicon' size={32} onClick={() => onChange(true)} />
      }
    </>
  );
}
