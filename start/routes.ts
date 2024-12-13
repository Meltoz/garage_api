/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const AnouncementController = () => import('#controllers/announcements_controller');
router.resource('api/announcements', AnouncementController);
