import { itemList, itemListInner } from './ItemList.css'

export const ItemList: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className={itemList}>
      <div className={itemListInner}>{children}</div>
    </div>
  )
}
