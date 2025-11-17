import { useState } from 'react';
import type { Product } from '../context/ProductContext';

const categories = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

interface Props {
  initialValues?: Product;
  onSubmit: (values: Omit<Product, 'id'>) => void;
}

interface FormValues {
  ten: string;
  danhMuc: string;
  gia: string;
  soLuong: string;
  moTa: string;
}

function ProductForm({ initialValues, onSubmit }: Props) {
  const [values, setValues] = useState<FormValues>({
    ten: initialValues?.ten ?? '',
    danhMuc: initialValues?.danhMuc ?? '',
    gia: initialValues ? String(initialValues.gia) : '',
    soLuong: initialValues ? String(initialValues.soLuong) : '',
    moTa: initialValues?.moTa ?? '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.ten.trim()) {
      newErrors.ten = 'Tên sản phẩm là bắt buộc';
    } else if (values.ten.trim().length < 3) {
      newErrors.ten = 'Tên sản phẩm phải ít nhất 3 ký tự';
    }

    const gia = Number(values.gia);
    if (!values.gia) {
      newErrors.gia = 'Giá là bắt buộc';
    } else if (isNaN(gia) || gia <= 0) {
      newErrors.gia = 'Giá phải là số dương';
    }

    const soLuong = Number(values.soLuong);
    if (!values.soLuong) {
      newErrors.soLuong = 'Số lượng là bắt buộc';
    } else if (isNaN(soLuong) || soLuong <= 0 || !Number.isInteger(soLuong)) {
      newErrors.soLuong = 'Số lượng phải là số nguyên dương';
    }

    if (!values.danhMuc) {
      newErrors.danhMuc = 'Danh mục là bắt buộc';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      ten: values.ten.trim(),
      danhMuc: values.danhMuc,
      gia: Number(values.gia),
      soLuong: Number(values.soLuong),
      moTa: values.moTa.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên sản phẩm</label>
        <input name="ten" value={values.ten} onChange={handleChange} />
        {errors.ten && <p>{errors.ten}</p>}
      </div>

      <div>
        <label>Danh mục</label>
        <select name="danhMuc" value={values.danhMuc} onChange={handleChange}>
          <option value="">-- Chọn danh mục --</option>
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.danhMuc && <p>{errors.danhMuc}</p>}
      </div>

      <div>
        <label>Giá</label>
        <input type="number" name="gia" value={values.gia} onChange={handleChange} />
        {errors.gia && <p>{errors.gia}</p>}
      </div>

      <div>
        <label>Số lượng</label>
        <input type="number" name="soLuong" value={values.soLuong} onChange={handleChange} />
        {errors.soLuong && <p>{errors.soLuong}</p>}
      </div>

      <div>
        <label>Mô tả</label>
        <textarea name="moTa" value={values.moTa} onChange={handleChange} />
      </div>

      <button type="submit">Lưu</button>
    </form>
  );
}

export default ProductForm;
