export const parseList = (response, model) => {
    let list = response.data.results;
    if (typeof list !== 'object') {
      list = [];
    }

    if (!model)
        return list;

    let models = []

    list.forEach(item => {
        models.push(new model(item))
    });

    return models;
  };