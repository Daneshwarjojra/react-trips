import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function TotalTollPaid() {
  const products = useSelector((state) => state.products);
  let [addTotalTollPaid, seTotalTollPaid] = useState(0);

  useEffect(() => {
    products.forEach(element => {
      addTotalTollPaid += element.amount;
    });
    seTotalTollPaid(addTotalTollPaid);
  },[products]);
  
  return (
    <div className="totalTollPaid">
      {addTotalTollPaid}
    </div>
  )
}

export default TotalTollPaid;