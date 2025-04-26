router.post('/register', (request, response) => {
  return registerController.handle(request, response);
});



router.get('/getUser', (request, response) => {
    return getuserController.handle(request, response);
});
