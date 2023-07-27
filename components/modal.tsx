type ModalProps = {
  text?: string;
};

export default function Modal({ text }: ModalProps) {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}
