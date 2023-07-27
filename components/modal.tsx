import Button from './button';

type ModalProps = {
  title: string;
  subText: string;
};

export default function Modal({ title, subText }: ModalProps) {
  return (
    <div className="flex justify-center items-center h-screen fixed z-[2]">
      <div className="bg-black h-screen bg-opacity-40 w-screen flex justify-center items-center fixed top-0 left-0">
        <div className="bg-white bg-opacity-100 flex flex-col justify-between items-center border rounded-3xl w-[480px] h-96 shadow-xl">
          <h2 className="text-3xl mt-12 text-violet-700">{title}</h2>
          <span className="text-xl font-semibold">{subText}</span>
          <div className="flex w-1/2 mb-10 justify-between items-center">
            <Button text="취소" cancel />
            <Button text="확인" />
          </div>
        </div>
      </div>
    </div>
  );
}
