import postDAO from '../DAO/postDAO';

function create(context) {
    async function query() {
        let result = postDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await postDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await postDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function removePost(id){
        let result = await postDAO.removePost(id);
        if (result) {
            return result;
        }


    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        removePost: removePost,
    };
}

export default {
    create: create
};

