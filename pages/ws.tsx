import Modal from '@/components/modal';
import { cls } from '@/libs/utils';
import { useState } from 'react';

export default function Ws() {
  const [reservedTime, setReservationTime] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Modal title={'뚝딱'} subText={'예약확정하시겠습니까?'} setIsOpen={setIsOpen} setTime={setReservationTime} />
  </div>;
}
