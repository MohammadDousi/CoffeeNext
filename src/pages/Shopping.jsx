import { useEffect } from "react";

export default function Shopping() {
 
  useEffect(() => {
    document.title = "کافه عربیکا - فروشگاه";
  }, []);

  return <div>Shopping</div>;
}
