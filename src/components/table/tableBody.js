import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductList} from '../../actions/productListAction';

function TableBody() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  return (
    <tbody>
      {products.map((products, i) => {
        return (<tr key={products.id}>
          <td>{i+1}</td>
          <td>{products.toll_name}</td>
          <td>{products.address}</td>
          <td>{products.amount}</td>
        </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody;