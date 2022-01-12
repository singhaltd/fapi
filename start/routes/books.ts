import Route from '@ioc:Adonis/Core/Route'

Route.post('books', 'Book/IndicesController.getBook')
Route.get('book/:d', 'Book/IndicesController.findBook')

Route.get('bookcategory', 'Book/IndicesController.getCategory')
Route.post('bookcategory', 'Book/IndicesController.CreateCategory')

Route.post('bookcreate', 'Book/BscsController.store')


