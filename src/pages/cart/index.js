import React from "react";

import { Container, ProductTable, Total } from "./styles";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

export default function cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-olympikus-day-feminino/12/D22-2026-012/D22-2026-012_zoom2.jpg?ts=1571405177&ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tenis</strong>
              <span>R$129,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="buton">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1111,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
