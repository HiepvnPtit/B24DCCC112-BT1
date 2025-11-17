interface Props {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: Props) {
  return (
    <input
      placeholder="Tìm kiếm theo tên..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
