import Route from '@ioc:Adonis/Core/Route'

Route.post('review/:id', 'ReviewsController.store')
Route.get('review/:id', 'ReviewsController.getReview')