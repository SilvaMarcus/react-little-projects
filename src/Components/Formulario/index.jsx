import { TextComponent } from "../TextComponent";
import './index.css'

export const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card</h2>
        <TextComponent label="Name" placeholder="Type your name" />
        <TextComponent label="Cargo" placeholder="Type your Position" />
        <TextComponent label="E-mail" placeholder="Type your e-mail" />
      </form>
    </section>
  );
};
