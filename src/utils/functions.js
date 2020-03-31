function getDefaultPagination (pagination) {
  return pagination ? pagination : {
    page: 1,
    perPage: 25,
  };
}

module.exports = {
  getDefaultPagination,
};