import { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const PAGE_SIZE = 6;

function ProductList() {
  const { products } = useProducts();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  let filtered = products;

  if (search.trim()) {
    const lower = search.toLowerCase();
    filtered = filtered.filter(p => p.ten.toLowerCase().includes(lower));
  }

  if (category) {
    filtered = filtered.filter(p => p.danhMuc === category);
  }

  const min = minPrice ? Number(minPrice) : undefined;
  const max = maxPrice ? Number(maxPrice) : undefined;

  if (min !== undefined && !isNaN(min)) {
    filtered = filtered.filter(p => p.gia >= min);
  }
  if (max !== undefined && !isNaN(max)) {
    filtered = filtered.filter(p => p.gia <= max);
  }

  const totalPages = filtered.length ? Math.ceil(filtered.length / PAGE_SIZE) : 1;
  const start = (currentPage - 1) * PAGE_SIZE;
  const currentProducts = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <FilterBar
        category={category}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onCategoryChange={setCategory}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
      />
      <p>
        Tổng {filtered.length} sản phẩm. Trang {currentPage}/{totalPages}
      </p>

      {currentProducts.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ProductList;
