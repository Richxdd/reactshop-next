import { useContext } from 'react';
import ProductDetail from '@containers/ProductDetail';
import ProductList from '@containers/ProductList';
import AppContext from '@context/AppContext';

export default function Home() {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.detailIsOpen && <ProductDetail />}

      <ProductList />
    </>
  );
}
