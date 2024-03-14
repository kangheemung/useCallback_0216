import React, { useState, useMemo } from 'react';

function FilteredList() {
  const [filter, setFilter] = useState('');
  const [items] = useState([
    // リストのアイテム（ここには静的な配列を提供しますが、実際にはAPIからデータを取得するかもしれません）
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Orange' },
    { id: 3, name: 'Grape' },
    // ...他のアイテム
  ]);

  // `useMemo` フックを使ってフィルター処理されたアイテムのリストをメモ化します。
  const filteredItems = useMemo(() => {
    return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, items]); // 依存関係の配列に filter と items を渡します。

  return (
    <div>
      <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter items..." />

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li> // メモ化されたリストをレンダリングします。
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
