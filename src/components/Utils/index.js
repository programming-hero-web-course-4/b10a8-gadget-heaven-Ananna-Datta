import toast from 'react-hot-toast'

const getAllFavorites = () => {
  const all = localStorage.getItem('favorites')

  if (all) {
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites
  } else {
    console.log([])
    return []
  }
}

const addFavorite = product => {
  const favorites = getAllFavorites()
  const isExist = favorites.find(item => item.id == product.product_id)
  if (isExist) return toast.error('Product already exists!')

  favorites.push(product)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  toast.success('Successfully added!')
}

const removeFavorite = product_id => {
  const favorites = getAllFavorites()
  const remaining = favorites.filter(product => product.product_id != product_id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  toast.success('Successfully Removed!')
}

export { addFavorite, getAllFavorites, removeFavorite }