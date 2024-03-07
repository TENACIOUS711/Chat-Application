import React, { useEffect, useRef, useState } from 'react';
import CreateRoomBtnModal from './DashBoard/CreateRoomBtnModal';
import DashBoardToggle from './DashBoard/DashBoardToggle';
import { Divider } from 'rsuite';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
  const topSideBarRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topSideBarRef.current) {
      setHeight(topSideBarRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="h-100 pt-2">
      <div ref={topSideBarRef}>
        <DashBoardToggle />
        <CreateRoomBtnModal />
        <Divider>Join room conversations</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};
export default Sidebar;
