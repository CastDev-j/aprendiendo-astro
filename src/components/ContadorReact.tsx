import { useState, type FC } from "react";

const ContadorReact: FC<{ valorInicial: number }> = ({ valorInicial }) => {
  const [valor, setValor] = useState(valorInicial);

  const incrementar = () => {
    setValor(valor + 1);
  };

  const decrementar = () => {
    setValor(valor - 1);
  };

  return (
    <div className={"flex flex-col gap-2 items-center justify-center"}>
      {valor}
      <div className="flex gap-2">
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </div>
  );
};

export default ContadorReact;
