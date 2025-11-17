import React, { createContext, useContext, useReducer } from 'react';

export interface Product {
  id: number;
  ten: string;
  danhMuc: string;
  gia: number;
  soLuong: number;
  moTa: string;
}

type Action =
  | { type: 'ADD'; payload: Omit<Product, 'id'> }
  | { type: 'UPDATE'; payload: Product }
  | { type: 'DELETE'; payload: number };

interface ProductContextType {
  products: Product[];
  addProduct: (data: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

const initialProducts: Product[] = [
  { id: 1, ten: 'iPhone 15 Pro', danhMuc: 'Điện tử', gia:13245678, soLuong: 10, moTa: '...' },
  { id: 2, ten: 'Vương Ngọc Hiệp', danhMuc: 'Quần áo', gia: 1124356789, soLuong: 50, moTa: '...' },
  { id: 3, ten: 'Lê Minh Long', danhMuc: 'Đồ ăn', gia: 1234567, soLuong: 100, moTa: '...' },
  { id: 4, ten: 'Sách', danhMuc: 'Sách', gia: 1234567, soLuong: 15, moTa: '...' },

];

function productReducer(state: Product[], action: Action): Product[] {
  switch (action.type) {
    case 'ADD': {
      const newId = state.length ? Math.max(...state.map(p => p.id)) + 1 : 1;
      return [...state, { id: newId, ...action.payload }];
    }
    case 'UPDATE':
      return state.map(p => (p.id === action.payload.id ? action.payload : p));
    case 'DELETE':
      return state.filter(p => p.id !== action.payload);
    default:
      return state;
  }
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  const addProduct = (data: Omit<Product, 'id'>) => {
    dispatch({ type: 'ADD', payload: data });
  };

  const updateProduct = (product: Product) => {
    dispatch({ type: 'UPDATE', payload: product });
  };

  const deleteProduct = (id: number) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error('useProducts must be used within ProductProvider');
  return ctx;
}
