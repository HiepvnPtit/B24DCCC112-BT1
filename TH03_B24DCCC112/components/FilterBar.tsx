interface Props {
  category: string;
  minPrice: string;
  maxPrice: string;
  onCategoryChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

const categories = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

function FilterBar({
  category,
  minPrice,
  maxPrice,
  onCategoryChange,
  onMinPriceChange,
  onMaxPriceChange,
}: Props) {
  return (
    <div>
      <select value={category} onChange={e => onCategoryChange(e.target.value)}>
        <option value="">Tất cả danh mục</option>
        {categories.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Giá min"
        value={minPrice}
        onChange={e => onMinPriceChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá max"
        value={maxPrice}
        onChange={e => onMaxPriceChange(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;
