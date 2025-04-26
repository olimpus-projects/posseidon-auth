router.post('/login', (request, response) => {
  return loginController.handle(request, response);
});

router.post('/logout', (request, response) => {
  return logoutController.handle(request, response);
});