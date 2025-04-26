router.post('/autenticator', (request, response) => {
    return authController.handle(request, response);
});