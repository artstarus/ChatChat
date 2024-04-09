import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gradient-to-b from-yellow-800/50 to-blue-400/30 bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  );
};

export default Home;

/* STARTER HOME CODE FOR LATER <PROJECTS>
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  );
};

export default Home;</PROJECTS> */