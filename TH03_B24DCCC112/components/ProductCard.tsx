import { Link, useNavigate } from 'react-router-dom';
import { useProducts, type Product } from '../context/ProductContext';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      deleteProduct(product.id);
    }
  };

  return (
    <div>
      <h3>
        <Link to={`/products/${product.id}`}>{product.ten}</Link>
      </h3>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia}</p>
      <p>Số lượng: {product.soLuong}</p>
      <button onClick={() => navigate(`/edit/${product.id}`)}>Sửa</button>
      <button onClick={handleDelete}>Xóa</button>
    </div>
  );
}

export default ProductCard;
