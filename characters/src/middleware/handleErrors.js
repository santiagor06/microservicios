module.exports = (err, req, res, nex) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
};
