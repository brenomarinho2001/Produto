import { useState } from 'react';

const options = [
  { name: 'P' },
  { name: 'M' },
  { name: 'G' },
  { name: 'G1' },
  { name: 'G2' },
  { name: 'DIGITAL' }
];

export default function SelectSize() {
  const [selected, setSelected] = useState(null);
  
  const changeSelected = (option) => {
    if (option === selected) {
      setSelected(null);
      return;
    }

    setSelected(option);
  };

  return (
    <div className='buttoncontainer'>
      {
        options.map(option => (
          <button
            key={option.name}
            className={`buttontam ${(selected === option.name) ? 'selected' : 'notselect'}`}
            onClick={() => changeSelected(option.name)}
          >
            {option.name}
          </button>
        ))
      }
    </div>
  );
}
