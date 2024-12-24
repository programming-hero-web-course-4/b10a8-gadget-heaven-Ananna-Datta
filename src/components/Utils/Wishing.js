import toast from 'react-hot-toast'
const getAllFavorites2 = () => {
  const all = localStorage.getItem('wishing')

  if (all) {
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites
  } else {
    console.log([])
    return []
  }
}

const addFavorite2 = product => {
  const favorites = getAllFavorites2()
  const isExist = favorites.find(item => item.id == product.product_id)
  if (isExist) return toast.error('Product already exists!')

  favorites.push(product)
  localStorage.setItem('wishing', JSON.stringify(favorites))
  toast.success('Successfully added!')
}

const removeFavorite2 = product_id => {
  const favorites = getAllFavorites2()
  const remaining = favorites.filter(product => product.product_id != product_id)
  localStorage.setItem('wishing', JSON.stringify(remaining))
  toast.success('Successfully Removed!')
}

export { addFavorite2, getAllFavorites2, removeFavorite2 }