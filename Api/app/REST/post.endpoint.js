import business from '../business/business.container';
import applicationException from "../service/applicationException";
const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/posts', async (request, response, next) => {
        try {
            const result = await business.getPostManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.put('/api/posts', async (request, response, next) => {
        try {
            const result = await business.getPostManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/posts/:id', async (request, response, next) => {
        let result = await business.getPostManager().query();
        response.status(200).send(result.find(obj => obj.id === request.params.id));
    });

    router.delete('/api/posts/:id', async (request, response, next) => {
        try {
            let result = await business.getPostManager().removePost(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};

export default postEndpoint;
