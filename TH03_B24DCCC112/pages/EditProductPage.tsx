import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductForm from '../components/ProductForm';
import type { Product } from '../context/ProductContext';

function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const { products, updateProduct } = useProducts();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p>Không tìm thấy sản phẩm</p>;
  }

  const handleSubmit = (values: Omit<Product, 'id'>) => {
    updateProduct({ ...product, ...values });
    navigate('/');
  };

  return (
    <div>
      <h2>Chỉnh sửa sản phẩm</h2>
      <ProductForm initialValues={product} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditProductPage;
