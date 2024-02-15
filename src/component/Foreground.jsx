import React, { useRef } from 'react';
import Cards from './Cards';

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: 'this is the background color of the card that willbe displayed',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
    {
      desc: 'this is the background color of the card that willbe displayed',
      filesize: '.9mb',
      close: false,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'blue' },
    },
    {
      desc: 'this is the background color of the card that willbe displayed',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
  ];
  return (
    <div
      ref={ref}
      className=' fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'
    >
      {data.map((item) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
