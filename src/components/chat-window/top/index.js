import React, { memo } from 'react';
import { useMediaQuery } from '../../../misc/custom-hooks';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Icon } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';
import RoomInfoBtnModal from './RoomInfoBtnModal';

const ChatTop = () => {
  const name = useCurrentRoom(v => v.name);
  const isMobile = useMediaQuery('(max-width: 992px)');
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h4>
        <Icon
          componentClass={Link}
          to="/"
          icon="arrow-circle-left"
          size="2x"
          className={
            isMobile
              ? 'd-inline-block p-0 mr-2 text-blue link-unstyled'
              : 'd-none'
          }
        />
        <span className="text-disappear">{name}</span>
      </h4>
      <ButtonToolbar className="ws-nowrap">Todo</ButtonToolbar>
      <div className="d-flex justify-between align-items-center ">
        <RoomInfoBtnModal />
      </div>
    </div>
  );
};

export default memo(ChatTop);
