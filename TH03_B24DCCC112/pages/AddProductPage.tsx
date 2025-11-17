import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductForm from '../components/ProductForm';
import type { Product } from '../context/ProductContext';

function AddProductPage() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = (values: Omit<Product, 'id'>) => {
    addProduct(values);
    navigate('/');
  };

  return (
    <div>
      <h2>Thêm sản phẩm</h2>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddProductPage;
