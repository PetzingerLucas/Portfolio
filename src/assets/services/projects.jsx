/* eslint-disable react/react-in-jsx-scope */
import { FaReact } from 'react-icons/fa';
import img4 from './img/solar-system.png';
import img3 from './img/tryunfo.png';
import img2 from './img/trybetunes.png';
import img1 from './img/online-store.png';

const projects = [
  {
    name: 'Online Store',
    tools: <FaReact />,
    image: img1,
    link: 'https://lucas-petzinger-online-store-project.vercel.app/',
  },

  {
    name: 'TrybeTunes',
    tools: <FaReact />,
    image: img2,
    link: 'https://trybetunes-project-lucaspetzinger.vercel.app/',
  },

  {
    name: 'Tryunfo',
    tools: <FaReact />,
    image: img3,
    link: 'https://lucas-petzinger-tryunfo-project.vercel.app/',
  },
  {
    name: 'Solar System',
    tools: <FaReact />,
    image: img4,
    link: '',
  },

];

export default projects;
