import './style.scss';

export default function PaiementTotal({
  isStudent,
}: {
  isStudent: boolean | null;
}) {
  const isStudentTest = () => {
    if (isStudent) {
      return `${40} €`;
    }
    return `${50} €`;
  };
  return (
    <div className="paiement-due">
      <div className="paiement-due__title">Total:</div>
      <div className="paiement-due__value">{isStudentTest()}</div>
    </div>
  );
}
